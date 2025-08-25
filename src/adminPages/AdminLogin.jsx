import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${API_BASE_URL}/middlewares/adminLogin.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lastname, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.jwt);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Erreur de connexion.");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="adminLogin">
      <h1>Accès à la cuisine</h1>
      <h2>Réservé au personnel habilité</h2>
      <div className="adminFormDiv">
        <form onSubmit={handleSubmit} className="adminForm">
          <fieldset>
            <legend>Connexion</legend>
            <label>Nom de Famille</label>
            <br />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <br />
            <br />
            <label>Mot de passe</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <button type="submit">Se connecter</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
