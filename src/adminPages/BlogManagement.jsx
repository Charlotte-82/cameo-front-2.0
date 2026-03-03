import React, { useState, useEffect } from "react";
import BlogEditor from "../components/adminComponents/TextEditor.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BlogCompoManagement() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // État pour savoir si on modifie

  const [tagInput, setTagInput] = useState("");
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/article`);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des articles:", error);
    }
  };

  // --- LOGIQUE DES TAGS ---
  const addTag = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim().replace(",", "");
      if (tag && !currentTags.includes(tag)) {
        setCurrentTags([...currentTags, tag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (indexToRemove) => {
    setCurrentTags(currentTags.filter((_, index) => index !== indexToRemove));
  };

  // --- ACTIONS CRUD ---

  // Préparer la modification
  const prepareEdit = (article) => {
    setSelectedArticle(article);
    setIsEditing(true);
    // On charge les tags existants de l'article dans l'état des tags
    setCurrentTags(article.tags ? article.tags.split(",") : []);
    // On remonte en haut de page pour voir l'éditeur
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Supprimer un article
  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      try {
        const response = await fetch(`${API_BASE_URL}/article/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchArticles();
          setSelectedArticle(null);
        }
      } catch (error) {
        console.error("Erreur suppression:", error);
      }
    }
  };

  const handleSave = async (articleData) => {
    // Si on est en mode édition, on ajoute l'ID à l'URL et on utilise PUT
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `${API_BASE_URL}/article/${selectedArticle.id}`
      : `${API_BASE_URL}/article`;

    const finalData = { ...articleData, tags: currentTags.join(",") };

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        fetchArticles();
        cancelEdit(); // Réinitialise l'état
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement:", error);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setSelectedArticle(null);
    setCurrentTags([]);
  };

  return (
    <div
      className="container-fluid pb-5"
      style={{ backgroundColor: "#ffdfb7" }}
    >
      <a href="/admin/dashboard">
        <button className="backButtonDash">Retour au Tableau de Bord</button>
      </a>

      <div className="container py-4">
        <div className="card shadow-sm p-3 mb-4">
          <h4 className={isEditing ? "text-primary" : ""}>
            {isEditing
              ? `Modification de : ${selectedArticle.title}`
              : "Nouvel Article"}
          </h4>
          <label className="fw-bold mb-2">Tags pour la recherche</label>
          <div className="d-flex flex-wrap gap-2 mb-2">
            {currentTags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-dark d-flex align-items-center p-2"
              >
                {tag}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-2"
                  style={{ fontSize: "0.6rem" }}
                  onClick={() => removeTag(index)}
                ></button>
              </span>
            ))}
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Tapez un tag et appuyez sur Entrée..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={addTag}
          />
          {isEditing && (
            <button
              className="btn btn-outline-danger mt-3"
              onClick={cancelEdit}
            >
              Annuler la modification
            </button>
          )}
        </div>
      </div>

      {/* On passe l'article sélectionné à l'éditeur pour qu'il puisse pré-remplir les champs */}
      <BlogEditor
        onSave={handleSave}
        extraTags={currentTags}
        initialData={selectedArticle}
        editMode={isEditing}
      />

      <hr className="my-5" />

      <div className="px-4">
        <h3 className="mb-4 fw-bold">Articles publiés</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {articles.map((article) => (
            <div className="col" key={article.id}>
              <div className="card h-100 shadow-sm position-relative">
                {/* Badge de Tags */}
                <div
                  className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-1"
                  style={{ zIndex: 2 }}
                >
                  {article.tags &&
                    article.tags.split(",").map((t, i) => (
                      <span
                        key={i}
                        className="badge bg-info text-dark"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {t}
                      </span>
                    ))}
                </div>

                {article.cover_image ? (
                  <img
                    src={`${API_BASE_URL}/uploads/highlight/${article.cover_image}`}
                    className="card-img-top"
                    alt={article.title}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="bg-secondary text-white d-flex align-items-center justify-content-center"
                    style={{ height: "150px" }}
                  >
                    Sans image
                  </div>
                )}

                <div className="card-body">
                  <h6 className="card-title text-truncate">{article.title}</h6>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => prepareEdit(article)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(article.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                  <button
                    className="btn btn-sm btn-link w-100 mt-2 text-decoration-none"
                    onClick={() => {
                      setIsEditing(false);
                      setSelectedArticle(article);
                    }}
                  >
                    Voir l'aperçu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale d'aperçu (Uniquement pour voir) */}
      {selectedArticle && !isEditing && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content text-dark">
              <div className="modal-header">
                <h5 className="modal-title">{selectedArticle.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedArticle(null)}
                ></button>
              </div>
              <div className="modal-body">
                {/* ... (Contenu de la modale identique à votre code d'origine) ... */}
                <div
                  className="article-preview-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogCompoManagement;
