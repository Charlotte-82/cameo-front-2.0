import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  // const [actu, setActu] = useState(null);

  // const baseURL = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   const fetchActu = async () => {
  //     try {
  //       const endpoints = [
  //         // `${baseURL}/wp-json/wp/v2/article?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
  //         `${baseURL}/wp-json/wp/v2/evenement?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
  //         `${baseURL}/wp-json/wp/v2/atelier?meta_key=mettre_en_actu&meta_value=1&per_page=1`,
  //       ];
  //       console.log(process.env.REACT_APP_API_URL);
  //       const responses = await Promise.all(
  //         endpoints.map((url) => axios.get(url).catch(() => []))
  //       );

  //       for (const res of responses) {
  //         if (res.data && res.data.length > 0) {
  //           setActu(res.data[0]);
  //           break;
  //         }
  //       }
  //     } catch (err) {
  //       console.error("Erreur lors du chargement de l’actualité :", err);
  //     }
  //   };

  //   fetchActu();
  // }, []);

  // if (!actu) return null;

  // const { title, acf, excerpt } = actu;

  // const parseDate = (str) => {
  //   if (!str) return null;
  //   const [day, month, year] = str.split("/");
  //   return new Date(`${year}-${month}-${day}`);
  // };

  // const formatDate = (str) => {
  //   const date = parseDate(str);
  //   if (!date || isNaN(date)) return str;
  //   return date.toLocaleDateString("fr-FR", {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // };

  // const renderDate = () => {
  //   if (!acf?.date_de_debut) return null;

  //   const dateDebut = acf.date_de_debut;
  //   const dateFin = acf.date_de_fin;

  //   if (!dateFin || dateDebut === dateFin) {
  //     return <p>Le {formatDate(dateDebut)}</p>;
  //   }

  //   return (
  //     <p>
  //       Du {formatDate(dateDebut)} au {formatDate(dateFin)}
  //     </p>
  //   );
  // };

  return (
    <div className="newsDiv">
      {/* <div className="imageNewsDiv">
        {acf?.image && typeof acf.image === "object" && (
          <img
            className="imageNews"
            src={acf.image.url}
            alt={acf.image.alt || title?.rendered}
          />
        )}
      </div>

      <div className="texteNews">
        {acf?.titre && <h3>{acf.titre}</h3>}

        {acf?.intervenant && (
          <p>
            <strong>Intervenant :</strong> {acf.intervenant}
          </p>
        )}
        <p>
          <strong>Date et Heure</strong>
        </p>
        {renderDate()}

        {(acf?.heure_de_debut || acf?.heure_de_fin) && (
          <p>
            {acf.heure_de_debut || ""} – {acf.heure_de_fin || ""}
          </p>
        )}
        <p>
          <strong>Lieu</strong>
        </p>
        {acf?.lieu && <p className="lieuEvent">{acf.lieu}</p>}

        {acf?.description && (
          <p className="descriptionParaph">{acf.description}</p>
        )}

        {acf?.prix && (
          <p>
            <strong>Prix : </strong>
            {acf.prix}
          </p>
        )}

        <button className="boutonReservation">
          <a href="/agenda">Voir l'agenda</a>
        </button>
      </div>

      {excerpt?.rendered && (
        <div className="col-12">
          <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
        </div>
      )} */}
    </div>
  );
}

export default News;
