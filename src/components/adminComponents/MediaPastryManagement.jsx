import React, { useState, useEffect } from "react";

function PastryManagement() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const [media, setMedia] = useState([]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [videoInputMode, setVideoInputMode] = useState("none"); // "none", "upload", "youtube"
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");

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
      formData.append("video", selectedVideo);
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

      // Reset
      setSelectedPhoto(null);
      setSelectedVideo(null);
      setYoutubeUrl("");
      setVideoInputMode("none");
      e.target.reset();
    } catch (err) {
      console.error("Erreur d'upload :", err);
      alert("Erreur d'upload : " + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce média ?")) return;

    try {
      const res = await fetch(`${API_BASE}/media/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erreur serveur");

      setMedia((prev) => prev.filter((item) => item.id_media !== id));
    } catch (err) {
      console.error("Erreur de suppression :", err);
      alert("Erreur de suppression : " + err.message);
    }
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des visuels associés à la pâtisserie</h2>
      <div className="allCakeDiv">
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
              {media.map((item) => (
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
                      <a
                        href={item.youtube_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Voir YouTube
                      </a>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PastryManagement;
