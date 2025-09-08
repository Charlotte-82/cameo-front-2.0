import React, { useEffect, useState } from "react";

function FullCakeManagement() {
  const [fullcakes, setFullcakes] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchFullcakes();
  }, []);

  const fetchFullcakes = () => {
    fetch(`${API_BASE_URL}/fullcakes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setFullcakes)
      .catch((err) => console.error("Erreur lors du fetch des gâteaux :", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/fullcakes`;
    let method = "POST";

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", parseFloat(form.price));

    if (photo) {
      formData.append("photo", photo);
    }

    if (editingId) {
      url = `${API_BASE_URL}/fullcakes/${editingId}`;
    }

    try {
      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      const textResponse = await response.text();

      if (!response.ok) {
        let errorMessage = `Erreur HTTP: ${response.status} ${response.statusText}`;
        try {
          const errorData = JSON.parse(textResponse);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          console.warn(
            "La réponse du serveur n'est pas un JSON valide. Réponse brute :",
            textResponse
          );
          errorMessage = textResponse || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = JSON.parse(textResponse);
      console.log("Opération réussie. Message du serveur :", result.message);

      fetchFullcakes();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
      alert(error.message);
    } finally {
      setForm({ name: "", price: "" });
      setEditingId(null);
      setPhoto(null);
      setPhotoPreview(null);
    }
  };

  const handleEdit = (fullcake) => {
    setForm({
      name: fullcake.name,
      price: fullcake.price,
    });
    setEditingId(fullcake.id);
    if (fullcake.photo_filename) {
      setPhotoPreview(`${API_BASE_URL}/uploads/${fullcake.photo_filename}`);
    } else {
      setPhotoPreview(null);
    }
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/fullcakes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur serveur : ${res.status}`);
        }
        return res.json().catch(() => ({}));
      })
      .then(() => {
        alert("Le gâteau a bien été supprimé.");
        fetchFullcakes();
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression :", err);
        alert("Une erreur est survenue lors de la suppression.");
      });
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Gâteaux entiers</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>
            {editingId
              ? "Modifier un gâteau entier"
              : "Ajouter un gâteau entier"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom du gâteau</label>
              <br />
              <input
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prix du gâteau</label>
              <br />
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Prix"
                value={form.price}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label htmlFor="photo_upload">Photo du gâteau</label>
              <br />
              <input
                type="file"
                name="photo_upload"
                id="photo_upload"
                onChange={handleFileChange}
                required={!editingId}
              />
              <br />
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Aperçu de la photo"
                  style={{ maxWidth: "150px", marginTop: "10px" }}
                />
              )}
              <br />
              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv">
          <h3>Liste des gâteaux entiers</h3>
          <table className="cakeTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fullcakes.map((cake) => (
                <tr key={cake.id} className="tableRank2">
                  <td>{cake.name}</td>
                  <td>{cake.price} €</td>
                  <td>
                    {cake.photo_filename && (
                      <img
                        src={`${API_BASE_URL}/uploads/${cake.photo_filename}`}
                        alt={cake.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </td>
                  <td className="buttonCell">
                    <button onClick={() => handleEdit(cake)}>Modifier</button>
                    <button onClick={() => handleDelete(cake.id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="fullCakeList">
            {fullcakes.map((cake) => (
              <li key={cake.id} className="cakeItem">
                <div className="itemDetails">
                  <span className="label">Nom:</span>
                  <span className="value">{cake.name}</span>
                </div>
                <div className="itemDetails">
                  <span className="label">Prix:</span>
                  <span className="value">{cake.price} €</span>
                </div>
                <div className="itemDetails">
                  <span className="label">Photo:</span>
                  <span className="value">
                    {cake.photo_filename && (
                      <img
                        src={`${API_BASE_URL}/uploads/${cake.photo_filename}`}
                        alt={cake.name}
                        style={{ maxWidth: "100px", objectFit: "cover" }}
                      />
                    )}
                  </span>
                </div>
                <div className="itemActions">
                  <button onClick={() => handleEdit(cake)}>Modifier</button>
                  <button onClick={() => handleDelete(cake.id)}>
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FullCakeManagement;
