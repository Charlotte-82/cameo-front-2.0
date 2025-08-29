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
    <div className="patSemaine">
      <div className="imagePatSemaineDiv">
        <img
          src={`${API_BASE}/uploads/${media.photo_filename}`}
          alt={wpastry.name}
          className="imagePatisserieSemaine"
        />
      </div>
      <div className="cadrePat">
        <h2 className="titrePatSemaine">{wpastry.name}</h2>
        <p className="titrePatSemaine">{wpastry.price} €</p>
      </div>
      <div className="globalFilmDiv">
        <div className="infosFilm">
          <p className="titreFilm">{wpastry.film_title} </p>
          <span className="realFilm"> {wpastry.film_director} </span>
          <span className="dateFilm"> ({wpastry.film_release_date})</span>
        </div>
        {media.video_filename && (
          <div className="videoExtrait">
            <video controls>
              <source
                src={`${API_BASE}/uploads/${media.video_filename}`}
                type="video/mp4"
              />
            </video>
          </div>
        )}

        {!media.video_filename && media.youtube_url && (
          <div className="videoExtrait">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${getYoutubeId(
                media.youtube_url
              )}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatisserieSemaine;
