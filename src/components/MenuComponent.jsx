import React, { useState } from "react";

function MenuComponent() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const collectionsData = [
    { id: 1, name: "Pâtisseries" },
    { id: 3, name: "Boissons chaudes" },
    { id: 4, name: "Boissons froides" },
    { id: 2, name: "Carte des Thés et Infusions" },
    { id: 5, name: "Offre de saison" },
    { id: 6, name: "Nouveautés" },
  ];

  const getProductId = (product) => {
    switch (product.type_produit) {
      case "boissons_froides":
        return product.id_boissonsfroides;
      case "boissons_chaudes":
        return product.id_boissonschaudes;
      case "cake":
        return product.id_cake;
      case "glaces":
        return product.id_glace;
      case "thes_infusions":
        return product.id;
      default:
        return product.id;
    }
  };

  const handleCaseClick = async (collectionId) => {
    setLoading(true);
    setError(null);
    setModalData(null);

    try {
      const endpoint = `${API_BASE_URL}/collections/${collectionId}`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(
          `Erreur de chargement des données : ${response.status}`
        );
      }
      const data = await response.json();
      setModalData(data);
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
    <div className="page">
      <h2 className="shopTitle2">La carte du salon</h2>
      <p className="introMenu">
        Découvrez toutes les douceurs à venir déguster sur place.
      </p>
      <div className="menuGrid">
        {collectionsData.map((collection) => (
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
              <div className="imageFondMenu">
                <h3 className="titreMenuCollection">
                  {modalData.info_collection.nom}
                </h3>
                <ul className="menuModale">
                  {modalData.produits.map((item, index) => (
                    <li key={`${item.type_produit}-${getProductId(item)}`}>
                      {modalData.info_collection.id === 6 &&
                        item.ingredients && (
                          <p className="NouveauteText">
                            C'est tout nouveau tout chaud ! Venez le découvrir
                            au café !
                          </p>
                        )}
                      <div className="itemMenuDiv">
                        <span className="itemGauche">{item.name}</span>
                        {modalData.info_collection.id !== 2 &&
                          modalData.info_collection.id !== 6 && (
                            <span className="itemDroit">{item.price}€</span>
                          )}
                      </div>
                      {modalData.info_collection.id === 2 &&
                        item.ingredients && (
                          <p className="ingredientsText">{item.ingredients}</p>
                        )}

                      {modalData.info_collection.id === 6 &&
                        item.ingredients && (
                          <p className="ingredientsText">{item.ingredients}</p>
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
