import React, { useState, useEffect } from "react";

function HomepageManagement() {
  const [activities, setActivities] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState("");

  const [videoFile, setVideoFile] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [videoName, setVideoName] = useState("");

  const [weeklyData, setWeeklyData] = useState({
    name: "",
    price: "",
    filmtitle: "",
    filmreal: "",
    filmdate: "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchActivities = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/activity`);
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Erreur activités:", error);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/media`);
      const data = await res.json();
      console.log("REFRESH:", data);

      setImages([...data]);
    } catch (err) {
      console.error("Erreur galerie:", err);
    }
  };

  const fetchWeekly = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/weekly`);
      const data = await res.json();
      if (data) {
        setWeeklyData({
          name: data.name || "",
          price: data.price || "",
          filmtitle: data.filmtitle || "",
          filmreal: data.filmreal || "",
          filmdate: data.filmdate || "",
        });
      }
    } catch (err) {
      console.error("Erreur weekly:", err);
    }
  };

  useEffect(() => {
    fetchActivities();
    fetchImages();
    fetchWeekly();
  }, []);

  const handleRadioChange = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/activity/${id}`, {
        method: "PATCH",
      });
      if (response.ok) fetchActivities();
    } catch (error) {
      console.error("Erreur PATCH:", error);
    }
  };

  const handleWeeklyUpdate = async (e) => {
    e.preventDefault();
    const dataToPost = {
      weekly_name: weeklyData.name,
      weekly_price: weeklyData.price.toString().replace(",", "."),
      weekly_filmtitle: weeklyData.filmtitle,
      weekly_filmreal: weeklyData.filmreal,
      weekly_filmdate: weeklyData.filmdate,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/weekly`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToPost),
      });
      const result = await res.json();
      if (res.ok) alert("Pâtisserie mise à jour !");
      else alert("Erreur : " + result.error);
    } catch (err) {
      console.error("Erreur Fetch:", err);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("name", imageName);
    formData.append("image", selectedFile);
    try {
      const res = await fetch(`${API_BASE_URL}/media`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setImageName("");
        setSelectedFile(null);
        fetchImages();
      }
    } catch (err) {
      console.error("Erreur upload:", err);
    }
  };

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", videoName);

    if (youtubeUrl) {
      formData.append("youtube_url", youtubeUrl);
    } else {
      alert("Veuillez choisir un lien YouTube");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/media?type=video`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setVideoName("");
        setYoutubeUrl("");
        alert("Vidéo mise à jour !");
        fetchImages();
      }
    } catch (err) {
      console.error("Erreur upload vidéo:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer définitivement cette image ?")) {
      await fetch(`${API_BASE_URL}/media/${id}`, { method: "DELETE" });
      fetchImages();
    }
  };

  const handleSetImageStatus = async (id, type) => {
    const payload = { _method: "PATCH" };
    payload[type] = 1;
    try {
      const res = await fetch(`${API_BASE_URL}/media/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _method: "PATCH", [type]: true }),
      });

      if (!res.ok) console.error(await res.text());
      else fetchImages();
    } catch (err) {
      console.error("Erreur PATCH status:", err);
    }
  };

  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Dashboard</button>
        </a>
        <h1>Gestion des Actualités</h1>

        {/* ACTIVITÉ FEATURED */}
        <section className="weeklySection">
          <h2>Activité mise en avant</h2>
          {activities.map((act) => (
            <div key={act[":id"]} style={{ marginBottom: "10px" }}>
              <label
                style={{
                  marginLeft: "3em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <input
                  type="radio"
                  name="activity_featured"
                  checked={Number(act[":featured"]) === 1}
                  onChange={() => handleRadioChange(act[":id"])}
                />
                <span>
                  <strong>{act[":title"]}</strong>
                </span>
              </label>
            </div>
          ))}
        </section>

        <hr />

        {/* INFOS PÂTISSERIE */}
        <section className="weeklySection">
          <h2>Infos Pâtisserie & Film</h2>
          <form className="weeklyPastryForm" onSubmit={handleWeeklyUpdate}>
            <input
              type="text"
              placeholder="Nom"
              value={weeklyData.name}
              onChange={(e) =>
                setWeeklyData({ ...weeklyData, name: e.target.value })
              }
              required
            />
            <br />
            <input
              type="number"
              step="0.01"
              placeholder="Prix"
              value={weeklyData.price}
              onChange={(e) =>
                setWeeklyData({ ...weeklyData, price: e.target.value })
              }
              required
            />
            <br />
            <input
              type="text"
              placeholder="Film"
              value={weeklyData.filmtitle}
              onChange={(e) =>
                setWeeklyData({ ...weeklyData, filmtitle: e.target.value })
              }
              required
            />
            <br />
            <input
              type="text"
              placeholder="Réalisateur"
              value={weeklyData.filmreal}
              onChange={(e) =>
                setWeeklyData({ ...weeklyData, filmreal: e.target.value })
              }
              required
            />
            <br />
            <input
              type="text"
              placeholder="Année"
              value={weeklyData.filmdate}
              onChange={(e) =>
                setWeeklyData({ ...weeklyData, filmdate: e.target.value })
              }
              required
            />
            <br />
            <button type="submit" className="backButtonDash">
              Enregistrer les textes
            </button>
          </form>
        </section>

        <hr />

        {/* VIDÉO DE LA SEMAINE */}
        <section className="weeklySection">
          <h2>Vidéo de la semaine</h2>
          <p>La mise à jour remplace la vidéo ou le lien YouTube actuel.</p>
          <form
            onSubmit={handleVideoUpload}
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Titre vidéo"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Lien YouTube"
              value={youtubeUrl}
              onChange={(e) => {
                setYoutubeUrl(e.target.value);
              }}
            />
            <button type="submit" className="backButtonDash">
              Mettre à jour la Vidéo
            </button>
          </form>
        </section>

        <hr />

        {/* BANQUE D'IMAGES */}
        <section className="weeklySection">
          <h2>Banque d'images</h2>
          <form
            onSubmit={handleUpload}
            style={{
              marginLeft: "2em",
              marginBottom: "2em",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Nom image"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              required
            />
            <button type="submit">Enregistrer</button>
          </form>

          <div className="homepageImageBankDiv">
            {Array.isArray(images) &&
              images
                .filter((img) => img[":url"])
                .map((img) => (
                  <div key={img[":id"]} className="homepageImageDiv">
                    <img
                      src={`${API_BASE_URL}/uploads/highlight/${img[":url"]}`}
                      alt={img[":name"]}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                    <p>
                      <strong>{img[":name"]}</strong>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <button
                        onClick={() =>
                          handleSetImageStatus(img[":id"], "featured")
                        }
                        style={{
                          backgroundColor:
                            Number(img[":featured"]) === 1
                              ? "#6c1304"
                              : "#f0f0f0",
                          color:
                            Number(img[":featured"]) === 1 ? "white" : "black",
                        }}
                      >
                        {Number(img[":featured"]) === 1
                          ? "★ Actu En Vue"
                          : "Mettre en Actu"}
                      </button>
                      <button
                        onClick={() =>
                          handleSetImageStatus(img[":id"], "iweekly")
                        }
                        style={{
                          backgroundColor:
                            Number(img[":iweekly"]) === 1
                              ? "#6c1304"
                              : "#f0f0f0",
                          color:
                            Number(img[":iweekly"]) === 1 ? "white" : "black",
                        }}
                      >
                        {Number(img[":iweekly"]) === 1
                          ? "✔ Pâtisserie"
                          : "Pâtisserie"}
                      </button>
                      <button onClick={() => handleDelete(img[":id"])}>
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomepageManagement;
