import React, { useEffect, useState } from "react";

function BoissonsChaudesManagement() {
  const [boissonschaudes, setBoissonschaudes] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchBoissonschaudes();
  }, []);

  const fetchBoissonschaudes = () => {
    fetch(`${API_BASE_URL}/boissonschaudes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setBoissonschaudes)
      .catch((err) =>
        console.error("Erreur lors du fetch des boissons chaudes :", err)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/boissonschaudes`;
    let method = "POST";

    const boissonschaudesData = {
      name: form.name,
      price: parseFloat(form.price),
    };

    if (editingId) {
      method = "PUT";
      boissonschaudesData.id_boissonschaudes = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boissonschaudesData),
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

      fetchBoissonschaudes();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (boissonschaudes) => {
    setForm({ name: boissonschaudes.name, price: boissonschaudes.price });
    setEditingId(boissonschaudes.id_boissonschaudes);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/boissonschaudes/${id}`, {
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
        else console.log("Boisson chaude supprimée avec succès.");
        fetchBoissonschaudes();
      })
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
          <h3>
            {editingId
              ? "Modifier une boisson chaude"
              : "Ajouter une boisson chaude"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm2">
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
