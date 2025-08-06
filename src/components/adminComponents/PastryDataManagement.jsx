import React, { useState, useEffect } from "react";

function PastryManagement() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const [form, setForm] = useState({ name: "", price: "" });
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

      setForm({ name: "", price: "" });
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
    setForm({ name: wpastry.name, price: wpastry.price });
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wpastry.map((item) => (
                <tr key={item.id_pastry} className="tableRank2">
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
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
