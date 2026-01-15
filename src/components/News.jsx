import React, { useEffect, useState } from "react";
import Flamme from "../assets/images/Ghibli/flamme.gif";

function News() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [highlight, setHighlight] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/activity`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        const featuredActivity = data.find((act) => act[":featured"] == 1);
        if (featuredActivity) setHighlight(featuredActivity);
      })
      .catch((err) => console.error("Erreur activité :", err))
      .finally(() => setLoading(false));

    fetch(`${API_BASE_URL}/media?featured=1`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          const img = Array.isArray(data) ? data[0] : data;
          setFeaturedImage(img);
        }
      })
      .catch((err) => console.error("Erreur image :", err));
  }, [API_BASE_URL]);

  if (loading)
    return (
      <div className="newsDiv">
        <p>Chargement...</p>
      </div>
    );
  if (!highlight)
    return (
      <div className="newsDiv">
        <p>Aucune activité à la une.</p>
      </div>
    );

  const start = new Date(highlight[":start"].date);
  const end = new Date(highlight[":end"].date);
  const isSameDay = start.toDateString() === end.toDateString();

  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };

  const imageUrl = featuredImage
    ? `${API_BASE_URL}/uploads/highlight/${featuredImage[":url"]}`
    : "/assets/img/default_activity.jpg";

  return (
    <div className="newsDiv">
      <img src={Flamme} className="calcifer" alt="Calcifer" />
      <div className="affichageNewsTablette">
        <div className="imageNewsDiv">
          <h3>{highlight[":title"]}</h3>

          <img className="imageNews" src={imageUrl} alt={highlight[":title"]} />

          <div className="boutonDiv">
            <h4>Pour réserver :</h4>
            <br />
            <button className="boutonReservation">
              <a href="/agenda">Voir l'agenda</a>
            </button>
          </div>
        </div>

        <div className="texteNews">
          <div className="infosNewsDiv">
            <p className="infosNews">
              {isSameDay ? (
                <>
                  Le <b>{start.toLocaleDateString("fr-FR", dateOptions)}</b> de{" "}
                  <b>{start.toLocaleTimeString("fr-FR", timeOptions)}</b> à{" "}
                  <b>{end.toLocaleTimeString("fr-FR", timeOptions)}</b>
                </>
              ) : (
                <>
                  Du <b>{start.toLocaleDateString("fr-FR", dateOptions)}</b> au{" "}
                  <b>{end.toLocaleDateString("fr-FR", dateOptions)}</b>
                </>
              )}
            </p>
            <p className="infosNews">
              Intervenant·e : <strong>{highlight[":contributor"]}</strong>
            </p>
            {highlight[":places"] !== null && (
              <p className="infosNews">
                {highlight["remaining_places"] === 0
                  ? "Cet événement est complet"
                  : `Places disponibles : ${highlight["remaining_places"]}`}
              </p>
            )}
            <p className="infosNews">
              {parseInt(highlight[":price"]) === 0 ? (
                <b>Gratuit</b>
              ) : (
                `${highlight[":price"]} €`
              )}
            </p>
            <p className="descriptionNews">{highlight[":description"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
