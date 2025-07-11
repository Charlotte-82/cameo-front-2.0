import React, { useEffect, useState } from "react";

function BoissonsFroidesManagement() {
  const [boissonsfroides, setBoissonsfroides] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchBoissonsfroides();
  }, []);

  const fetchBoissonsfroides = () => {
    fetch(`${API_BASE_URL}/boissonsfroides`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setBoissonsfroides)
      .catch((err) =>
        console.error("Erreur lors du fetch des boissons froides :", err)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/boissonsfroides`;
    let method = "POST";

    const boissonsfroidesData = {
      name: form.name,
      price: parseFloat(form.price),
    };

    if (editingId) {
      method = "PUT";
      boissonsfroidesData.id_boissonsfroides = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boissonsfroidesData),
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

      fetchBoissonsfroides();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (boissonsfroides) => {
    setForm({ name: boissonsfroides.name, price: boissonsfroides.price });
    setEditingId(boissonsfroides.id_boissonsfroides);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/boissonsfroides/${id}`, {
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
        else console.log("Boisson froide supprimée avec succès.");
        fetchBoissonsfroides();
      })
      .catch((err) =>
        console.error(
          "Erreur lors de la suppression de la boisson froide :",
          err
        )
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Boissons Froides</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>
            {editingId
              ? "Modifier une boisson froide"
              : "Ajouter une boisson froide"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom de la boisson froide</label>
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
              <label>Prix de la boisson froide</label>
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
          <h3>Liste des boissons froides</h3>

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
              {boissonsfroides.map((boissonsfroides) => (
                <tr
                  key={boissonsfroides.id_boissonsfroides}
                  className="tableRank2"
                >
                  <td>{boissonsfroides.id_boissonsfroides}</td>
                  <td>{boissonsfroides.name}</td>
                  <td>{boissonsfroides.price} €</td>
                  <td>
                    <button onClick={() => handleEdit(boissonsfroides)}>
                      Modifier
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(boissonsfroides.id_boissonsfroides)
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

export default BoissonsFroidesManagement;
