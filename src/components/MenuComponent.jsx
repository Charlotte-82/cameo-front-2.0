import React, { useState } from "react";

function MenuComponent() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const collectionsData = [
    { id: 1, name: "Boissons Chaudes" },
    { id: 3, name: "Pâtisseries" },
    { id: 2, name: "Boissons Froides" },
    { id: 5, name: "Offre de Saison" },
    { id: 4, name: "Carte des Thés" },
    { id: 6, name: "Nouveautés" },
  ];

  const handleCaseClick = async (collectionId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/contain?collection=${collectionId}`
      );
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des produits");

      const produits = await response.json();
      const collectionInfo = collectionsData.find((c) => c.id === collectionId);

      setModalData({
        info_collection: { id: collectionId, nom: collectionInfo.name },
        produits: produits,
      });

      setShowModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div className="page" style={{ backgroundColor: "whitesmoke" }}>
      <h2 className="shopTitle2">La carte du salon</h2>
      <p className="introMenu">
        Découvrez toutes les douceurs à venir déguster sur place.
      </p>

      <div className="menuGrid">
        {collectionsData
          .filter((col) => col.id !== 6 || (col.items && col.items.length > 0))
          .map((collection) => (
            <div
              key={collection.id}
              className="menuCase"
              onClick={() => handleCaseClick(collection.id)}
            >
              {collection.name}
            </div>
          ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content modaleMenu"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            {loading && <p>Chargement...</p>}
            {error && <p>Erreur: {error}</p>}

            {modalData && modalData.produits && (
              <div>
                <h3 className="titreMenuCollection">
                  {modalData.info_collection.nom}
                </h3>
                <ul className="menuModale">
                  {modalData.produits.map((item, index) => (
                    <li key={item.product_id || index}>
                      <div className="itemMenuDiv">
                        <span className="itemGauche">
                          {item[":name"] || item.product_name}
                        </span>
                        {modalData.info_collection.id !== 4 && (
                          <span className="itemDroit">
                            {item[":price"] || item.product_price}€
                          </span>
                        )}
                      </div>
                      {modalData.info_collection.id === 4 &&
                        (item[":ingredients"] || item.product_ingredients) && (
                          <p className="ingredientsText">
                            {item[":ingredients"] || item.product_ingredients}
                          </p>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuComponent;
