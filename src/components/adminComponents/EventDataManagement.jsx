import React, { useEffect, useState } from "react";

function EventDataManagement() {
  const [event, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    contributor: "",
    description: "",
    start_date: "",
    end_date: "",
    places: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch(`${API_BASE_URL}/events`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setEvents)
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

    let url = `${API_BASE_URL}/events`;
    let method = "POST";

    const eventData = {
      title: form.title,
      contributor: form.contributor,
      description: form.description,
      start_date: form.start_date,
      end_date: form.end_date,
      places: form.places,
    };

    if (editingId) {
      method = "PUT";
      eventData.id_event = editingId;
      console.log("Données envoyées :", eventData);
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
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

      fetchEvents();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({
        title: "",
        contributor: "",
        description: "",
        start_date: "",
        end_date: "",
        places: "",
      });
      setEditingId(null);
    }
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      contributor: event.contributor,
      description: event.description,
      start_date: event.start_date,
      end_date: event.end_date,
      places: event.places,
    });
    setEditingId(event.id_event);
  };

  const handleDelete = (id) => {
    console.log("Suppression événement ID:", id);

    fetch(`${API_BASE_URL}/events/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => {
        if (res.status === 204) {
          console.log("Événement supprimé avec succès.");
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
        fetchEvents();
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression de l'événement :", err);
      });
  };

  return (
    <div className="userManagementCompo">
      <h2>Gestion des Événements</h2>
      <div className="allUserDiv">
        <div className="userAddDiv">
          <h3>
            {editingId ? "Modifier un événement" : "Ajouter un événement"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm3">
            <fieldset>
              <label>Titre de l'événement</label>
              <br />
              <input
                name="title"
                placeholder="Titre de l'événement"
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
              <label>Date et heure de début</label>
              <br />
              <input
                name="start_date"
                type="datetime-local"
                value={form.start_date}
                min={new Date().toISOString().slice(0, 16)}
                onChange={handleChange}
                required
              />

              <br />
              <br />

              <label>Date et heure de fin</label>
              <br />
              <input
                name="end_date"
                type="datetime-local"
                value={form.end_date}
                min={new Date().toISOString().slice(0, 16)}
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
              <label>Description de l'événement</label>
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
          <h3>Liste des événements</h3>

          <table className="userTable">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Titre</th>
                <th>Contributeur</th>
                <th>date et heure de début</th>
                <th>date et heure de fin</th>
                <th>Places disponibles</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {event.map((event) => (
                <tr key={event.id_event} className="tableRank3">
                  {/* <td>{event.id_event}</td> */}
                  <td>{event.title}</td>
                  <td>{event.contributor}</td>
                  <td>{event.start_date}</td>
                  <td>{event.end_date}</td>
                  <td>{event.places}</td>
                  <td>{event.description}</td>
                  <td>
                    <button onClick={() => handleEdit(event)}>Modifier</button>
                    <button onClick={() => handleDelete(event.id_event)}>
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

export default EventDataManagement;
