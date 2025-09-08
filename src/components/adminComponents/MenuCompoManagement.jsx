import React, { useState, useEffect } from "react";

function CollectionsManager() {
  const [collections, setCollections] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollection, setEditingCollection] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState({});

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchCollections = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/collections`);
      const collectionsData = await response.json();

      if (!Array.isArray(collectionsData)) {
        console.error("L'API n'a pas retourné un tableau de collections.");
        setCollections([]);
        return;
      }

      const collectionsWithProductsPromises = collectionsData.map(
        async (collection) => {
          const productsResponse = await fetch(
            `${API_BASE_URL}/collections/${collection.id}`
          );
          const data = await productsResponse.json();

          if (data && data.info_collection && Array.isArray(data.produits)) {
            const normalizedProducts = data.produits.map((product) => {
              let id = product.id;
              if (product.id_glace) id = product.id_glace;
              if (product.id_boissonsfroides) id = product.id_boissonsfroides;
              if (product.id_boissonschaudes) id = product.id_boissonschaudes;
              if (product.id_cake) id = product.id_cake;

              return {
                id: id,
                name: product.name,
                price: product.price,
                type_produit: product.type_produit,
              };
            });

            return {
              ...data,
              produits: normalizedProducts,
            };
          }

          return { info_collection: collection, produits: [] };
        }
      );

      const finalCollections = await Promise.all(
        collectionsWithProductsPromises
      );
      setCollections(finalCollections);
    } catch (error) {
      console.error("Erreur lors de la récupération des collections:", error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const productEndpoints = [
        "glaces",
        "boissonsfroides",
        "boissonschaudes",
        "cakes",
        "thes",
      ];

      const productsPromises = productEndpoints.map(async (endpoint) => {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error(`L'endpoint ${endpoint} n'a pas retourné un tableau.`);
          return [];
        }

        return data.map((product) => {
          let type_produit = endpoint;
          if (endpoint === "boissonsfroides") {
            type_produit = "boissons_froides";
          }
          if (endpoint === "boissonschaudes") {
            type_produit = "boissons_chaudes";
          }
          if (endpoint === "cakes") {
            // Si le nom de la table est "cake"
            type_produit = "cake";
          }
          if (endpoint === "thes") {
            // Si le nom de la table est "thes_infusions"
            type_produit = "thes_infusions";
          }

          return {
            id:
              product.id ||
              product.id_glace ||
              product.id_boissonsfroides ||
              product.id_boissonschaudes ||
              product.id_cake,
            name: product.name,
            price: product.price,
            type_produit: type_produit,
          };
        });
      });

      const allProductsArrays = await Promise.all(productsPromises);
      setAllProducts(allProductsArrays.flat());
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de tous les produits:",
        error
      );
    }
  };

  useEffect(() => {
    fetchCollections();
    fetchAllProducts();
  }, []);

  const openModal = (collection) => {
    setEditingCollection(collection);

    const initialSelected = {};
    if (collection.produits) {
      collection.produits.forEach((product) => {
        if (product.id) {
          initialSelected[`${product.type_produit}_${product.id}`] = true;
        }
      });
    }
    setSelectedProducts(initialSelected);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCollection(null);
    setSelectedProducts({});
  };

  const handleCheckboxChange = (product) => {
    const productKey = `${product.type_produit}_${product.id}`;
    setSelectedProducts((prevState) => ({
      ...prevState,
      [productKey]: !prevState[productKey],
    }));
  };

  const handleUpdate = async () => {
    if (!editingCollection) return;

    const productsToUpdate = allProducts
      .filter(
        (product) => selectedProducts[`${product.type_produit}_${product.id}`]
      )
      .map((product) => ({
        id: product.id,
        table: product.type_produit,
      }));

    try {
      const response = await fetch(
        `${API_BASE_URL}/collections/${editingCollection.info_collection.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ produits: productsToUpdate }),
        }
      );

      if (response.ok) {
        console.log("Collection mise à jour avec succès.");
        closeModal();
        fetchCollections();
      } else {
        console.error("Erreur lors de la mise à jour de la collection.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestion des collections</h1>
      <div className="collectionGroupDiv">
        {collections.length > 0 ? (
          collections.map((collection) => (
            <div key={collection.info_collection.id} className="collectionDiv">
              <h2 className="text-xl font-semibold mb-2">
                {collection.info_collection.nom}
              </h2>

              <ul className="list-disc list-inside ml-4">
                {collection.produits.length > 0 ? (
                  collection.produits.map((product) => (
                    <li
                      key={`${product.type_produit}-${product.id}`}
                      className="text-gray-700"
                    >
                      {product.name}{" "}
                      <span className="text-sm text-gray-500">
                        {product.price}€
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">
                    Aucun produit dans cette collection.
                  </li>
                )}
              </ul>
              <div className="mt-4">
                <button
                  onClick={() => openModal(collection)}
                  className="boutonCollection"
                >
                  Modifier
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucune collection trouvée.</p>
        )}
      </div>

      {isModalOpen && editingCollection && (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              Modifier la collection: {editingCollection.info_collection.nom}
            </h3>
            <div className="modal-products-grid">
              {allProducts.map((product) => (
                <div
                  key={`${product.type_produit}-${product.id}`}
                  className="modal-products-grid-item"
                >
                  <input
                    type="checkbox"
                    id={`${product.type_produit}-${product.id}`}
                    checked={
                      selectedProducts[
                        `${product.type_produit}_${product.id}`
                      ] || false
                    }
                    onChange={() => handleCheckboxChange(product)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`${product.type_produit}-${product.id}`}
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    {product.name}{" "}
                    <span className="text-sm text-gray-500">
                      ({product.type_produit})
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button onClick={closeModal} className="boutonCollection">
                Annuler
              </button>
              <button onClick={handleUpdate} className="boutonCollection">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionsManager;
