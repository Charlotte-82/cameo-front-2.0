import React, { useEffect, useState } from "react";

function ReservDataManagement() {
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("existing");
  const [form, setForm] = useState({
    userId: "",
    firstname: "",
    lastname: "",
    activityId: "",
    placesCount: 1,
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Récupérer toutes les réservations (avec les jointures)
      const reservationsRes = await fetch(`${API_BASE_URL}/reservations`);
      const reservationsData = await reservationsRes.json();
      setReservations(reservationsData);

      // 2. Récupérer tous les utilisateurs
      const usersRes = await fetch(`${API_BASE_URL}/users`);
      const usersData = await usersRes.json();
      setUsers(usersData);

      // 3. Récupérer toutes les activités (events et workshops)
      const activitiesRes = await fetch(`${API_BASE_URL}/upcoming`);
      const activitiesData = await activitiesRes.json();
      setActivities(activitiesData);
    } catch (err) {
      console.error("Erreur lors du chargement des données :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleUserSelection = (e) => {
    const selectedUserId = e.target.value;
    const selectedUser = users.find(
      (user) => user.id_user === Number(selectedUserId)
    );

    if (selectedUser) {
      setForm({
        ...form,
        userId: selectedUserId,
        firstname: selectedUser.firstname,
        lastname: selectedUser.lastname,
      });
    } else {
      setForm({
        ...form,
        userId: selectedUserId,
        firstname: "",
        lastname: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construction du corps de la requête
    const reservationData = {
      // Si c'est un utilisateur existant, on envoie son ID
      user_id: mode === "existing" ? form.userId : 0, // 0 si c'est un invité
      firstname: mode === "guest" ? form.firstname : undefined,
      lastname: mode === "guest" ? form.lastname : undefined,
      activity_id: form.activityId,
      places_count: parseInt(form.placesCount),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log("Réservation créée avec succès:", result.message);

      // Réinitialise le formulaire et recharge les données
      setForm({
        userId: "",
        firstname: "",
        lastname: "",
        activityId: "",
        placesCount: 1,
      });
      setMode("existing");
      fetchData();
    } catch (error) {
      console.error("Erreur lors de la création d'une réservation:", error);
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")
    ) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la suppression: ${response.status}`);
      }

      console.log("Réservation supprimée avec succès.");
      fetchData(); // Recharge la liste pour mettre à jour l'affichage
    } catch (err) {
      console.error("Erreur lors de la suppression de la réservation:", err);
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

  if (loading) {
    return (
      <div className="loadingDiv">
        <p>Chargement des données...</p>
      </div>
    );
  }

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des réservations</h2>

      {/* Formulaire de création */}
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>Créer une réservation</h3>
          <form onSubmit={handleSubmit} className="adminForm3">
            <fieldset>
              {/* Choix du mode : Utilisateur existant ou invité */}

              <input
                type="radio"
                value="existing"
                checked={mode === "existing"}
                onChange={() => setMode("existing")}
              />
              <label className="labelRadioNews">Utilisateur existant</label>

              <input
                type="radio"
                value="guest"
                checked={mode === "guest"}
                onChange={() => setMode("guest")}
              />
              <label className="labelRadioNews">Invité</label>
              <br />
              <br />

              {/* Champs de saisie conditionnels */}
              {mode === "existing" ? (
                <div>
                  <label>Nom et prénom :</label>
                  <br></br>
                  <select
                    name="userId"
                    value={form.userId}
                    onChange={handleUserSelection}
                    required
                  >
                    <option value="">-- Sélectionnez un utilisateur --</option>
                    {users.map((user) => (
                      <option key={user.id_user} value={user.id_user}>
                        {user.firstname} {user.lastname}
                      </option>
                    ))}
                  </select>
                  <br></br>
                  <br></br>
                </div>
              ) : (
                <div>
                  <label>Nom de l'invité :</label>
                  <br></br>
                  <input
                    type="text"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleFormChange}
                    required
                  />
                  <br></br>
                  <br></br>
                  <label>Prénom de l'invité :</label>
                  <br></br>
                  <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleFormChange}
                    required
                  />
                  <br></br>
                  <br></br>
                </div>
              )}

              {/* Choix de l'activité */}
              <div>
                <label>Activité à réserver:</label>
                <br></br>
                <select
                  name="activityId"
                  value={form.activityId}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">-- Sélectionnez une activité --</option>
                  {activities.map((activity) => (
                    <option
                      key={`${activity.type}-${
                        activity.id_event || activity.id_workshop
                      }`}
                      value={`${activity.type}-${
                        activity.id_event || activity.id_workshop
                      }`}
                    >
                      {activity.title} ({activity.type}) - {activity.places}{" "}
                      places restantes
                    </option>
                  ))}
                </select>
                <br></br>
                <br></br>
              </div>

              <div>
                <label>Nombre de places à réserver:</label>
                <br></br>
                <input
                  type="number"
                  name="placesCount"
                  value={form.placesCount}
                  onChange={handleFormChange}
                  min="1"
                  required
                />
                <br></br>
                <br></br>
              </div>

              <button type="submit">Créer la réservation</button>
            </fieldset>
          </form>
        </div>

        {/* Table d'affichage des réservations */}
        <div className="cakeTableDiv">
          <h3>Liste des réservations</h3>
          <table className="cakeTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom de l'utilisateur</th>
                <th>Activité</th>
                <th>Type d'activité</th>
                <th>Date de l'activité</th>
                <th>Date de réservation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length > 0 ? (
                reservations.map((reservation) => (
                  <tr key={reservation.id_reservation}>
                    <td>{reservation.id_reservation}</td>
                    <td>
                      {reservation.user_firstname && reservation.user_lastname
                        ? `${reservation.user_firstname} ${reservation.user_lastname}`
                        : "Invité"}
                    </td>
                    <td>{reservation.activity_title}</td>
                    <td>{reservation.type}</td>
                    <td>{formatDate(reservation.activity_date)}</td>
                    <td>{formatDate(reservation.created_at)}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(reservation.id_reservation)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">Aucune réservation trouvée.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReservDataManagement;
