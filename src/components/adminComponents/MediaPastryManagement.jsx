import React, { useState, useEffect } from "react";

function PastryManagement() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const [media, setMedia] = useState([]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [videoInputMode, setVideoInputMode] = useState("none"); // "none", "upload", "youtube"
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const fetchMedia = () => {
    fetch(`${API_BASE}/media`)
      .then((res) => res.json())
      .then(setMedia)
      .catch(console.error);
  };

  useEffect(() => {
    fetch(`${API_BASE}/media`)
      .then((res) => res.json())
      .then(setMedia)
      .catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPhoto) {
      alert("La photo est obligatoire.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedPhoto);

    if (videoInputMode === "upload" && selectedVideo) {
      const originalVideoName = selectedVideo.name;
      const extension = originalVideoName.split(".").pop();
      const safeVideoName = `video-${Date.now()}.${extension}`;

      // Créer un nouveau fichier avec le nom sécurisé
      const safeVideoFile = new File([selectedVideo], safeVideoName, {
        type: selectedVideo.type,
      });

      formData.append("video", safeVideoFile);
      formData.append("type", "video");
    } else if (videoInputMode === "youtube" && youtubeUrl.trim()) {
      formData.append("youtube_url", youtubeUrl.trim());
      formData.append("type", "youtube");
    } else {
      formData.append("type", "image");
    }

    try {
      const res = await fetch(`${API_BASE}/media`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Erreur serveur");

      const result = await res.json();

      if (result.error) {
        alert("Erreur : " + result.error);
        return;
      }

      const updated = await fetch(`${API_BASE}/media`).then((r) => r.json());
      setMedia(updated);

      setSelectedPhoto(null);
      setSelectedVideo(null);
      setYoutubeUrl("");
      setVideoInputMode("none");
      e.target.reset();
    } catch (err) {
      console.error("Erreur d'upload :", err); // Montre toute l'erreur
      if (err.response) {
        console.error("Réponse serveur :", await err.response.text());
      }
      alert("Erreur d'upload : " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/media/${id}`, {
        method: "DELETE",
      });

      // La suppression a réussi, peu importe le statut 204 ou 200
      if (res.ok) {
        // res.ok est vrai pour un statut 200 à 299
        alert("Le fichier a bien été supprimé.");
        fetchMedia(); // refresh de la liste
        return;
      }

      // Si la requête a échoué (statut 4xx, 5xx), on lit l'erreur si elle existe
      const errData = await res.json().catch(() => null);
      throw new Error(errData?.error || `Erreur ${res.status}`);
    } catch (err) {
      console.error("Erreur de suppression :", err);
      alert("Erreur lors de la suppression : " + err.message);
    }
  };

  const getYouTubeThumbnail = (url) => {
    if (!url) return null;

    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    const videoId = match?.[1];

    if (videoId) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      console.log("🎬 Thumbnail URL:", thumbnailUrl);
      return thumbnailUrl;
    }

    console.warn("❌ URL YouTube invalide :", url);
    return null;
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des visuels associés à la pâtisserie</h2>
      <div className="allCakeDiv2">
        <div className="cakeAddDiv">
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Photo de la pâtisserie de la semaine (obligatoire)</label>
              <br />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedPhoto(e.target.files[0])}
                required
              />
              <br />
              <br />
              <label>Ajouter une vidéo ou un lien YouTube (optionnel)</label>
              <br />
              <label>
                <input
                  type="radio"
                  name="videoInputMode"
                  value="none"
                  checked={videoInputMode === "none"}
                  onChange={() => {
                    setVideoInputMode("none");
                    setSelectedVideo(null);
                    setYoutubeUrl("");
                  }}
                />
                Aucun
              </label>{" "}
              <label>
                <input
                  type="radio"
                  name="videoInputMode"
                  value="upload"
                  checked={videoInputMode === "upload"}
                  onChange={() => {
                    setVideoInputMode("upload");
                    setYoutubeUrl("");
                  }}
                />
                Upload vidéo
              </label>{" "}
              <label>
                <input
                  type="radio"
                  name="videoInputMode"
                  value="youtube"
                  checked={videoInputMode === "youtube"}
                  onChange={() => {
                    setVideoInputMode("youtube");
                    setSelectedVideo(null);
                  }}
                />
                Lien YouTube
              </label>
              <br />
              <br />
              {videoInputMode === "upload" && (
                <>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setSelectedVideo(e.target.files[0])}
                    required
                  />
                  <br />
                  <br />
                </>
              )}
              {videoInputMode === "youtube" && (
                <>
                  <input
                    type="url"
                    placeholder="https://youtube.com/..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                </>
              )}
              <button type="submit">Ajouter</button>
            </fieldset>
          </form>
        </div>

        <div className="cakeTableDiv">
          <h3>Visuels enregistrés</h3>
          <table className="cakeTable">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Vidéo / YouTube</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {media.map((item) => {
                console.log("📦 ITEM :", item);

                return (
                  <tr key={item.id_media} className="tableRank2">
                    <td>
                      <img
                        src={`${API_BASE}/uploads/${item.photo_filename}`}
                        alt="Photo"
                        style={{ width: "100px" }}
                      />
                    </td>

                    <td>
                      {item.type === "youtube" && item.youtube_url ? (
                        <>
                          <img
                            src={getYouTubeThumbnail(item.youtube_url)}
                            alt="Miniature YouTube"
                            onClick={() =>
                              window.open(item.youtube_url, "_blank")
                            }
                          />
                          <div>{getYouTubeThumbnail(item.youtube_url)}</div>
                        </>
                      ) : item.video_filename ? (
                        <video
                          src={`${API_BASE}/uploads/${item.video_filename}`}
                          width="150"
                          controls
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    <td>
                      <button onClick={() => handleDelete(item.id_media)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PastryManagement;
