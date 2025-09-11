import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useAuth } from "../contexts/AuthContext";

function AuthModal({ onClose, onLoginSuccess }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cakes, setCakes] = useState([]);
  const { login } = useAuth();
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    tel: "",
    newsletter: "0",
    id_cake: "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const [fullRes, slicedRes] = await Promise.all([
          fetch(`${API_BASE_URL}/fullcakes`),
          fetch(`${API_BASE_URL}/cakes`),
        ]);

        const [fullCakes, slicedCakes] = await Promise.all([
          fullRes.json(),
          slicedRes.json(),
        ]);

        const combinedCakes = [
          ...fullCakes.map((c) => ({
            ...c,
            id_cake_unique: `full-${c.id}`,
            type: "full",
          })),
          ...slicedCakes.map((c) => ({
            ...c,
            id_cake_unique: `sliced-${c.id_cake}`,
            type: "sliced",
          })),
        ];

        setCakes(combinedCakes);
      } catch (error) {
        console.error("Erreur lors du chargement des gâteaux:", error);
      }
    };
    fetchCakes();
  }, [API_BASE_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    } catch (err) {
      console.error("Erreur de connexion:", err);
      alert("Impossible de se connecter. Veuillez vérifier vos identifiants.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const [cakeType, cakeId] = form.id_cake.split("-");

    const userData = {
      ...form,
      cake_id: cakeId,
      cake_type: cakeType,
      is_admin: "0",
    };

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error(`Erreur: ${response.statusText}`);

      await response.json();
      setForm({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        tel: "",
        newsletter: "0",
        id_cake: "",
      });
      onClose();
      alert("Enregistrement réussi !");
    } catch (error) {
      console.error(error);
      alert(`Échec de l'enregistrement: ${error.message}`);
    }
  };

  const modalContent = (
    <div className="modal-backdrop">
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {isLoginMode ? "Connexion" : "S'enregistrer"}
              </h3>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {isLoginMode ? (
                <div className="auth-form login-form">
                  <form onSubmit={handleLoginSubmit} className="adminForm4">
                    <label>Email:</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <br />
                    <label>Mot de passe:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="mot de passe"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <br />
                    <button type="submit">Se connecter</button>
                  </form>
                  <p className="toggle-form-link">
                    Pas encore de compte ?{" "}
                    <span onClick={() => setIsLoginMode(false)}>
                      S'enregistrer
                    </span>
                  </p>
                </div>
              ) : (
                <div className="auth-form register-form">
                  <h3>S'enregistrer</h3>
                  <form onSubmit={handleRegisterSubmit} className="adminForm4">
                    <label>Nom</label>
                    <input
                      name="lastname"
                      placeholder="Nom"
                      value={form.lastname}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label>Prénom</label>
                    <input
                      name="firstname"
                      placeholder="Prénom"
                      value={form.firstname}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label>Mot de passe</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      name="tel"
                      placeholder="Téléphone"
                      value={form.tel}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label>S'inscrire à la newsletter ?</label>
                    <div className="inputRadioRegister">
                      <input
                        name="newsletter"
                        type="radio"
                        value="1"
                        checked={form.newsletter === "1"}
                        onChange={handleChange}
                        required
                      />{" "}
                      <label className="labelRadioNews">oui</label>
                      <input
                        name="newsletter"
                        type="radio"
                        value="0"
                        checked={form.newsletter === "0"}
                        onChange={handleChange}
                        required
                      />{" "}
                      <label className="labelRadioNews">non</label>
                    </div>
                    <br />
                    <label>Gâteau préféré</label>
                    <select
                      name="id_cake"
                      value={form.id_cake}
                      onChange={handleChange}
                      required
                    >
                      <option value="">--Choisissez un gâteau préféré--</option>
                      {cakes.map((cake) => (
                        <option
                          key={cake.id_cake_unique}
                          value={cake.id_cake_unique}
                        >
                          {cake.name} (
                          {cake.type === "full" ? "Entier" : "À la part"})
                        </option>
                      ))}
                    </select>

                    <br />
                    <button type="submit">S'enregistrer</button>
                  </form>
                  <p className="toggle-form-link">
                    Déjà un compte ?{" "}
                    <span onClick={() => setIsLoginMode(true)}>
                      Se connecter
                    </span>
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a
                      href="/politique"
                      target="_blank"
                      style={{
                        fontSize: "xx-small",
                        textAlign: "center",
                        color: "#b21a00",
                      }}
                    >
                      Politique de Confidentialité
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

export default AuthModal;
