import React, { useState, useEffect } from "react";

function NewsDataManagement() {
  const [items, setItems] = useState([]);
  const [highlight, setHighlight] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Chargement des activités + highlight
  useEffect(() => {
    fetch(`${API_BASE_URL}/upcoming`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error(
            "Les données des activités ne sont pas un tableau :",
            data
          );
          setItems([]);
        }
      })
      .catch((err) => {
        console.error("Erreur chargement activités :", err);
        setItems([]);
      });

    // URL corrigée : ajoute le chemin '/highlight' et utilise '/featured'
    fetch(`${API_BASE_URL}/highlight/featured`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.type && data?.related_id) {
          setHighlight(data);
          setSelectedId(`${data.type}-${data.related_id}`);
        }
      })
      .catch((err) => console.error("Erreur chargement highlight :", err));
  }, []);

  const handleSaveHighlight = async () => {
    if (!selectedId) {
      alert("Veuillez sélectionner un élément à mettre en avant.");
      return;
    }

    if (!selectedPhoto) {
      alert("Veuillez sélectionner une photo pour le highlight.");
      return;
    }

    const [type, relatedIdStr] = selectedId.split("-");
    const related_id = Number(relatedIdStr);

    if (isNaN(related_id) || related_id <= 0) {
      alert("ID lié invalide.");
      return;
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("related_id", related_id);
    formData.append("photo", selectedPhoto);

    try {
      const res = await fetch(`${API_BASE_URL}/highlight`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || "Erreur lors de la sauvegarde du highlight."
        );
      }

      const responseData = await res.json();

      alert("Highlight mis à jour avec succès !");
      setHighlight({
        type,
        related_id,
        photo_filename: responseData.photo_filename,
      });
      setSelectedPhoto(null);
    } catch (err) {
      console.error(err);
      alert("Erreur : " + err.message);
    }
  };

  return (
    <div className="cakeManagementCompo2">
      <h2>Gestion de l'affichage de l'actualité en page d'accueil</h2>
      <div className="allCakeDiv3">
        <div className="highlightUploadSection">
          <h3>Photo associée</h3>

          {highlight?.photo_filename && (
            <div className="highlightSectionRight">
              <h4>[Photo actuelle]</h4>
              <br></br>
              <div className="highlightImageDiv">
                <img
                  src={`${API_BASE_URL.replace(/\/$/, "")}/uploads/highlight/${
                    highlight.photo_filename
                  }`}
                  alt="Highlight"
                  className="highlightImage"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedPhoto(e.target.files[0])}
              />
            </div>
          )}
        </div>
        <div className="cakeTableDiv">
          <h3>Liste des activités à venir</h3>
          <table className="cakeTable">
            <thead>
              <tr>
                <th></th>
                <th>Titre</th>
                <th>Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                let id;
                if (item.type === "event") {
                  id = `${item.type}-${item.id_event}`;
                } else if (item.type === "workshop") {
                  id = `${item.type}-${item.id_workshop}`;
                }

                const isHighlighted =
                  highlight &&
                  highlight.type === item.type &&
                  String(highlight.related_id) === String(id.split("-")[1]);

                return (
                  <tr
                    key={id}
                    className={isHighlighted ? "highlightedRow" : ""}
                  >
                    <td>
                      <input
                        type="radio"
                        name="highlightSelect"
                        checked={selectedId === id}
                        onChange={() => setSelectedId(id)}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      {new Date(item.start_date ?? item.date).toLocaleString()}
                    </td>
                    <td>{item.type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={handleSaveHighlight}>Sauvegarder</button>
    </div>
  );
}

export default NewsDataManagement;
