import React, { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function BlogEditor() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("article");

    const loadData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/article`);
        if (response.ok) {
          const data = await response.json();
          setArticles(data);

          if (articleId) {
            const found = data.find((a) => a.id.toString() === articleId);
            if (found) setSelectedArticle(found);
          }
        }
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    if (article) {
      window.history.pushState({}, "", `?article=${article.id}`);
    } else {
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  const parseDate = (dateVal) => {
    if (!dateVal) return new Date();
    if (dateVal instanceof Date) return dateVal;
    if (typeof dateVal === "string") return new Date(dateVal.replace(" ", "T"));
    return new Date(dateVal);
  };

  const getShareUrl = (id) => {
    return `${window.location.origin}${window.location.pathname}?article=${id}`;
  };

  // --- LOGIQUE DE PARTAGE AVANCÉE ---
  const shareNative = (article) => {
    const url = getShareUrl(article.id);
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: `Regarde cet article sur CaméoScope !`,
          url: url,
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert("Lien copié !");
    }
  };

  const filtered = articles.filter(
    (art) =>
      art.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.tags?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupByMonth = (items) => {
    return items.reduce((acc, article) => {
      const date = new Date(article.date);
      if (isNaN(date.getTime())) return acc;
      const monthYear = date.toLocaleString("fr-FR", {
        month: "long",
        year: "numeric",
      });
      if (!acc[monthYear]) acc[monthYear] = [];
      acc[monthYear].push(article);
      return acc;
    }, {});
  };

  const grouped = groupByMonth(filtered);

  if (selectedArticle) {
    const artDate = parseDate(selectedArticle.date);
    const articleUrl = getShareUrl(selectedArticle.id);
    const shareUrlEnc = encodeURIComponent(articleUrl);
    const shareTitleEnc = encodeURIComponent(selectedArticle.title);
    const coverImageUrl = `${API_BASE_URL}/uploads/highlight/${selectedArticle.cover_image}`;

    return (
      <div className="px-5 py-5  rounded shadow-sm articlePage">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3">
          <button
            className="boutonLien text-decoration-none"
            onClick={() => handleSelectArticle(null)}
          >
            ← Retour aux articles
          </button>

          <div className="d-flex gap-2 align-items-center mt-2 mt-md-0">
            <span className="small text-muted d-none d-sm-inline">
              Partager :
            </span>

            {/* Facebook Corrigé */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEnc}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              <i className="bi bi-facebook fcbk"></i>
            </a>

            {/* Instagram / Partage Système (Indispensable pour Insta) */}
            <button
              onClick={() => shareNative(selectedArticle)}
              className="btn btn-outline-danger btn-sm"
              title="Partager sur Instagram"
            >
              <i className="bi bi-instagram insta"></i>
            </button>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${shareTitleEnc}%20${shareUrlEnc}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-sm"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                navigator.clipboard.writeText(articleUrl);
                alert("Lien copié !");
              }}
            >
              <i className="bi bi-link-45deg"></i>
            </button>
          </div>
        </div>

        <article>
          <div className="mb-4 text-dark border-bottom pb-2">
            Posté le{" "}
            <strong className="text-capitalize">
              {artDate.toLocaleString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </strong>{" "}
            par{" "}
            <strong className="text-capitalize">
              {selectedArticle.author}
            </strong>
          </div>
          <div
            className="article-hero-banner position-relative d-flex align-items-center justify-content-center text-center text-white"
            style={{
              backgroundImage: `url(${coverImageUrl})`,
            }}
          >
            {/* Overlay pour l'opacité et le contraste du texte */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            {/* Contenu du titre (au-dessus de l'overlay) */}
            <div className="position-relative px-3 z-1">
              <h1 className="display-3 fw-bold mb-3">
                {selectedArticle.title}
              </h1>
            </div>
          </div>
          <div
            className="article-preview-content article-content fs-5 lh-base"
            dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
          />
        </article>
      </div>
    );
  }

  return (
    <div className="page blog">
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "12px 18px",
            borderRadius: "10px",
            background: "whitesmoke",
            color: "#6c1304",
            cursor: "pointer",
            border: "solid 2px #dd7300",
            fontWeight: "400",
            fontSize: "xx-large",
            transition: "opacity 0.3s",
          }}
        >
          ↑
        </button>
      )}
      <hr className="NavigLigne2"></hr>
      <hr className="NavigLigne21"></hr>
      <div className="header-blog text-center mb-5">
        <h1 className="fw-bold display-2">CaméoScope</h1>
        <p className="lead introBlog">
          Passionné·es de cinéma et de séries, Installez-vous confortablement.
          Ici, on discute, on critique, on analyse, on découvre, on
          s'enthousiasme, on s'agace. Bref, on partage une même passion.
          Préparez-vous, le spectacle va commencer...
        </p>
      </div>

      <div className="search-bar mb-5 mx-auto" style={{ maxWidth: "600px" }}>
        <input
          type="text"
          className="form-control form-control-lg rounded-pill shadow-sm"
          placeholder="Rechercher par titre ou #tag..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Lancement du film...</p>
        </div>
      ) : (
        Object.keys(grouped)
          .sort((a, b) => b - a)
          .map((period) => (
            <section key={period} className="mb-5 px-5">
              <h2 className="text-capitalize mb-4 border-start border-5 border-danger ps-3">
                {period}
              </h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {grouped[period].map((article) => (
                  <div className="col" key={article.id}>
                    <div
                      className="card h-100 shadow-sm border-0 hover-shadow transition"
                      onClick={() => handleSelectArticle(article)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="position-relative">
                        <img
                          src={`${API_BASE_URL}/uploads/highlight/${article.cover_image}`}
                          className="card-img-top"
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={article.title}
                        />
                        <div className="position-absolute bottom-0 start-0 p-2">
                          {article.tags
                            ?.split(",")
                            .slice(0, 2)
                            .map((t) => (
                              <span key={t} className="badge bg-primary me-1">
                                {t.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{article.title}</h5>
                        <p className="card-text text-muted small">
                          Par {article.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
      )}
    </div>
  );
}
