import React, { useEffect, useState } from "react";

function CakeManagement() {
  const [cakes, setCakes] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchCakes();
  }, []);

  const fetchCakes = () => {
    fetch(`${API_BASE_URL}/cakes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setCakes)
      .catch((err) => console.error("Erreur lors du fetch des gâteaux :", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/cakes`;
    let method = "POST";

    const cakeData = {
      name: form.name,
      price: parseFloat(form.price),
    };

    if (editingId) {
      method = "PUT";
      cakeData.id_cake = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cakeData),
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

      console.log(
        "Opération réussie. Message du serveur :",
        result.message || "Aucun message spécifique."
      );

      fetchCakes();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (cake) => {
    setForm({ name: cake.name, price: cake.price });
    setEditingId(cake.id_cake);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/cakes/${id}`, {
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
        else console.log("Gâteau supprimé avec succès.");
        fetchCakes();
      })
      .catch((err) =>
        console.error("Erreur lors de la suppression du gâteau :", err)
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Gâteaux</h2>

      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>{editingId ? "Modifier un gâteau" : "Ajouter un gâteau"}</h3>
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
                {/* <th>ID</th> */}
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cakes.map((cake) => (
                <tr key={cake.id_cake} className="tableRank2">
                  {/* <td>{cake.id_cake}</td> */}
                  <td>{cake.name}</td>
                  <td>{cake.price} €</td>
                  <td className="buttonCell">
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
