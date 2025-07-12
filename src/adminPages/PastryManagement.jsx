import React, { useState, useEffect } from "react";

function PastryManagement() {
  const [wpastry, setWpastry] = useState([]);
  const [media, setMedia] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedExtract, setSelectedExtract] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchWpastry();
    fetchMedia();
  }, []);

  const fetchWpastry = () => {
    fetch(`${API_BASE_URL}/wpastry`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        return res.json();
      })
      .then(setWpastry)
      .catch((err) =>
        console.error("Erreur lors du fetch de la pâtisserie :", err)
      );
  };

  const fetchMedia = () => {
    fetch(`${API_BASE_URL}/media`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (text) {
          try {
            const data = JSON.parse(text);
            setMedia(data);
          } catch (err) {
            console.error("Erreur de parsing JSON :", err);
            setMedia([]);
          }
        } else {
          setMedia([]);
        }
      })
      .catch((err) => console.error("Erreur lors du fetch des médias :", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "photo") setSelectedPhoto(file);
    else if (type === "extract") setSelectedExtract(file);
  };

  // const uploadFile = async (file) => {
  //   const formData = new FormData();
  //   formData.append("media", file);

  //   const response = await fetch(`${API_BASE_URL}/media`, {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (!response.ok) throw new Error("Erreur upload fichier");

  //   return response.json(); // attend l’objet media retourné
  // };

  async function uploadFile(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${API_BASE_URL}/media`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const text = await response.text();

      if (!text) {
        return null;
      }

      try {
        const data = JSON.parse(text);
        return data;
      } catch (e) {
        console.error("Erreur de parsing JSON après upload:", e);
        return null;
      }
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      throw error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/wpastry`;
    let method = "POST";

    const wpastryData = {
      name: form.name,
      price: form.price,
    };

    if (editingId) {
      method = "PUT";
      wpastryData.id_pastry = editingId;
    }

    try {
      // Upload fichiers (s'ils existent)
      if (selectedPhoto) {
        const photoUpload = await uploadFile(selectedPhoto);
        wpastryData.photo_id = photoUpload.id_media;
      }
      if (selectedExtract) {
        const extractUpload = await uploadFile(selectedExtract);
        wpastryData.extract_id = extractUpload.id_media;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wpastryData),
      });

      const textResponse = await response.text();
      let result = {};
      try {
        result = JSON.parse(textResponse);
      } catch (e) {
        if (response.status !== 204) {
          console.warn("Réponse non JSON :", textResponse);
        }
      }

      if (!response.ok) {
        const error =
          result.error ||
          `Erreur HTTP: ${response.status} ${response.statusText}`;
        throw new Error(error);
      }

      console.log("Succès :", result.message || "OK");

      fetchWpastry();
      fetchMedia();
    } catch (error) {
      console.error("Erreur soumission formulaire :", error);
    } finally {
      setForm({ name: "", price: "" });
      setSelectedPhoto(null);
      setSelectedExtract(null);
      setEditingId(null);
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      price: item.price,
    });
    setEditingId(item.id_pastry);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/wpastry/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur suppression");
        return res.text();
      })
      .then(() => {
        console.log("Supprimé avec succès.");
        fetchWpastry();
      })
      .catch((err) => console.error("Erreur suppression :", err));
  };

  return (
    <div className="userManagementCompo">
      <h2>Gestion des Pâtisseries de la semaine</h2>
      <div className="allUserDiv">
        <div className="userAddDiv">
          <h3>
            {editingId
              ? "Modifier la pâtisserie de la semaine"
              : "Ajouter une pâtisserie de la semaine"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm3">
            <fieldset>
              <label>Nom</label>
              <br></br>
              <input
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={handleChange}
                required
              />
              <br></br>
              <br></br>

              <label>Prix</label>
              <br></br>
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Prix"
                value={form.price}
                onChange={handleChange}
                required
              />
              <br></br>
              <br></br>

              <label>Photo</label>
              <br></br>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "photo")}
              />
              <br></br>
              <br></br>

              <label>Extrait</label>
              <br></br>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "extract")}
              />
              <br></br>
              <br></br>

              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>

        <div className="userTableDiv">
          <h3>Pâtisserie de la semaine</h3>
          <table className="userTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wpastry.map((item) => (
                <tr key={item.id_pastry}>
                  <td>{item.name}</td>
                  <td>{parseFloat(item.price).toFixed(2)} €</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Modifier</button>
                    {/* <button onClick={() => handleDelete(item.id_pastry)}>
                      Supprimer
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Médias enregistrés</h3>
          <table className="userTable">
            <thead>
              <tr>
                <th>Nom du fichier</th>
                <th>Prévisualisation</th>
              </tr>
            </thead>
            {/* <tbody>
              {media.map((img) => (
                <tr key={img.id_media}>
                  <td>{img.original_name}</td>
                  <td>
                    <img
                      src={`${API_BASE_URL}/uploads/${img.name}`}
                      alt={img.original_name}
                      style={{ maxHeight: "80px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody> */}
            <tbody>
              {media.map((file) => (
                <tr key={file.id}>
                  <td>
                    {file.type.startsWith("image/") ? (
                      <img
                        src={`${API_BASE_URL}/uploads/${file.name}`}
                        alt={file.original_name}
                        width="100"
                      />
                    ) : file.type.startsWith("video/") ? (
                      <video
                        src={`${API_BASE_URL}/uploads/${file.name}`}
                        width="150"
                        controls
                      />
                    ) : (
                      <span>Fichier non supporté</span>
                    )}
                  </td>
                  <td>
                    {file.type.startsWith("image/") ? (
                      <img
                        src={`${API_BASE_URL}/uploads/${file.name}`}
                        alt={file.original_name}
                        width="100"
                      />
                    ) : file.type.startsWith("video/") ? (
                      <video
                        src={`${API_BASE_URL}/uploads/${file.name}`}
                        width="150"
                        controls
                      />
                    ) : (
                      <span>Fichier non supporté</span>
                    )}
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
