import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import ReservationModal from "../components/ReservationModal.jsx";

function Program() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { isAuthenticated, user } = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchUpcomingActivities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/activity`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (Array.isArray(data)) {
        const now = new Date();

        const upcomingItems = data
          .filter((item) => {
            const dateString = item[":start"]?.date;
            return dateString && new Date(dateString) >= now;
          })
          .sort(
            (a, b) => new Date(a[":start"].date) - new Date(b[":start"].date)
          );

        setItems(upcomingItems);
      } else {
        setItems([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcomingActivities();
  }, []);

  const handleReservation = async (placesCount) => {
    if (!user || !selectedItem) return;

    const reservationData = {
      user_id: user.id_user,
      activity_id: selectedItem[":id"],
      places_count: parseInt(placesCount),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const result = await response.json();
        alert(`Erreur : ${result.error || response.statusText}`);
      } else {
        alert("Réservation effectuée !");
        fetchUpcomingActivities();
        closeModal();
      }
    } catch (error) {
      alert("Erreur de connexion.");
    }
  };

  const handleReservationClick = (item) => {
    if (!isAuthenticated) {
      alert(
        "Les réservations en ligne sont réservées aux utilisateurs enregistrés. Veuillez créer un compte avant de faire une réservation ou veuillez appeler directement le café pour réserver par téléphone."
      );
      return;
    }

    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  if (isLoading) {
    return <div>Chargement des activités à venir...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des activités : {error}</div>;
  }

  if (items.length === 0) {
    return <div>Aucune activité à venir pour le moment.</div>;
  }

  return (
    <div className="program">
      <hr className="NavigLigne2" />
      <hr className="NavigLigne21" />
      <h1>Activités à venir</h1>
      <ul className="schedule-list">
        {items.map((item) => {
          const start = new Date(item[":start"].date);
          const end = new Date(item[":end"].date);

          const isSameDay =
            start.getDate() === end.getDate() &&
            start.getMonth() === end.getMonth() &&
            start.getFullYear() === end.getFullYear();

          const timeOptions = { hour: "2-digit", minute: "2-digit" };
          const dateOptions = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          };

          return (
            <li key={item[":id"]} className="schedule-item">
              <div className="item-info">
                {item[":type"] === "workshop" ? (
                  <span className="badge-type">Atelier</span>
                ) : (
                  <span className="badge-type">Événement</span>
                )}
                <h3>{item[":title"]}</h3>
                <p>
                  Intervenant: <strong>{item[":contributor"]}</strong>
                </p>

                <p className="activity-date">
                  {isSameDay ? (
                    <>
                      Le <b>{start.toLocaleDateString("fr-FR", dateOptions)}</b>{" "}
                      de <b>{start.toLocaleTimeString("fr-FR", timeOptions)}</b>{" "}
                      à <b>{end.toLocaleTimeString("fr-FR", timeOptions)}</b>
                    </>
                  ) : (
                    <>
                      Du <b>{start.toLocaleDateString("fr-FR", dateOptions)}</b>{" "}
                      à <b>{start.toLocaleTimeString("fr-FR", timeOptions)}</b>{" "}
                      au <b>{end.toLocaleDateString("fr-FR", dateOptions)}</b> à{" "}
                      <b>{end.toLocaleTimeString("fr-FR", timeOptions)}</b>
                    </>
                  )}
                </p>

                <p className="price">
                  {parseInt(item[":price"]) === 0 ? (
                    <span className="free-tag">
                      <b>Gratuit</b>
                    </span>
                  ) : (
                    `${item[":price"]} €`
                  )}
                </p>
                <p className="description">{item[":description"]}</p>
                {item[":places"] !== null && (
                  <p className="places">
                    Places disponibles : {item[":places"]}
                  </p>
                )}
              </div>

              {item[":places"] !== null && (
                <button
                  onClick={() => handleReservationClick(item)}
                  className="reservButtonProgram"
                >
                  Réserver
                </button>
              )}
            </li>
          );
        })}
      </ul>
      {isModalOpen && (
        <ReservationModal
          item={selectedItem}
          onClose={closeModal}
          onReserve={handleReservation}
        />
      )}
    </div>
  );
}

export default Program;
