import React, { useState, useEffect } from "react";

function PastryManagement() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const [form, setForm] = useState({
    name: "",
    price: "",
    film_title: "",
    film_director: "",
    film_release_date: "",
  });
  const [wpastry, setWpastry] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/wpastry`)
      .then((res) => res.json())
      .then(setWpastry)
      .catch(console.error);
  }, []);

  const fetchData = () => {
    fetch(`${API_BASE}/wpastry`)
      .then((res) => res.json())
      .then(setWpastry)
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: form.name,
        price: form.price,
        film_title: form.film_title,
        film_director: form.film_director,
        film_release_date: form.film_release_date,
      };

      let url = `${API_BASE}/wpastry`;
      let method = "POST";

      if (isEditing) {
        url = `${API_BASE}/wpastry/${editId}`;
        method = "PUT";
        payload.id_pastry = editId;
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log(isEditing ? "Modifié :" : "Créé :", result);

      setForm({
        name: "",
        price: "",
        film_title: "",
        film_director: "",
        film_release_date: "",
      });
      setIsEditing(false);
      setEditId(null);

      const refreshed = await fetch(`${API_BASE}/wpastry`);
      const data = await refreshed.json();
      setWpastry(data);
    } catch (err) {
      console.error("Erreur :", err);
    }
  };

  const handleEdit = (wpastry) => {
    setForm({
      name: wpastry.name,
      price: wpastry.price,
      film_title: wpastry.film_title,
      film_director: wpastry.film_director,
      film_release_date: wpastry.film_release_date,
    });
    setEditId(wpastry.id_pastry);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/wpastry/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log("Supprimé :", result);
      alert(`Vous avez supprimé le gâteau.`);
      fetchData();
    } catch (err) {
      console.error("Erreur de suppression :", err);
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="cakeManagementCompo">
      <h2>
        {" "}
        {editId
          ? "Modifier la pâtisserie de la semaine"
          : "Créer la pâtisserie de la semaine"}
      </h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom de la pâtisserie de la semaine</label>
              <br />
              <input
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <br />
              <br />
              <label>Prix de la pâtisserie de la semaine</label>
              <br />
              <input
                name="price"
                placeholder="Prix"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
              <br />
              <br />
              <label>Titre de l'oeuvre associée</label>
              <br />
              <input
                name="film_title"
                placeholder="Titre de l'oeuvre associée"
                value={form.film_title}
                onChange={(e) =>
                  setForm({ ...form, film_title: e.target.value })
                }
                required
              />
              <br />
              <br />
              <label>Réalisateur·rice / Auteur·rice de l'oeuvre</label>
              <br />
              <input
                name="film_director"
                placeholder="Réalisateur·rice / Auteur·rice"
                value={form.film_director}
                onChange={(e) =>
                  setForm({ ...form, film_director: e.target.value })
                }
                required
              />
              <br />
              <br />
              <label>Date de sortie</label>
              <br />
              <input
                name="film_release_date"
                placeholder="Date de sortie"
                value={form.film_release_date}
                onChange={(e) =>
                  setForm({ ...form, film_release_date: e.target.value })
                }
                required
              />
              <br />
              <br />
              <button type="submit">{editId ? "Modifier" : "Créer"}</button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv">
          <h3>La Pâtisserie de la Semaine</h3>
          <table className="cakeTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Titre</th>
                <th>Réal/Aut</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wpastry.map((item) => (
                <tr key={item.id_pastry} className="tableRank2">
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
                  <td>{item.film_title}</td>
                  <td>{item.film_director}</td>
                  <td>{item.film_release_date}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Modifier</button>
                    <button onClick={() => handleDelete(item.id_pastry)}>
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

export default PastryManagement;
