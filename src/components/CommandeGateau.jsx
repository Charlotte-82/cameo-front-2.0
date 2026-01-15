import React, { useEffect, useState } from "react";

function CommandeGateau() {
  const [fullCakes, setFullCakes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/product?type=gateau-entier`)
      .then((response) => response.json())
      .then((data) => setFullCakes(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des gâteaux:", error)
      );
  }, []);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h3 style={{ color: "#b21a00", fontWeight: "700" }}>Gâteaux Entiers</h3>
      <div className="gateaux-grid">
        {fullCakes.map((cake, index) => (
          <div
            key={cake.id}
            className={`gateau ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleActive(index)}
          >
            <div className="gateau-content">
              <p className="gateau-nom">{cake.name}</p>
              <img
                src={`${API_BASE_URL}/uploads/${cake.photo}`}
                alt={cake.name}
                className="gateau-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommandeGateau;
