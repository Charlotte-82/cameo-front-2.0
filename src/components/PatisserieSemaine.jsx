import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function PatisserieSemaine() {
  // const [patisserie, setPatisserie] = useState(null);
  // const baseURL = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${baseURL}/wp-json/wp/v2/patisserie_semaine?per_page=1&orderby=date&order=desc`
  //     )
  //     .then((res) => {
  //       if (res.data && res.data.length > 0) {
  //         setPatisserie(res.data[0].acf);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Erreur chargement pâtisserie", err);
  //     });
  // }, []);
  // console.log(process.env.REACT_APP_API_URL);
  // if (!patisserie) return <p>Chargement...</p>;

  // const mediaSourceUrl = patisserie.extrait_video_ou_image;

  // const renderMedia = (url) => {
  //   if (!url) return null;

  //   const youtubeMatch = url.match(
  //     /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|.+youtu.be\/)|m\.youtube\.com\/watch\?v=)([^&?/\s]+)/
  //   );

  //   if (youtubeMatch && youtubeMatch[1]) {
  //     const videoId = youtubeMatch[1];

  //     const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0&rel=0`;
  //     return (
  //       <iframe
  //         src={embedSrc}
  //         title={`Vidéo YouTube ${patisserie.nom_de_la_patisserie}`}
  //         frameBorder="0"
  //         className="videoEmbed"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //     );
  //   }

  //   const isVideoUrl =
  //     typeof url === "string" &&
  //     (url.includes("cloudinary.com") || /\.(mp4|webm|ogg|mov)$/i.test(url));

  //   if (isVideoUrl) {
  //     return (
  //       <video controls className="videoDirect">
  //         <source src={url} type="video/mp4" />
  //         Votre navigateur ne supporte pas la lecture de vidéos.
  //       </video>
  //     );
  //   }

  //   const imageFileMatch = url.match(/\.(jpg|jpeg|png|gif|svg)$/i);
  //   if (imageFileMatch) {
  //     return (
  //       <img
  //         src={url}
  //         alt={`Extrait ${patisserie.nom_de_la_patisserie}`}
  //         className="imageDirect"
  //       />
  //     );
  //   }

  //   console.warn(
  //     `Type de média non reconnu ou URL invalide pour l'extrait: "${url}"`
  //   );
  //   return null;
  // };

  return (
    <div className="patSemaine">
      {/* {patisserie.image_de_la_patisserie?.url && (
        <div className="imagePatSemaineDiv">
          <img
            src={patisserie.image_de_la_patisserie.url}
            alt={patisserie.nom_de_la_patisserie}
            className="imagePatisserieSemaine"
          />
        </div>
      )}

      <div className="PatSemaineDiv">
        <div className="cadrePat">
          <h2 className="titrePatSemaine">{patisserie.nom_de_la_patisserie}</h2>
          <p className="titrePatSemaine">{patisserie.prix}</p>
        </div>
        <p className="titreFilm">{patisserie.titre_du_film}</p>
        <p className="realFilm">{patisserie.auteur_de_loeuvre}</p>
        <p className="dateFilm">{patisserie.date_de_sortie_de_loeuvre}</p>
      </div>

      <div className="videoExtrait">{renderMedia(mediaSourceUrl)} </div> */}
    </div>
  );
}

export default PatisserieSemaine;
