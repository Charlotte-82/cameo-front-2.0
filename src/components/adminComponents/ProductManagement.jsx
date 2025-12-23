import React, { useEffect, useState } from "react";

function ProductManagement() {
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    photo: "",
    ingredients: "",
    type: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`${API_BASE_URL}/product`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setProduct)
      .catch((err) =>
        console.error("Erreur lors du fetch des produits :", err)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = editingId
      ? `${API_BASE_URL}/product/${editingId}`
      : `${API_BASE_URL}/product`;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("ingredients", form.ingredients);
    formData.append("type", form.type);

    if (form.photo) {
      formData.append("photo", form.photo);
    }

    if (editingId) {
      formData.append("_method", "PUT");
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
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

      fetchProduct();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({ name: "", price: "", photo: "", ingredients: "", type: "" });
      setEditingId(null);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      photo: product.photo,
      ingredients: product.ingredients,
      type: product.type,
    });
    setEditingId(product.id);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: file });
    }
  };

  const handleDelete = (id) => {
    if (!id) {
      console.error("Impossible de supprimer : l'ID est indéfini !");
      return;
    }

    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;
    fetch(`${API_BASE_URL}/product/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => {
        const text = await res.text();

        if (!res.ok) {
          try {
            const errorData = JSON.parse(text);
            throw new Error(errorData.error || `Erreur ${res.status}`);
          } catch {
            throw new Error(
              text || `Erreur lors de la suppression: ${res.status}`
            );
          }
        }

        return text;
      })
      .then((text) => {
        console.log("Produit supprimé avec succès.");
        fetchProduct();
      })
      .catch((err) =>
        console.error("Erreur lors de la suppression du produit :", err.message)
      );
  };

  const groupedProducts = product.reduce((acc, curr) => {
    const type = curr.type || "Autre";
    if (!acc[type]) acc[type] = [];
    acc[type].push(curr);
    return acc;
  }, {});

  const [activeType, setActiveType] = useState(null);

  const toggleAccordion = (type) => {
    setActiveType(activeType === type ? null : type);
  };

  return (
    <div className="cakeManagementCompo">
      <h2>Gestion des Produits</h2>
      <div className="allCakeDiv">
        <div className="cakeAddDiv">
          <h3>{editingId ? "Modifier un produit" : "Ajouter un produit"}</h3>
          <form onSubmit={handleSubmit} className="adminForm2">
            <fieldset>
              <label>Nom du produit</label>
              <br />
              <input
                name="name"
                placeholder="Nom"
                value={form.name}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prix du produit</label>
              <br />
              <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Prix"
                value={form.price}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Photo du produit (optionnel)</label>
              <br />
              <input
                name="photo"
                type="file"
                placeholder="Photo"
                onChange={handleFileChange}
              />
              <br />
              <br />
              <label>Ingrédients du produit (optionnel)</label>
              <br />
              <input
                name="ingredients"
                placeholder="Ingrédients"
                value={form.ingredients || ""}
                onChange={handleChange}
              />
              <br />
              <br />
              <label>Type du produit</label>
              <br />
              <select
                name="type"
                placeholder="Choisir un type"
                value={form.type}
                onChange={handleChange}
                required
              >
                <option value="gateau-part">Gâteau à la part</option>
                <option value="gateau-entier">Gâteau entier</option>
                <option value="boissons-chaudes">Boisson Chaude</option>
                <option value="boissons-froides">Boisson Froide</option>
                <option value="thes-verts">Thé Vert</option>
                <option value="thes-noirs">Thé Noir</option>
                <option value="infusions">Infusion</option>
                <option value="rooibos">Rooïbos</option>
                <option value="goodies">Goodies</option>
                <option value="sachet">Sachet de thé 100g</option>
                <option value="glaces">Glace</option>
              </select>
              <br />
              <br />
              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="cakeTableDiv">
          <h3>Liste des produits</h3>

          <table className="cakeTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Photo</th>
                <th>Ingrédients</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr key={product.id} className="tableRank2">
                  <td>{product.name}</td>
                  <td>{product.price} €</td>
                  <td>
                    {product.photo ? (
                      <img
                        src={`${API_BASE_URL}/uploads/${product.photo}`}
                        alt={product.name}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {!product.ingredients || product.ingredients === "null"
                      ? ""
                      : product.ingredients}
                  </td>
                  <td>{product.type}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mobileAccordionContainer">
            {Object.keys(groupedProducts).map((type) => (
              <div key={type} className="accordionSection">
                <button
                  className="accordionHeader"
                  onClick={() => toggleAccordion(type)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    textAlign: "left",
                    backgroundColor: "#f4f4f4",
                    color: "#6c1304",
                    border: "1px solid #6c1304",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    textTransform: "capitalize",
                    marginBottom: "5px",
                  }}
                >
                  {type.replace("-", " ")}
                  <span>{activeType === type ? "▲" : "▼"}</span>
                </button>

                {/* Contenu de l'accordéon (visible seulement si activeType correspond) */}
                {activeType === type && (
                  <ul
                    className="glaceList"
                    style={{ listStyle: "none", padding: "0" }}
                  >
                    {groupedProducts[type].map((item) => (
                      <li
                        key={item.id}
                        className="glaceItem"
                        style={{
                          borderBottom: "1px solid #eee",
                          padding: "10px",
                        }}
                      >
                        <div className="itemDetails">
                          <p>
                            <span style={{ fontSize: "larger" }}>
                              <strong>{item.name}</strong> - {item.price} €
                            </span>
                            <br></br>
                            {!item.ingredients || item.ingredients === "null"
                              ? ""
                              : item.ingredients}
                          </p>
                        </div>

                        {item.photo && (
                          <img
                            src={`${API_BASE_URL}/uploads/${item.photo}`}
                            alt={item.name}
                            style={{
                              width: "60px",
                              display: "block",
                              margin: "10px 0",
                            }}
                          />
                        )}

                        <div className="itemActions">
                          <button onClick={() => handleEdit(item)}>
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            style={{ marginLeft: "10px" }}
                          >
                            Supprimer
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManagement;
