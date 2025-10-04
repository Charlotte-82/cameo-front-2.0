import React, { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";

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

  useEffect(() => {
    if (!loading && highlight) {
      const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
      );
      const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
      );
    }
  }, [loading, highlight]);

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

  const formatEndDate = (dateString, duration) => {
    const startDate = new Date(dateString);
    const endDate = new Date(startDate.getTime() + duration * 60000);
    const options = { hour: "2-digit", minute: "2-digit" };
    return endDate.toLocaleTimeString("fr-FR", options);
  };

  return (
    <div className="newsDiv">
      <div className="affichageNewsTablette">
        <div className="imageNewsDiv">
          <h3>{highlight.title}</h3>
          <img
            className="imageNews"
            src={`${API_BASE_URL.replace(/\/$/, "")}/uploads/highlight/${
              highlight.photo_filename
            }`}
            alt="Actualité à la une"
          />
          <div className="boutonDiv">
            <h4>Pour réserver:</h4>
            <br></br>
            <button className="boutonReservation">
              <a href="/agenda">Voir l'agenda</a>
            </button>
          </div>
        </div>

        <div className="texteNews">
          {highlight.type === "event" ? (
            <div className="infosNewsDiv">
              <p className="infosNews">
                Du: <strong>{formatDate(highlight.start_date)} </strong>
                Au: <strong>{formatDate(highlight.end_date)}</strong>
              </p>
              <p className="infosNews">
                Intervenant·e: <strong>{highlight.contributor}</strong>
              </p>
              <p className="infosNews">
                Places disponibles restantes:{" "}
                <strong>{highlight.places}</strong>
              </p>
              <p className="infosNews">
                Prix: <strong>{highlight.price}</strong>
              </p>
            </div>
          ) : (
            <div className="infosNewsDiv">
              <p className="infosNews">
                Date: le <strong>{formatDate(highlight.date)} </strong>
                jusqu'à{" "}
                <strong>
                  {formatEndDate(highlight.date, highlight.duration)}
                </strong>
              </p>
              <p className="infosNews">
                Intervenant·e: <strong>{highlight.contributor}</strong>
              </p>
              <p className="infosNews">
                Places disponibles restantes:{" "}
                <strong>{highlight.places}</strong>
              </p>
              <p className="infosNews">
                Prix: <strong>{highlight.price} €</strong> / personne
              </p>
              <p className="descriptionNews">{highlight.description}</p>
            </div>
          )}
        </div>
        <div className="descriptionButton">
          <button
            type="button"
            className="btn"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="bottom"
            data-bs-content={highlight.description}
            style={{ backgroundColor: "#6c1304", color: "#ffdfb7" }}
          >
            Description
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
