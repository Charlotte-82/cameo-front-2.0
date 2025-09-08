import React, { useEffect, useState } from "react";

function TeaManagement() {
  const [thes, setThes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    categorie: "",
    ingredients: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchThes();
  }, []);

  const fetchThes = () => {
    fetch(`${API_BASE_URL}/thes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setThes)
      .catch((err) =>
        console.error("Erreur lors du fetch des thés et infusions :", err)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/thes`;
    let method = "POST";

    const thesData = {
      name: form.name,
      price: parseFloat(form.price),
      categorie: form.categorie,
      ingredients: form.ingredients,
    };

    if (editingId) {
      method = "PUT";
      thesData.id = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thesData),
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

      fetchThes();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "", categorie: "", ingredients: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (thes) => {
    setForm({
      name: thes.name,
      price: thes.price,
      categorie: thes.categorie,
      ingredients: thes.ingredients,
    });
    setEditingId(thes.id);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/thes/${id}`, {
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
        else console.log("Thé ou infusion supprimé·e avec succès.");
        fetchThes();
      })
      .catch((err) =>
        console.error(
          "Erreur lors de la suppression du thé ou de l'infusion :",
          err
        )
      );
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Thés et Infusions</h2>
      <div className="allCakeDiv4">
        <div className="cakeAddDiv">
          <h3>
            {editingId
              ? "Modifier un thé ou une infusion"
              : "Ajouter un thé ou une infusion"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom</label>
              <br />
              <input
                name="name"
                placeholder="Nom"
                value={form.nom}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prix</label>
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
              <label>Catégorie</label>
              <br />
              <input
                name="categorie"
                placeholder="Catégorie"
                value={form.categorie}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Ingrédients</label>
              <br />
              <textarea
                name="ingredients"
                placeholder="Ingrédients"
                value={form.ingredients}
                onChange={handleChange}
                required
              ></textarea>
              <br />

              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv2">
          <h3>Liste des thés et infusions</h3>

          <table className="cakeTable">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Nom</th>
                <th>Prix</th>
                <th>Catégorie</th>
                <th>Ingrédients</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {thes.map((thes) => (
                <tr key={thes.id} className="tableRank2">
                  {/* <td>{thes.id}</td> */}
                  <td>{thes.name}</td>
                  <td>{thes.price} €</td>
                  <td>{thes.categorie}</td>
                  <td>{thes.ingredients}</td>
                  <td>
                    <button onClick={() => handleEdit(thes)}>Modifier</button>
                    <button onClick={() => handleDelete(thes.id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="glaceList">
            {thes.map((thes, index) => (
              <li key={thes.id || index} className="glaceItem">
                <div className="itemDetails">
                  <span className="label">Nom:</span>
                  <span className="value">{thes.name}</span>
                </div>
                <div className="itemDetails">
                  <span className="label">Prix:</span>
                  <span className="value">{thes.price} €</span>
                </div>
                <div className="itemDetails">
                  <span className="label">Catégorie:</span>
                  <span className="value">{thes.categorie}</span>
                </div>
                <div className="itemDetails">
                  <span className="label">Ingrédients:</span>
                  <span className="value">{thes.ingredients}</span>
                </div>
                <div className="itemActions">
                  <button onClick={() => handleEdit(thes)}>Modifier</button>
                  <button onClick={() => handleDelete(thes.id)}>
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

export default TeaManagement;
