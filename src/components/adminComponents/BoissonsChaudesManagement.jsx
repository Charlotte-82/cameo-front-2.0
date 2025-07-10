import React, { useEffect, useState } from "react";

function BoissonsChaudesManagement() {
  const [boissonschaudes, setBoissonschaudes] = useState([]);
  const [form, setForm] = useState({ nom_boissch: "", prix_boissch: "" });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/boissonschaudes`)
      .then((res) => res.json())
      .then(setBoissonschaudes)
      .catch((err) =>
        console.error("Erreur lors du fetch des boissons chaudes :", err)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nom_boissch", form.name);
    formData.append("prix_boissch", form.price);

    if (editingId) formData.append("id_boissch", editingId);

    fetch(`${API_BASE_URL}/boissonschaudes`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((text) => {
        console.log("Réponse du serveur :", text);
        return fetch(`${API_BASE_URL}/boissonschaudes`).then((r) => r.json());
      })
      .then(setBoissonschaudes)
      .catch((err) => {
        console.error("Erreur lors de l'envoi ou du rechargement :", err);
      })
      .finally(() => {
        setForm({ name: "", price: "" });
        setEditingId(null);
      });
  };

  const handleEdit = (boissonschaudes) => {
    setForm({ name: boissonschaudes.name, price: boissonschaudes.price });
    setEditingId(boissonschaudes.id_boissonschaudes);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/boissonschaudes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then(() =>
        fetch(`${API_BASE_URL}/boissonschaudes`)
          .then((res) => res.json())
          .then(setCakes)
      )
      .catch((err) =>
        console.error(
          "Erreur lors de la suppression de la boisson chaude :",
          err
        )
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Boissons Chaudes</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>Ajouter une boisson chaude</h3>
          <form
            onSubmit={handleSubmit}
            className="adminForm2"
            encType="multipart/form-data"
          >
            <fieldset>
              <label>Nom de la boisson chaude</label>
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
              <label>Prix de la boisson chaude</label>
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

              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv">
          <h3>Liste des boissons chaudes</h3>

          <table className="cakeTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {boissonschaudes.map((boissonschaudes) => (
                <tr
                  key={boissonschaudes.id_boissonschaudes}
                  className="tableRank2"
                >
                  <td>{boissonschaudes.id_boissonschaudes}</td>
                  <td>{boissonschaudes.name}</td>
                  <td>{boissonschaudes.price} €</td>
                  <td>
                    <button onClick={() => handleEdit(boissonschaudes)}>
                      Modifier
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(boissonschaudes.id_boissonschaudes)
                      }
                    >
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

export default BoissonsChaudesManagement;
