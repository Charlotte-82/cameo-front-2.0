import React, { useEffect, useState } from "react";

function WorkshopDataManagement() {
  const [workshop, setWorkshops] = useState([]);
  const [form, setForm] = useState({
    title: "",
    contributor: "",
    date: "",
    duration: "",
    places: "",
    description: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = () => {
    fetch(`${API_BASE_URL}/workshops`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setWorkshops)
      .catch((err) =>
        console.error("Erreur lors du fetch des ateliers :", err)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/workshops`;
    let method = "POST";

    const workshopData = {
      title: form.title,
      contributor: form.contributor,
      date: form.date,
      duration: form.duration,
      places: form.places,
      description: form.description,
      price: form.price,
    };

    if (editingId) {
      method = "PUT";
      workshopData.id_workshop = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workshopData),
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

      fetchWorkshops();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({
        title: "",
        contributor: "",
        date: "",
        duration: "",
        places: "",
        description: "",
        price: "",
      });
      setEditingId(null);
    }
  };

  const handleEdit = (workshop) => {
    setForm({
      title: workshop.title,
      contributor: workshop.contributor,
      date: workshop.date,
      duration: workshop.duration,
      places: workshop.places,
      description: workshop.description,
      price: workshop.price,
    });
    setEditingId(workshop.id_workshop);
  };

  const handleDelete = (id) => {
    // console.log("Suppression atelier ID:", id);

    fetch(`${API_BASE_URL}/workshops/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => {
        if (res.status === 204) {
          console.log("Atelier supprimé avec succès.");
          return;
        }

        const text = await res.text();

        try {
          const data = JSON.parse(text);
          if (!res.ok) {
            throw new Error(
              data.error || `Erreur lors de la suppression: ${res.status}`
            );
          }
          return data;
        } catch (e) {
          if (!res.ok) {
            throw new Error(
              text || `Erreur lors de la suppression: ${res.status}`
            );
          }
        }
      })
      .then(() => {
        fetchWorkshops();
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression de l'atelier :", err);
      });
  };

  function calculateEnd(start, duration) {
    const startDate = new Date(start);
    startDate.setMinutes(startDate.getMinutes() + parseInt(duration, 10));
    return startDate.toLocaleString();
  }

  return (
    <div className="userManagementCompo">
      <h2>Gestion des Ateliers</h2>
      <div className="allUserDiv">
        <div className="userAddDiv">
          <h3>{editingId ? "Modifier un atelier" : "Ajouter un atelier"}</h3>
          <form onSubmit={handleSubmit} className="adminForm3">
            <fieldset>
              <label>Titre de l'atelier</label>
              <br />
              <input
                name="title"
                placeholder="Titre de l'atelier"
                value={form.title}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Contributeur</label>
              <br />
              <input
                name="contributor"
                placeholder="Contributeur"
                value={form.contributor}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prix de l'atelier</label>
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
              <label>Date et heure</label>
              <br />
              <input
                name="date"
                type="datetime-local"
                value={form.date}
                min={new Date().toISOString().slice(0, 16)}
                onChange={handleChange}
                required
              />
              <br />
              <br />

              <label>Durée (en minutes)</label>
              <br />
              <input
                name="duration"
                type="number"
                min="1"
                value={form.duration}
                onChange={handleChange}
                required
              />

              <br />
              <br />
              <label>Places disponibles</label>
              <br />
              <input
                name="places"
                placeholder="Places disponibles"
                value={form.places}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Description de l'atelier</label>
              <br />
              <input
                name="description"
                type="text"
                value={form.description}
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
        <div className="userTableDiv">
          <h3>Liste des ateliers</h3>

          <table className="userTable">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Titre</th>
                <th>Contributeur</th>
                <th>Date</th>
                <th>Fin</th>
                <th>Prix</th>
                <th>Places disponibles</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workshop.map((workshop) => (
                <tr key={workshop.id_workshop} className="tableRank3">
                  {/* <td>{workshop.id_workshop}</td> */}
                  <td>{workshop.title}</td>
                  <td>{workshop.contributor}</td>
                  <td>{workshop.date}</td>
                  <td>{calculateEnd(workshop.date, workshop.duration)}</td>
                  <td>{workshop.price} €</td>
                  <td>{workshop.places}</td>
                  <td>{workshop.description}</td>
                  <td>
                    <button onClick={() => handleEdit(workshop)}>
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(workshop.id_workshop)}>
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

export default WorkshopDataManagement;
