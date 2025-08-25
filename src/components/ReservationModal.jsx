import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ReservationModal({ item, onClose, onReserve }) {
  const [placesCount, setPlacesCount] = useState(1); // Gère l'envoi du formulaire de réservation

  const handleSubmit = (e) => {
    e.preventDefault(); // Appel de la fonction de réservation passée en prop par le parent (Program.jsx)
    onReserve(placesCount);
  }; // Hook pour gérer le blocage du défilement du corps de la page

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Fonction de nettoyage pour réactiver le défilement lorsque le composant est démonté
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []); // On utilise un portal pour que la modale s'affiche au-dessus de tout, // et non à la fin du composant `Program`.

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose}>
      {" "}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <div className="modal-dialog modal-dialog-centered">
          {" "}
          <div className="modal-content">
            {" "}
            <div className="modal-header">
              {" "}
              <h3 className="modal-title">Réserver une activité</h3>{" "}
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>{" "}
            </div>{" "}
            <div className="modal-body">
              {" "}
              <div className="auth-form login-form">
                <h4>{item.title}</h4> <p>Places disponibles : {item.places}</p>{" "}
                <form onSubmit={handleSubmit} className="adminForm4">
                  <label>Nombre de places :</label>
                  <br />{" "}
                  <input
                    type="number"
                    name="placesCount"
                    value={placesCount}
                    onChange={(e) => setPlacesCount(Number(e.target.value))}
                    min="1"
                    max={item.places}
                    required
                  />
                  <br /> <button type="submit">Confirmer</button>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

export default ReservationModal;
