import React, { useEffect, useState } from "react";

function CakeManagement() {
  const [cakes, setCakes] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", photo: null });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const UPLOADS_BASE_URL = `${API_BASE_URL}/uploads/`;

  useEffect(() => {
    fetch(`${API_BASE_URL}/cakes`)
      .then((res) => res.json())
      .then(setCakes)
      .catch((err) => console.error("Erreur lors du fetch des gâteaux :", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    if (form.photo) formData.append("photo", form.photo);
    if (editingId) formData.append("id_cake", editingId);

    fetch(`${API_BASE_URL}/cakes`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((text) => {
        console.log("Réponse du serveur :", text);
        return fetch(`${API_BASE_URL}/cakes`).then((r) => r.json());
      })
      .then(setCakes)
      .catch((err) => {
        console.error("Erreur lors de l'envoi ou du rechargement :", err);
      })
      .finally(() => {
        setForm({ name: "", price: "", photo: "" });
        setEditingId(null);
      });
  };

  const handleEdit = (cake) => {
    setForm({ name: cake.name, price: cake.price, photo: cake.photo });
    setEditingId(cake.id_cake);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/cakes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then(() =>
        fetch(`${API_BASE_URL}/cakes`)
          .then((res) => res.json())
          .then(setCakes)
      )
      .catch((err) =>
        console.error("Erreur lors de la suppression du gâteau :", err)
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Gâteaux</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>Ajouter un gâteau</h3>
          <form
            onSubmit={handleSubmit}
            className="adminForm2"
            encType="multipart/form-data"
          >
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
              <label>Photo du gâteau</label>
              <br />
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                required={!editingId}
              />
              <br />
              <br />
              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv">
          <h3>Liste des gâteaux</h3>

          <table className="cakeTable">
            <thead>
              <tr>
                <th>Photo</th>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cakes.map((cake) => (
                <tr key={cake.id_cake} className="tableRank2">
                  <td className="cakePhotoCell">
                    <div className="cakePhotoDiv">
                      {" "}
                      {cake.photo && (
                        <img
                          className="cakePhoto"
                          src={`${UPLOADS_BASE_URL}${cake.photo}`}
                          alt={cake.name}
                        />
                      )}
                    </div>
                  </td>
                  <td>{cake.id_cake}</td>
                  <td>{cake.name}</td>
                  <td>{cake.price} €</td>
                  <td>
                    <button onClick={() => handleEdit(cake)}>Modifier</button>
                    <button onClick={() => handleDelete(cake.id_cake)}>
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

export default CakeManagement;
