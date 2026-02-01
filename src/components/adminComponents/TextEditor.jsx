import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function BlogEditor({ onSave }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !author || !content) {
      alert("Tous les champs sont requis !");
      return;
    }
    onSave({ title, author, content });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Créer un article</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Titre de l'article"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Auteur</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nom de l'auteur"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Contenu</label>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "blockQuote",
              "numberedList",
              "bulletedList",
              "|",
              "insertTable",
              "uploadImage",
              "mediaEmbed",
              "|",
              "undo",
              "redo",
            ],
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Publier l'article
      </button>
    </div>
  );
}
