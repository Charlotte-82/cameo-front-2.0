import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { user, updateUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    tel: "",
    newsletter: "",
    id_cake: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loadingReservations, setLoadingReservations] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (user && user.id_user) {
      setForm({
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        tel: user.tel,
        newsletter: user.newsletter,
        id_cake: user.id_cake || "",
        password: "",
      });
      fetchCakes();
      fetchReservations(user.id_user);
    }
  }, [user]);

  if (!user) {
    return <div>Chargement des informations de l'utilisateur...</div>;
  }

  const fetchCakes = () => {
    fetch(`${API_BASE_URL}/cakes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then(setCakes)
      .catch((err) => console.error("Erreur lors du fetch des gâteaux :", err));
  };

  const fetchReservations = async (userId) => {
    setLoadingReservations(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/reservations/by-user/${userId}`
      );
      if (!response.ok) {
        throw new Error(
          `Erreur lors de la récupération des réservations : ${response.status}`
        );
      }
      const data = await response.json();
      setReservations(data);
    } catch (err) {
      console.error("Erreur lors du chargement des réservations :", err);
    } finally {
      setLoadingReservations(false);
    }
  };

  const handleCancelReservation = async (reservationId) => {
    if (
      !window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?")
    ) {
      return;
    }
    try {
      const response = await fetch(
        `${API_BASE_URL}/reservations/${reservationId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erreur lors de l'annulation de la réservation: ${response.status}`
        );
      }

      console.log("Réservation annulée avec succès.");
      fetchReservations(user.id_user);
    } catch (err) {
      console.error("Erreur lors de l'annulation de la réservation:", err);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const userData = {
      lastname: form.lastname,
      firstname: form.firstname,
      email: form.email,
      tel: form.tel,
      newsletter: form.newsletter,
      id_cake: form.id_cake,
    };

    if (form.password) {
      userData.password = form.password;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${user.id_user}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
      }

      const updatedUser = { ...user, ...userData };
      updateUser(updatedUser);

      setSuccess("Vos informations ont été mises à jour avec succès !");
      setIsEditing(false);
    } catch (err) {
      setError(err.message || "Erreur lors de la mise à jour du profil.");
      console.error("Erreur lors de la mise à jour du profil :", err);
    }
  };

  return (
    <div className="profile">
      <h1>Bonjour {user.firstname} !</h1>
      <h2>Informations de votre compte</h2>
      <div className="profileInfo">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        {!isEditing ? (
          <div className="userInformationsDiv">
            <ul>
              <li>
                <span className="catInfo">Vos nom et prénom: </span>
                {user.lastname} {user.firstname}
              </li>
              <li>
                <span className="catInfo">Votre email: </span>
                {user.email}
              </li>
              <li>
                <span className="catInfo">Votre numéro de téléphone: </span>
                {user.tel}
              </li>
              <li>
                <span className="catInfo">
                  Voulez-vous recevoir la newsletter ?{" "}
                </span>
                {user.newsletter ? "Oui" : "Non"}
              </li>
              <li>
                <span className="catInfo">Votre gâteau préféré: </span>
                {cakes.find((cake) => cake.id_cake === user.id_cake)?.name ||
                  "Non spécifié"}
              </li>
            </ul>
            <button onClick={() => setIsEditing(true)}>
              Modifier mes informations
            </button>
          </div>
        ) : (
          <div className="userInformationsDiv">
            <form onSubmit={handleSubmit} className="adminForm3">
              <fieldset>
                <legend>Modifier mes informations</legend>
                <label>Nom:</label>
                <input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <label>Prénom:</label>
                <input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <label>Email:</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <label>Téléphone:</label>
                <input
                  name="tel"
                  type="tel"
                  value={form.tel}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <label>L'utilisateur accepte-t-il la newsletter ?</label>
                <div className="inputRadioRegister">
                  <input
                    name="newsletter"
                    type="radio"
                    value="1"
                    checked={form.newsletter === "1" || form.newsletter === 1}
                    onChange={handleChange}
                  />
                  <label className="labelRadioNews">Oui</label>
                  <input
                    name="newsletter"
                    type="radio"
                    value="0"
                    checked={form.newsletter === "0" || form.newsletter === 0}
                    onChange={handleChange}
                  />
                  <label className="labelRadioNews">Non</label>
                </div>
                <br />
                <label>Gâteau préféré</label>
                <select
                  name="id_cake"
                  value={form.id_cake}
                  onChange={handleChange}
                >
                  <option value="">--Choisissez un gâteau préféré--</option>
                  {cakes.map((cake) => (
                    <option key={cake.id_cake} value={cake.id_cake}>
                      {cake.name}
                    </option>
                  ))}
                </select>
                <br />
                <br />
                <label>
                  Nouveau mot de passe (laissez vide si vous ne voulez pas le
                  changer)
                </label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Enregistrer les modifications</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Annuler
                </button>
              </fieldset>
            </form>
          </div>
        )}
        <div className="userReservationsDiv">
          <h3>Vos réservations</h3>
          {loadingReservations ? (
            <p>Chargement de vos réservations...</p>
          ) : reservations.length > 0 ? (
            <ul className="reservationList">
              {reservations.map((reservation) => (
                <li
                  key={reservation.id_reservation}
                  className="reservationItem"
                >
                  <div className="reservationDetail">
                    <span className="label">Activité:</span>
                    <span className="value">
                      <strong>{reservation.activity_title}</strong>
                    </span>
                  </div>
                  <div className="reservationDetail">
                    <span className="label">Date:</span>
                    <span className="value">
                      {formatDate(reservation.activity_date)}
                    </span>
                  </div>
                  <div className="reservationDetail">
                    <span className="label">Places réservées:</span>
                    <span className="value">{reservation.places_count}</span>
                  </div>
                  <div className="reservationDetail">
                    <span className="label">Statut:</span>
                    <span className="value">
                      {reservation.is_canceled ? "Annulée" : "Confirmée"}
                    </span>
                  </div>
                  <div className="reservationActions">
                    {!reservation.is_canceled && (
                      <button
                        onClick={() =>
                          handleCancelReservation(reservation.id_reservation)
                        }
                      >
                        Annuler
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Vous n'avez aucune réservation pour le moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
