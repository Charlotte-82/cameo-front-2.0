import React, { useEffect, useState } from "react";

function GlacesManagement() {
  const [glaces, setGlaces] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchGlaces();
  }, []);

  const fetchGlaces = () => {
    fetch(`${API_BASE_URL}/glaces`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setGlaces)
      .catch((err) => console.error("Erreur lors du fetch des glaces :", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/glaces`;
    let method = "POST";

    const glacesData = {
      name: form.name,
      price: parseFloat(form.price),
    };

    if (editingId) {
      method = "PUT";
      glacesData.id_glaces = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(glacesData),
      });

      const textResponse = await response.text();
      let result = {};
      try {
        result = JSON.parse(textResponse);
      } catch (jsonParseError) {
        if (response.status !== 204) {
          console.warn("Réponse non JSON reçue du serveur:", textResponse);
        }
      }

      if (!response.ok) {
        const errorMessage =
          result.error ||
          `Erreur HTTP: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      // console.log(
      //   "Opération réussie. Message du serveur :",
      //   result.message || "Aucun message spécifique."
      // );

      fetchGlaces();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (glaces) => {
    setForm({ name: glaces.name, price: glaces.price });
    setEditingId(glaces.id_glaces);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/glaces/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 204) return null;

          return res
            .json()
            .then((errorData) => {
              throw new Error(
                errorData.error ||
                  `Erreur lors de la suppression: ${res.status}`
              );
            })
            .catch(() => {
              return res.text().then((text) => {
                throw new Error(
                  text || `Erreur lors de la suppression: ${res.status}`
                );
              });
            });
        }
        return res.text();
      })
      .then((text) => {
        if (text) console.log("Suppression réussie, réponse:", text);
        else console.log("Glace supprimée avec succès.");
        fetchGlaces();
      })
      .catch((err) =>
        console.error("Erreur lors de la suppression de la glace :", err)
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Glaces</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>{editingId ? "Modifier une glace" : "Ajouter une glace"}</h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom de la glace</label>
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
              <label>Prix de la glace</label>
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
          <h3>Liste des glaces</h3>

          <table className="cakeTable">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {glaces.map((glaces) => (
                <tr key={glaces.id_glaces} className="tableRank2">
                  {/* <td>{glaces.id_glaces}</td> */}
                  <td>{glaces.name}</td>
                  <td>{glaces.price} €</td>
                  <td>
                    <button onClick={() => handleEdit(glaces)}>Modifier</button>
                    <button onClick={() => handleDelete(glaces.id_glaces)}>
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

export default GlacesManagement;
