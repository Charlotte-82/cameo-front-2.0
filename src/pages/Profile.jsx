import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { client } = useAuth();
  const [products, setProducts] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    tel: "",
    newsletter: "0",
    product_id: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loadingReservations, setLoadingReservations] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (client?.id_client) {
      setForm({
        lastname: client.client_lastname,
        firstname: client.client_firstname,
        mail: client.client_mail,
        tel: client.client_telephone || "",
        newsletter: client.client_newsletter_agreement ? "1" : "0",
        product_id: client.product_id ? String(client.product_id) : "",
        password: "",
      });
      fetchProducts();
      fetchReservations(client.id_client);
    }
  }, [client]);

  const fetchProducts = async () => {
    try {
      const resEntier = await fetch(
        `${API_BASE_URL}/product?type=gateau-entier`,
      );
      if (!resEntier.ok) throw new Error(`Erreur ${resEntier.status}`);
      const gateauxEntiers = await resEntier.json();

      const resPart = await fetch(`${API_BASE_URL}/product?type=gateau-part`);
      if (!resPart.ok) throw new Error(`Erreur ${resPart.status}`);
      const gateauxParts = await resPart.json();

      const allCakes = [...gateauxEntiers, ...gateauxParts];

      setProducts(allCakes);
    } catch (err) {
      console.error("Erreur lors du fetch des produits :", err);
    }
  };

  const fetchReservations = async (clientId) => {
    setLoadingReservations(true);
    try {
      const res = await fetch(`${API_BASE_URL}/booking?client=${clientId}`);
      if (!res.ok) throw new Error(`Erreur ${res.status}`);
      const bookings = await res.json();

      const bookingsWithActivity = await Promise.all(
        bookings.map(async (b, index) => {
          try {
            const activityRes = await fetch(
              `${API_BASE_URL}/activity/${b.activity}`,
            );
            if (!activityRes.ok) throw new Error("Activité introuvable");

            const a = await activityRes.json();
            console.log("📊 Structure de l'activité:", a);
            return {
              ...b,
              places_reserved: b.places,

              title: a[":title"],
              type: a[":type"],
              start: a[":start"]?.date,
              end: a[":end"]?.date,
              price: a[":price"],
              contributor: a[":contributor"],
              remainingPlaces: a["remaining_places"],

              key: `${b.client}-${b.activity}-${index}`,
            };
          } catch (err) {
            console.error(`Erreur pour l'activité ${b.activity}:`, err);
            return {
              ...b,
              title: "Activité indisponible",
              key: `${b.client}-${b.activity}-${index}`,
            };
          }
        }),
      );

      setReservations(bookingsWithActivity);
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
      setReservations([]);
    } finally {
      setLoadingReservations(false);
    }
  };

  const handleCancelReservation = async (clientId, activityId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir annuler cette réservation ?"))
      return;
    try {
      const res = await fetch(
        `${API_BASE_URL}/booking/${clientId}/${activityId}`,
        {
          method: "DELETE",
        },
      );
      if (!res.ok) throw new Error(`Erreur ${res.status}`);
      fetchReservations(client.id_client);
    } catch (err) {
      console.error(err);
    }
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
      client_firstname: form.firstname,
      client_lastname: form.lastname,
      client_mail: form.mail,
      client_telephone: form.tel,
      client_newsletter_agreement: form.newsletter === "1" ? 1 : 0,
      product_id: form.product_id ? parseInt(form.product_id, 10) : null,
    };

    if (form.password && form.password.trim() !== "") {
      userData.client_password = form.password;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/client/${client.id_client}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || `Erreur HTTP ${res.status}`);
      }

      setSuccess("Vos informations ont été mises à jour !");
      setIsEditing(false);

      window.location.reload();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (!client) return <div>Chargement des informations...</div>;

  return (
    <div className="profile">
      <h1>Bonjour {client.client_firstname} !</h1>
      {!isEditing ? (
        <div className="userInformationsDiv">
          <ul>
            <li>
              <strong>Nom et prénom:</strong> {client.client_lastname}{" "}
              {client.client_firstname}
            </li>
            <li>
              <strong>Email:</strong> {client.client_mail}
            </li>
            <li>
              <strong>Téléphone:</strong>{" "}
              {client.client_telephone || "Non renseigné"}
            </li>
            <li>
              <strong>Newsletter:</strong>{" "}
              {client.client_newsletter_agreement ? "Oui" : "Non"}
            </li>
            <li>
              <strong>Gâteau préféré:</strong>{" "}
              {client.product_name || "Non spécifié"}
            </li>
          </ul>
          <button onClick={() => setIsEditing(true)}>
            Modifier mes informations
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profileForm">
          <label>Nom:</label>
          <input
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
          />
          <br></br>
          <label>Prénom:</label>
          <input
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
          <br></br>
          <label>Email:</label>
          <input
            type="email"
            name="mail"
            value={form.mail}
            onChange={handleChange}
            required
          />
          <br></br>
          <label>Téléphone:</label>
          <input
            type="tel"
            name="tel"
            value={form.tel}
            onChange={handleChange}
          />
          <br></br>
          <label>Newsletter:</label>
          <div>
            <input
              type="radio"
              name="newsletter"
              value="1"
              checked={form.newsletter === "1"}
              onChange={handleChange}
            />{" "}
            Oui
            <input
              type="radio"
              name="newsletter"
              value="0"
              checked={form.newsletter === "0"}
              onChange={handleChange}
            />{" "}
            Non
          </div>
          <br></br>
          <label>Gâteau préféré:</label>
          <select
            name="product_id"
            value={form.product_id}
            onChange={handleChange}
          >
            <option value="">--Choisissez un gâteau--</option>
            {products.map((p, index) => (
              <option
                key={`${p.id_product || p.id}-${index}`}
                value={p.id_product || p.id}
              >
                {p.product_name || p.name}
              </option>
            ))}
          </select>
          <br></br>
          <label>Nouveau mot de passe:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Laissez vide pour ne pas changer"
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              cursor: "pointer",
            }}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
          </span>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <button type="submit" style={{ marginRight: "1em" }}>
              Enregistrer
            </button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Annuler
            </button>
          </div>
        </form>
      )}

      <div className="userReservationsDiv">
        <h3>Vos réservations</h3>
        {loadingReservations ? (
          <p>Chargement de vos réservations...</p>
        ) : reservations.length > 0 ? (
          <ul className="reservationList">
            {reservations.map((r) => (
              <li key={r.key} className="reservationItem">
                <div className="reservationDetail">
                  <span className="label">Activité:</span>
                  <span className="value">
                    <strong>{r.title}</strong> ({r.type})
                  </span>
                </div>
                <div className="reservationDetail">
                  <span className="label">Date de début:</span>
                  <span className="value">
                    {new Date(r.start).toLocaleString("fr-FR")}
                  </span>
                </div>
                <div className="reservationDetail">
                  <span className="label">Date de fin:</span>
                  <span className="value">
                    {new Date(r.end).toLocaleString("fr-FR")}
                  </span>
                </div>
                <div className="reservationDetail">
                  <span className="label">Places réservées:</span>
                  <span className="value">{r.places_reserved}</span>
                </div>
                {r.remainingPlaces !== undefined && (
                  <div className="reservationDetail">
                    <span className="label">Places restantes:</span>
                    <span className="value">{r.remainingPlaces}</span>
                  </div>
                )}
                <div className="reservationDetail">
                  <span className="label">Statut:</span>
                  <span className="value">
                    {r.is_canceled ? "Annulée" : "Confirmée"}
                  </span>
                </div>
                <div className="reservationActions">
                  {!r.is_canceled && (
                    <button
                      onClick={() =>
                        handleCancelReservation(r.client, r.activity)
                      }
                    >
                      Annuler cette réservation
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Vous n'avez aucune réservation.</p>
        )}
      </div>

      {error && <p style={{ marginLeft: "2em", color: "red" }}>{error}</p>}
      {success && (
        <p style={{ marginLeft: "2em", color: "green" }}>{success}</p>
      )}
    </div>
  );
}

export default Profile;
