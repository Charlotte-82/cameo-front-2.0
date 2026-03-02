import React, { useState, useEffect } from "react";
import BlogEditor from "../components/adminComponents/TextEditor.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BlogCompoManagement() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [tagInput, setTagInput] = useState("");
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

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

  // const handleSave = async () => {
  //   // Après une sauvegarde réussie dans BlogEditor, on rafraîchit la liste
  //   fetchArticles();
  // };

  const handleSave = async (articleData) => {
    // On ajoute les tags au payload final avant l'envoi
    const finalData = { ...articleData, tags: currentTags.join(",") };

    // Ton BlogEditor doit être modifié pour accepter ces données ou
    // gérer l'appel API ici même.
    fetchArticles();
    setCurrentTags([]); // Reset après succès
  };

  return (
    <div
      className="container-fluid pb-5"
      style={{ backgroundColor: "#ffdfb7" }}
    >
      <a href="/admin/dashboard">
        <button className="backButtonDash">Retour au Tableau de Bord</button>
      </a>
      {/* SECTION AJOUT DE TAGS */}
      <div className="container py-4">
        <div className="card shadow-sm p-3 mb-4">
          <label className="fw-bold mb-2">
            Tags pour la recherche (Cinéma, Action, Disney...)
          </label>
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
        </div>
      </div>

      {/* 1. L'éditeur */}
      <BlogEditor onSave={handleSave} extraTags={currentTags} />

      <hr className="my-5" />

      {/* 2. Liste des articles */}
      <div className="px-4">
        <h3 className="mb-4 fw-bold">Articles publiés</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {articles.map((article, index) => (
            <div className="col" key={article.id || index}>
              <div
                className="card h-100 shadow-sm cursor-pointer hover-shadow"
                onClick={() => setSelectedArticle(article)}
                style={{ cursor: "pointer transition: 0.3s" }}
              >
                {/* Affichage des tags sur la carte */}
                <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-1">
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
                  <h6 className="card-title mb-1 text-truncate">
                    {article.title}
                  </h6>
                  <small className="text-muted">Par {article.author}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Modale d'affichage de l'article */}
      {selectedArticle && (
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
                {/* Affichage des tags dans la modale */}
                <div className="mb-3">
                  {selectedArticle.tags &&
                    selectedArticle.tags.split(",").map((tag, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill border text-primary me-1"
                      >
                        #{tag}
                      </span>
                    ))}
                </div>

                {selectedArticle.cover_image && (
                  <img
                    src={`${API_BASE_URL}/uploads/highlight/${selectedArticle.cover_image}`}
                    className="img-fluid rounded mb-3 w-100"
                    alt="couverture"
                  />
                )}
                <div className="mb-3">
                  <span className="badge bg-primary me-2">
                    {selectedArticle.author}
                  </span>
                  <small className="text-muted">
                    {new Date(selectedArticle.date).toLocaleDateString()}
                  </small>
                </div>
                <hr />
                {/* Rendu du contenu HTML provenant de l'éditeur */}
                <div
                  className="article-preview-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedArticle(null)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogCompoManagement;
