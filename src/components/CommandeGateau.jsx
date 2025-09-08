import React, { useEffect, useState } from "react";

function CommandeGateau() {
  const [fullCakes, setFullCakes] = useState([]);
  const [selectedCake, setSelectedCake] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/fullcakes`)
      .then((response) => response.json())
      .then((data) => setFullCakes(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des gâteaux:", error)
      );
  }, []);

  const openModal = (cake) => {
    setSelectedCake(cake);
  };

  const closeModal = () => {
    setSelectedCake(null);
  };

  return (
    <div className="ResaCameoDiv">
      <h3>Commander des Gâteaux</h3>
      <p>
        Le Caméo met à votre disposition une carte généreuse de gâteaux entiers
        à la commande. Consultez la carte ci-dessous pour faire votre choix (et
        cliquez sur les gâteaux qui vont font envie pour voir les photos).
      </p>

      <ul className="listeGateauxEntiers">
        {fullCakes.map((cake) => (
          <li key={cake.id}>
            <button onClick={() => openModal(cake)}>{cake.name}</button>
          </li>
        ))}
      </ul>

      {selectedCake && (
        <div className="modal" onClick={closeModal} style={modalStyle}>
          <div onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
            <img
              src={`${API_BASE_URL}/uploads/${selectedCake.photo_filename}`}
              alt={selectedCake.name}
              style={{
                display: "block",
                maxWidth: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)", // fond semi-transparent pour le reste de l'écran
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  display: "inline-block", // ne s'étend pas plus que l'image
  border: "2px solid black", // bordure autour de l'image
  borderRadius: "5px", // coins arrondis
  overflow: "hidden", // pour que la bordure s'applique proprement
  backgroundColor: "transparent",
  padding: 0, // aucun espace autour de l'image
};

export default CommandeGateau;
