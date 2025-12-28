import React, { useEffect, useState } from "react";

function PatisserieSemaine() {
  const [wpastry, setWpastry] = useState(null);
  const [weeklyImage, setWeeklyImage] = useState(null);
  const [weeklyVideo, setWeeklyVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resWeekly = await fetch(`${API_BASE}/weekly`);
        const dataWeekly = await resWeekly.json();
        setWpastry(dataWeekly);

        const resImg = await fetch(`${API_BASE}/media?weekly`);
        if (resImg.ok) {
          const dataImg = await resImg.json();
          setWeeklyImage(dataImg);
        }

        const resVideo = await fetch(`${API_BASE}/media?video=weekly`);
        if (resVideo.ok) {
          const dataVideo = await resVideo.json();
          setWeeklyVideo(dataVideo);
        }
      } catch (error) {
        console.error("Erreur de chargement :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE]);

  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  if (loading) return <p>Chargement...</p>;
  if (!wpastry) return <p>Aucune pâtisserie cette semaine.</p>;

  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "large" }}>inspirée de</p>
      <div className="infosFilm">
        <p style={{ fontStyle: "italic", fontSize: "x-large" }}>
          {wpastry.filmtitle}
        </p>
        <p>
          {wpastry.filmreal} ({wpastry.filmdate})
        </p>
      </div>

      <div className="patSemaineFlex">
        {/* CERCLE IMAGE */}
        <div className="cercle imageCercle">
          {weeklyImage ? (
            <img
              src={`${API_BASE}/uploads/highlight/${weeklyImage[":url"]}`}
              alt={wpastry.name}
            />
          ) : (
            <img src="/assets/img/default_activity.jpg" alt="Défaut" />
          )}
        </div>

        {/* CERCLE VIDÉO */}
        <div className="cercle videoCercle">
          {weeklyVideo && !weeklyVideo[":video"] && weeklyVideo[":youtube"] && (
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(
                weeklyVideo[":youtube"]
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {!weeklyVideo && <p>Vidéo bientôt disponible</p>}
        </div>

        {/* CERCLE INFOS */}
        <div className="cercle infosCercle">
          <h2 className="pastryName">{wpastry.name}</h2>
          <p className="pastryPrice">{wpastry.price} €</p>
        </div>
      </div>
    </div>
  );
}

export default PatisserieSemaine;
