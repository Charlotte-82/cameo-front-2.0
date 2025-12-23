import React, { useEffect, useState } from "react";

function ActivityDataManagement() {
  const [activity, setActivities] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "workshop",
    start: "",
    end: "",
    places: "",
    price: "",
    description: "",
    contributor: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    fetch(`${API_BASE_URL}/activity`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        return res.json();
      })
      .then(setActivities)
      .catch((err) => console.error("Erreur fetch:", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId
      ? `${API_BASE_URL}/activity/${editingId}`
      : `${API_BASE_URL}/activity`;

    const method = editingId ? "PUT" : "POST";

    const activityData = {
      title: form.title,
      type: form.type,
      start: form.start.replace("T", " "),
      end: form.end.includes("T") ? form.end.replace("T", " ") : form.end,
      places: form.places === "" ? null : parseInt(form.places),
      price: parseFloat(form.price),
      description: form.description,
      contributor: form.contributor,
    };

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activityData),
      });

      const text = await response.text();
      let result = {};
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error("Le serveur n'a pas renvoyé de JSON:", text);
      }

      if (!response.ok) {
        throw new Error(result.error || `Erreur ${response.status}`);
      }

      alert(editingId ? "Activité mise à jour !" : "Activité créée !");
      fetchActivities();
      resetForm();
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };
  const resetForm = () => {
    setForm({
      title: "",
      type: "workshop",
      start: "",
      end: "",
      places: "",
      price: "",
      description: "",
      contributor: "",
    });
    setEditingId(null);
  };

  const handleEdit = (act) => {
    const id = act[":id"] || act.id_activity;

    if (!id) {
      console.error("Erreur : ID introuvable dans l'objet", act);
      return;
    }

    setEditingId(id);

    setForm({
      title: act[":title"] || act.title || "",
      type: act[":type"] || act.type || "workshop",
      start: act[":start"]?.date
        ? act[":start"].date.substring(0, 16).replace(" ", "T")
        : act.start
        ? act.start.substring(0, 16).replace(" ", "T")
        : "",
      end: act[":end"]?.date
        ? act[":end"].date.substring(0, 16).replace(" ", "T")
        : act.end || "",
      places: act[":places"] !== undefined ? act[":places"] : act.places,
      price: act[":price"] !== undefined ? act[":price"] : act.price,
      description: act[":description"] || act.description || "",
      contributor: act[":contributor"] || act.contributor || "",
    });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Supprimer cette activité ?")) return;
    fetch(`${API_BASE_URL}/activity/${id}`, { method: "DELETE" })
      .then(() => fetchActivities())
      .catch((err) => console.error("Erreur suppression:", err));
  };

  return (
    <div>
      <div>
        <div>
          <h3>{editingId ? "Modifier l'activité" : "Ajouter une activité"}</h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Titre</label>
              <br />
              <input
                style={{ width: "100%" }}
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Type</label> <br />
              <select name="type" value={form.type} onChange={handleChange}>
                <option value="workshop">Atelier</option>
                <option value="event">Événement</option>
              </select>
              <br />
              <br />
              <label>Intervenant</label> <br />
              <input
                style={{ width: "100%" }}
                name="contributor"
                value={form.contributor}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prix (0 pour gratuit)</label> <br />
              <input
                name="price"
                type="number"
                step="0.01"
                value={form.price}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Début</label> <br />
              <input
                name="start"
                type="datetime-local"
                value={form.start}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Fin (ou date de fin)</label>
              <br />
              <input
                name="end"
                type="datetime-local"
                value={form.end}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Places (vide si illimité)</label> <br />
              <input
                name="places"
                type="number"
                value={form.places}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Description</label> <br />
              <textarea
                style={{ width: "100%" }}
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <button type="submit">
                {editingId ? "Mettre à jour" : "Créer"}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm}>
                  Annuler
                </button>
              )}
            </fieldset>
          </form>
        </div>

        <div style={{ width: "100%" }}>
          <h3>Liste des activités</h3>
          <ul className="schedule-list2">
            {activity.map((act) => (
              <li key={act[":id"]} className="schedule-item">
                <div className="item-info">
                  <p>
                    Type:{" "}
                    <strong>
                      {act[":type"] === "workshop" ? "Atelier" : "Événement"}
                    </strong>
                  </p>
                  <h3>{act[":title"]}</h3>
                  <p>
                    Intervenant: <strong>{act[":contributor"]}</strong>
                  </p>
                  <p className="activity-date">
                    Début: {new Date(act[":start"]?.date).toLocaleString()}
                  </p>
                  <p className="activity-date">
                    Fin:{" "}
                    {act[":end"]?.date
                      ? new Date(act[":end"]?.date).toLocaleString()
                      : act[":end"]}
                  </p>

                  <p className="price">
                    {parseInt(act[":price"]) === 0
                      ? "Gratuit"
                      : `${act[":price"]} €`}
                  </p>

                  <p className="description">{act[":description"]}</p>

                  {act[":places"] !== null && (
                    <p className="places">Places : {act[":places"]}</p>
                  )}

                  <div className="admin-actions" style={{ marginTop: "10px" }}>
                    <button onClick={() => handleEdit(act)}>Modifier</button>
                    <button
                      onClick={() => handleDelete(act[":id"])}
                      style={{ marginLeft: "10px" }}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityDataManagement;
