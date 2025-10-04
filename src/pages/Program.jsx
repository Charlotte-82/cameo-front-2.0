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

  const fetchUpcomingItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/upcoming`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setItems(data);
      } else {
        console.error(
          "Les données des activités ne sont pas un tableau :",
          data
        );
        setItems([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcomingItems();
  }, []);

  const handleReservation = async (placesCount) => {
    if (!user || !selectedItem) return;

    const activityId =
      selectedItem.type === "workshop"
        ? `workshop-${selectedItem.id_workshop}`
        : `event-${selectedItem.id_event}`;
    const reservationData = {
      user_id: user.id_user,
      activity_id: activityId,
      places_count: parseInt(placesCount),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(
          `Erreur lors de la réservation : ${
            result.error || response.statusText
          }`
        );
      } else {
        alert("Réservation créée avec succès !");
        fetchUpcomingItems();
        closeModal();
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
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

  const formatEndDate = (dateString, duration) => {
    const startDate = new Date(dateString);
    const endDate = new Date(startDate.getTime() + duration * 60000);
    const options = { hour: "2-digit", minute: "2-digit" };
    return endDate.toLocaleTimeString("fr-FR", options);
  };

  return (
    <div className="program">
      <hr className="NavigLigne2"></hr>
      <hr className="NavigLigne21"></hr>
      <h1>Activités à venir</h1>
      <ul className="schedule-list">
        {items.map((item) => (
          <li
            key={item.type === "workshop" ? item.id_workshop : item.id_event}
            className="schedule-item"
          >
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Intervenant:</p>
              <p className="infortantes">
                <strong>{item.contributor}</strong>
              </p>

              <p>
                <span>
                  {item.type === "workshop"
                    ? `Le ${new Date(
                        item.date
                      ).toLocaleDateString()} de ${new Date(
                        item.date
                      ).toLocaleString("fr-FR", {
                        timeStyle: "short",
                      })} `
                    : ` Du ${new Date(
                        item.start_date
                      ).toLocaleDateString()} au ${new Date(
                        item.start_date
                      ).toLocaleString("fr-FR", {
                        timeStyle: "short",
                      })} `}
                </span>
                <span>
                  {item.type === "workshop"
                    ? ` à ${formatEndDate(item.date, item.duration)}`
                    : `au ${new Date(
                        item.end_date
                      ).toLocaleDateString()} à ${new Date(
                        item.end_date
                      ).toLocaleString("fr-FR", {
                        timeStyle: "short",
                      })} `}
                </span>
              </p>
              <p></p>
              <p>{item.price} €</p>
              <p>{item.description}</p>
              <p>Places disponibles: {item.places}</p>
            </div>
            <button
              onClick={() => handleReservationClick(item)}
              className="reservButtonProgram"
            >
              Réserver
            </button>
          </li>
        ))}
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
