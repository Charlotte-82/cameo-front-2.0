import React from "react";
import BlogEditor from "../components/adminComponents/TextEditor.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BlogCompoManagement() {
  const handleSave = async ({ title, author, content }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/article`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, content }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la sauvegarde");
      }

      const result = await response.json();
      console.log("Article sauvegardé :", result);
      alert("Article publié avec succès !");
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la publication");
    }
  };

  return (
    <div>
      <BlogEditor onSave={handleSave} />
    </div>
  );
}

export default BlogCompoManagement;
