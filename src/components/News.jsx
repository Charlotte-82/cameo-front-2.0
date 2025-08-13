import React, { useEffect, useState } from "react";

function News() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [highlight, setHighlight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/highlight/featured`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.photo_filename && data.title) {
          setHighlight(data);
        }
      })
      .catch((err) =>
        console.error("Erreur de chargement de l'actualité :", err)
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="newsDiv">
        <p>Chargement de l'actualité...</p>
      </div>
    );
  }

  if (!highlight) {
    return (
      <div className="newsDiv">
        <p>Aucune actualité à la une pour le moment.</p>
      </div>
    );
  }

  // Fonction pour formater la date
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

  return (
    <div className="newsDiv">
      <div className="imageNewsDiv">
        <img
          className="imageNews"
          src={`${API_BASE_URL.replace(/\/$/, "")}/uploads/highlight/${
            highlight.photo_filename
          }`}
          alt="Actualité à la une"
        />
      </div>

      <div className="texteNews">
        <h3>{highlight.title}</h3>
        {/* Affichage des dates selon le type d'activité */}
        {highlight.type === "event" ? (
          <div>
            <p>
              <strong>Du:</strong> {formatDate(highlight.start_date)}
            </p>
            <p>
              <strong>Au:</strong> {formatDate(highlight.end_date)}
            </p>
          </div>
        ) : (
          <div>
            <p>
              <strong>Date:</strong> {formatDate(highlight.date)}
            </p>
            <p>
              <strong>Durée:</strong> {highlight.duration} minutes
            </p>
          </div>
        )}
        <p>{highlight.description}</p>
        <button className="boutonReservation">
          <a href="/agenda">Voir l'agenda</a>
        </button>
      </div>
      <div className="col-12"></div>
    </div>
  );
}

export default News;
