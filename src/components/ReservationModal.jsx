import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ReservationModal({ item, onClose, onReserve }) {
  const [placesCount, setPlacesCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReserve(placesCount);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
