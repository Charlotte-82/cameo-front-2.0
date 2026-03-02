import React, { useEffect, useState } from "react";

function ReservDataManagement() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [reservations, setReservations] = useState([]);
  const [clients, setClients] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    clientId: "",
    activityId: "",
    places: 1,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resBookings, resClients, resActivities] = await Promise.all([
        fetch(`${API_BASE_URL}/booking`),
        fetch(`${API_BASE_URL}/client`),
        fetch(`${API_BASE_URL}/activity`),
      ]);

      const bookingsData = await resBookings.json();
      const clientsData = await resClients.json();
      const activitiesData = await resActivities.json();

      setReservations(bookingsData);
      setClients(clientsData);
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.clientId || !form.activityId) return;

    try {
      const formatSQLDate = (date = new Date()) => {
        const pad = (n) => n.toString().padStart(2, "0");
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
          date.getDate(),
        )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
          date.getSeconds(),
        )}`;
      };

      const bookingData = {
        client_id: parseInt(form.clientId),
        activity_id: parseInt(form.activityId),
        places_reserved: parseInt(form.places),
        created_at: formatSQLDate(),
        updated_at: formatSQLDate(),
      };

      const response = await fetch(`${API_BASE_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        fetchData();
        setForm({ clientId: "", activityId: "", places: 1 });
      } else {
        const errorData = await response.json();
        alert("Erreur: " + errorData.error);
      }
    } catch (err) {
      console.error("Erreur création réservation :", err);
    }
  };

  const handleDelete = async (clientId, activityId) => {
    if (!window.confirm("Supprimer cette réservation ?")) return;

    try {
      const response = await fetch(
        `${API_BASE_URL}/booking/${clientId}/${activityId}`,
        { method: "DELETE" },
      );
      if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
      fetchData();
    } catch (err) {
      console.error("Erreur suppression réservation :", err);
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  if (loading)
    return (
      <div>
        <p>Chargement des données...</p>
      </div>
    );

  return (
    <div>
      <h2>Gestion des réservations</h2>

      <div className="reservationFormDiv">
        <h3>Créer une réservation</h3>
        <form onSubmit={handleSubmit} className="adminForm3">
          <fieldset>
            <div>
              <label>Utilisateur :</label>
              <select
                name="clientId"
                value={form.clientId}
                onChange={handleFormChange}
                required
              >
                <option value="">-- Sélectionnez un utilisateur --</option>
                {clients.map((client, index) => (
                  <option key={`${client.id}-${index}`} value={client.id}>
                    {client.firstname} {client.lastname}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Activité :</label>
              <select
                name="activityId"
                value={form.activityId}
                onChange={handleFormChange}
                required
              >
                <option value="">-- Sélectionnez une activité --</option>
                {activities.map((activity, index) => {
                  const startDate = new Date(activity[":start"].date);
                  if (startDate < new Date()) return null;

                  return (
                    <option
                      key={`${activity[":id"]}-${index}`}
                      value={activity[":id"]}
                    >
                      {activity[":title"]} —{" "}
                      {startDate.toLocaleDateString("fr-FR")}
                    </option>
                  );
                })}
              </select>
            </div>
            <label>Nombre de places</label>
            <input
              type="number"
              name="places"
              min="1"
              value={form.places}
              onChange={handleFormChange}
              required
            />
            <br></br>

            <button style={{ marginTop: "1em" }} type="submit">
              Créer la réservation
            </button>
          </fieldset>
        </form>
      </div>

      <div>
        <h3>Liste des réservations</h3>
        {reservations.length > 0 ? (
          <div className="cards-grid">
            {reservations.map((reservation, index) => {
              const client = clients.find((c) => c.id === reservation.client);
              const activity = activities.find(
                (a) => a[":id"] === reservation.activity,
              );

              const formatBackendDate = (backendDateObj) => {
                if (!backendDateObj || !backendDateObj.date) return "?";
                return formatDate(backendDateObj.date.replace(" ", "T"));
              };

              return (
                <div
                  className="card"
                  style={{ border: "solid 3px #582108" }}
                  key={`${reservation.client}-${reservation.activity}-${index}`}
                >
                  <h3>
                    {client
                      ? `${client.firstname} ${client.lastname}`
                      : "Invité"}
                  </h3>
                  <p>
                    <strong>Activité :</strong>{" "}
                    {activity ? activity[":title"] : "Inconnue"}
                  </p>
                  <p>
                    <strong>Type :</strong> {activity ? activity[":type"] : "?"}
                  </p>
                  <p>
                    <strong>Date :</strong>{" "}
                    {activity ? formatBackendDate(activity[":start"]) : "?"}
                  </p>
                  <p>
                    <strong>Réservé le :</strong>{" "}
                    {formatDate(reservation.created)}
                  </p>
                  <p>
                    <strong>Nombre de places réservées :</strong>{" "}
                    {reservation ? reservation.places : "?"}
                  </p>
                  <button
                    onClick={() =>
                      handleDelete(reservation.client, reservation.activity)
                    }
                  >
                    Supprimer
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Aucune réservation trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default ReservDataManagement;
