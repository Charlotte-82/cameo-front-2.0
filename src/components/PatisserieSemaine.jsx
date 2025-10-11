import React from "react";
import { useEffect, useState } from "react";

function PatisserieSemaine() {
  const [wpastry, setWpastry] = useState(null);
  const [media, setMedia] = useState(null);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE}/wpastry/latest`)
      .then((res) => res.json())
      .then((data) => {
        setWpastry(data[0]);
      })
      .catch(console.error);

    fetch(`${API_BASE}/media/latest`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Media latest:", data);
        if (data.video_filename) {
          data.videoOrYoutube = `${API_BASE}/uploads/${data.video_filename}`;
        } else if (data.youtube_url) {
          const videoIdMatch = data.youtube_url.match(
            /(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/
          );
          if (videoIdMatch) {
            data.videoOrYoutube = `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`;
          }
        }

        setMedia(data);
      })
      .catch(console.error);
  }, []);

  if (!wpastry || !media) {
    return <p>Chargement...</p>;
  }

  const getYoutubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "large" }}>inspirée de</p>
      <div className="infosFilm">
        <p style={{ fontStyle: "italic", fontSize: "x-large" }}>
          {wpastry.film_title}
        </p>
        <p>
          {wpastry.film_director} ({wpastry.film_release_date})
        </p>
      </div>
      <div className="patSemaineFlex">
        <div className="cercle imageCercle">
          <img
            src={`${API_BASE}/uploads/${media.photo_filename}`}
            alt={wpastry.name}
          />
        </div>

        <div className="cercle videoCercle">
          {media.video_filename && (
            <video controls>
              <source
                src={`${API_BASE}/uploads/${media.video_filename}`}
                type="video/mp4"
              />
            </video>
          )}
          {!media.video_filename && media.youtube_url && (
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(
                media.youtube_url
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="cercle infosCercle">
          <h2 className="pastryName">{wpastry.name}</h2>
          <p className="pastryPrice">{wpastry.price} €</p>
        </div>
      </div>
    </div>
  );
}

export default PatisserieSemaine;
