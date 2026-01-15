import React, { useState, useEffect } from "react";

function CollectionsManager() {
  const [collections, setCollections] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollection, setEditingCollection] = useState(null);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [resProducts, resCollections] = await Promise.all([
        fetch(`${API_BASE_URL}/product`),
        fetch(`${API_BASE_URL}/collection`),
      ]);

      const products = await resProducts.json();
      const collectionsData = await resCollections.json();

      const fullCollections = await Promise.all(
        collectionsData.map(async (col) => {
          const resContain = await fetch(
            `${API_BASE_URL}/contain?collection=${col[":id"]}`
          );
          const content = await resContain.json();
          return { ...col, items: content || [] };
        })
      );

      setAllProducts(products);
      setCollections(fullCollections);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    }
  };

  const getProductName = (id) => {
    const p = allProducts.find((prod) => prod.id === parseInt(id));
    return p ? p.name : `Produit #${id}`;
  };

  const openModal = (collection) => {
    if (!collection) return;

    setEditingCollection(collection);

    const items = collection.items || [];
    const currentIds = items.map((item) =>
      parseInt(item.product_id || item[":product_id"])
    );
    setSelectedProductIds(currentIds);
    setIsModalOpen(true);
  };

  const toggleProductSelection = (productId) => {
    const id = parseInt(productId);
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUpdate = async () => {
    const colId = editingCollection[":id"];
    const originalIds = editingCollection.items
      .map((item) => parseInt(item.product_id))
      .filter((id) => !isNaN(id));

    const toAdd = selectedProductIds.filter((id) => !originalIds.includes(id));
    const toRemove = originalIds.filter(
      (id) => !selectedProductIds.includes(id)
    );

    try {
      for (const prodId of toAdd) {
        await fetch(`${API_BASE_URL}/contain`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: prodId, collection: colId }),
        });
      }

      for (const prodId of toRemove) {
        await fetch(`${API_BASE_URL}/contain/${prodId}/${colId}`, {
          method: "DELETE",
        });
      }

      setIsModalOpen(false);
      loadData();
    } catch (error) {
      alert("Erreur lors de la mise à jour");
      console.error(error);
    }
  };

  return (
    <div className="collectionManager">
      <h2>Gestion des Collections</h2>

      <div className="collectionList">
        {collections.map((col) => (
          <div key={col[":id"]} className="collectionBox">
            <h3>{col[":name"]}</h3>
            <ul>
              {col.items.length > 0 ? (
                col.items.map((item) => {
                  const pId = item.product_id;
                  const cId = item.collection_id;

                  return <li key={`${cId}-${pId}`}>{getProductName(pId)}</li>;
                })
              ) : (
                <li key="empty" style={{ color: "gray" }}>
                  Collection vide
                </li>
              )}
            </ul>
            <button onClick={() => openModal(col)}>Modifier le contenu</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modalCollection">
          <h3>Contenu de : {editingCollection[":name"]}</h3>

          <div
            className="productsGrid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {allProducts.map((product) => (
              <label
                key={product.id}
                style={{ display: "block", padding: "5px" }}
              >
                <input
                  type="checkbox"
                  checked={selectedProductIds.includes(parseInt(product.id))}
                  onChange={() => toggleProductSelection(product.id)}
                  style={{ marginRight: "0.5em" }}
                />
                {product.name} <small>({product.type})</small>
              </label>
            ))}
          </div>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setIsModalOpen(false)}>Annuler</button>
            <button
              onClick={handleUpdate}
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                border: "1px solid whitesmoke",
                marginTop: "10px",
              }}
            >
              Enregistrer les modifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionsManager;
