import React, { useState, useRef, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function TextEditor({
  onSave,
  editMode = false,
  initialData = null,
  extraTags = [],
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [coverImage, setCoverImage] = useState(initialData?.cover_image || "");
  const [date, setDate] = useState(
    initialData?.date ||
      new Date().toISOString().slice(0, 19).replace("T", " "),
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const editorRef = useRef(null);

  const [images, setImages] = useState([]);
  const [showImageBank, setShowImageBank] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState("");

  // --- AJOUT : Synchronisation des champs quand initialData change ---
  useEffect(() => {
    setTitle(initialData?.title || "");
    setAuthor(initialData?.author || "");
    setContent(initialData?.content || "");
    setCoverImage(initialData?.cover_image || "");

    // Mise à jour du contenu visuel de l'éditeur (div contentEditable)
    if (editorRef.current) {
      editorRef.current.innerHTML = initialData?.content || "";
    }
  }, [initialData]);
  // ------------------------------------------------------------------

  useEffect(() => {
    if (editorRef.current && content && !initialData) {
      // Ajout check !initialData pour éviter double init
      editorRef.current.innerHTML = content;
    }
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/media`);
      const data = await res.json();
      setImages([...data]);
    } catch (err) {
      console.error("Erreur galerie:", err);
    }
  };

  const handleEditorChange = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("name", imageName);
    formData.append("image", selectedFile);
    try {
      const res = await fetch(`${API_BASE_URL}/media`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setImageName("");
        setSelectedFile(null);
        fetchImages();
        alert("Image ajoutée à la banque !");
      }
    } catch (err) {
      console.error("Erreur upload:", err);
    }
  };

  const insertImageInEditor = (imageUrl) => {
    const width = prompt("Largeur (ex: 30%, 300px) :", "50%");
    if (width === null) return;

    const align = prompt(
      "Alignement : tapez 'gauche', 'droite' ou 'centre'",
      "gauche",
    );

    let floatStyle = "";
    let marginStyle = "margin: 10px auto; display: block;"; // Par défaut : centré

    if (align === "gauche") {
      floatStyle = "float: left;";
      marginStyle = "margin: 0 20px 10px 0;"; // Marge à droite pour décoller le texte
    } else if (align === "droite") {
      floatStyle = "float: right;";
      marginStyle = "margin: 0 0 10px 20px;"; // Marge à gauche
    }

    const img = `<img src="${API_BASE_URL}/uploads/highlight/${imageUrl}" 
                    alt="Image article" 
                    style="width: ${width}; height: auto; ${floatStyle} ${marginStyle}" />`;

    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("insertHTML", false, img);
      handleEditorChange();
    }
    setShowImageBank(false);
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) {
      alert("Tous les champs sont requis !");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const articleData = {
        title: title.trim(),
        author: author.trim(),
        content: content,
        cover_image: coverImage,
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
        tags: extraTags.join(","),
      };

      const url =
        editMode && initialData?.id
          ? `${API_BASE_URL}/article/${initialData.id}`
          : `${API_BASE_URL}/article`;

      const method = editMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Erreur HTTP ${response.status}`);
      }

      if (onSave) {
        onSave({ ...articleData, id: data.id || initialData?.id });
      }

      if (!editMode) {
        setTitle("");
        setAuthor("");
        setContent("");
        setCoverImage("");
        if (editorRef.current) {
          editorRef.current.innerHTML = "";
        }
      }

      alert(editMode ? "Article mis à jour !" : "Article créé !");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 container-fluid">
      <h2 className="h2 fw-bold mb-4" style={{ color: "#b21a00" }}>
        {editMode ? "Modifier l'article" : "Nouvel Article"}
      </h2>

      <div className="row g-4">
        {/* COLONNE GAUCHE : ÉDITEUR */}
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm p-4 mb-4">
            <div className="mb-3">
              <label className="form-label fw-bold">Titre de l'article</label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Auteur</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Contenu</label>
              <div className="border rounded-top p-2 bg-light d-flex flex-wrap gap-1">
                <button
                  type="button"
                  onClick={() => execCommand("bold")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Gras"
                >
                  <strong>G</strong>
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("italic")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Italique"
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("underline")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Souligné"
                >
                  <u>S</u>
                </button>
                <div className="vr mx-1"></div>
                <button
                  type="button"
                  onClick={() => execCommand("insertUnorderedList")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Liste à puces"
                >
                  • Liste
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("insertOrderedList")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Liste numérotée"
                >
                  1. Liste
                </button>
                <div className="vr mx-1"></div>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "h2")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Titre"
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "h3")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Sous-titre"
                >
                  H3
                </button>
                <button
                  type="button"
                  onClick={() => execCommand("formatBlock", "p")}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Paragraphe"
                >
                  P
                </button>
                <div className="vr mx-1"></div>
                <button
                  type="button"
                  onClick={() => {
                    const url = prompt("URL du lien:");
                    if (url) execCommand("createLink", url);
                  }}
                  className="btn btn-sm btn-outline-secondary bg-white"
                  title="Lien"
                >
                  🔗
                </button>
                <div className="vr mx-1"></div>
              </div>

              <div
                ref={editorRef}
                contentEditable={!loading}
                onInput={handleEditorChange}
                className="form-control rounded-bottom rounded-0 border-top-0 bg-white"
                style={{ minHeight: "500px", overflowY: "auto" }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn btn-primary btn-lg w-100"
            >
              {loading
                ? "Chargement..."
                : editMode
                  ? "Enregistrer les modifications"
                  : "Publier l'article"}
            </button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </div>

        {/* COLONNE DROITE : BANQUE D'IMAGES & COUVERTURE */}
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm mb-4 border-primary">
            <div className="card-body">
              <h5 className="card-title fw-bold">Image de couverture</h5>
              {coverImage ? (
                <div className="position-relative mb-2">
                  <img
                    src={`${API_BASE_URL}/uploads/highlight/${coverImage}`}
                    className="img-fluid rounded border"
                    alt="Couverture"
                  />
                  <button
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                    onClick={() => setCoverImage("")}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="bg-light border rounded text-center py-4 mb-2 text-muted">
                  <small>Aucune image de couverture sélectionnée</small>
                </div>
              )}
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">Banque d'images</h5>
              <form onSubmit={handleImageUpload} className="mb-3">
                <input
                  type="text"
                  placeholder="Nom..."
                  className="form-control form-control-sm mb-1"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                  required
                />
                <input
                  type="file"
                  className="form-control form-control-sm mb-1"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  required
                />
                <button type="submit" className="btn btn-success btn-sm w-100">
                  Uploader
                </button>
              </form>
              <hr />
              <div
                className="row g-2"
                style={{ maxHeight: "600px", overflowY: "auto" }}
              >
                {images
                  .filter((img) => img[":url"])
                  .map((img) => (
                    <div key={img[":id"]} className="col-6">
                      <div className="card h-100 border p-1 shadow-none">
                        <img
                          src={`${API_BASE_URL}/uploads/highlight/${img[":url"]}`}
                          className="card-img-top rounded cursor-pointer"
                          style={{
                            height: "80px",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          onClick={() => insertImageInEditor(img[":url"])}
                        />
                        <div className="p-1">
                          <button
                            className="btn btn-link btn-sm p-0 text-decoration-none w-100 text-center"
                            style={{ fontSize: "0.7rem" }}
                            onClick={() => setCoverImage(img[":url"])}
                          >
                            📌 Couverture
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
