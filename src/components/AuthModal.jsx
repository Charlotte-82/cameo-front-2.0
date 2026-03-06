import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useAuth } from "../contexts/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

function AuthModal({ onClose, onLoginSuccess }) {
  const [view, setView] = useState("login");
  const [products, setProducts] = useState([]);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    password: "",
    tel: "",
    newsletter: "0",
    product_id: "",
    captchaToken: "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/product`);
        const data = await res.json();
        const cakes = data.filter(
          (product) =>
            product.type === "gateau-entier" || product.type === "gateau-part",
        );
        setProducts(cakes);
      } catch (error) {
        console.error("Erreur chargement gâteaux:", error);
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
    setError("");

    try {
      await login(form.mail, form.password);
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    } catch (err) {
      const serverMessage = err.response?.data?.message || err.message;
      setError(serverMessage);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const cleanedPassword = form.password.trim();
    const cleanedMail = form.mail.trim().toLowerCase();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    // if (!passwordRegex.test(form.password)) {
    //   alert(
    //     "Sécurité : 12 caractères minimum, Majuscule, Minuscule, Chiffre et Caractère spécial requis.",
    //   );
    //   return;
    // }
    if (!passwordRegex.test(cleanedPassword)) {
      alert(
        "Sécurité : 12 caractères minimum, Majuscule, Minuscule, Chiffre et Caractère spécial requis (ex: @, $, !, #, .).",
      );
      return;
    }
    // console.log("Données envoyées au PHP :", JSON.stringify(form));

    const formDataToSend = {
      ...form,
      password: cleanedPassword,
      mail: cleanedMail,
    };
    try {
      const response = await fetch(`${API_BASE_URL}/client`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) throw new Error(`Erreur: ${response.statusText}`);

      setView("success-mail");
    } catch (error) {
      alert(`Échec de l'enregistrement: ${error.message}`);
    }
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_BASE_URL}/auth/request-password-reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: form.mail }),
      });
      alert("Si ce compte existe, un lien a été envoyé.");
      setView("login");
    } catch (err) {
      alert("Erreur lors de la demande.");
    }
  };

  const renderContent = () => {
    switch (view) {
      case "login":
        return (
          <div className="auth-form login-form">
            {error && (
              <div
                style={{
                  color: "#721c24",
                  backgroundColor: "#f8d7da",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "15px",
                  fontSize: "0.9em",
                  border: "1px solid #f5c6cb",
                }}
              >
                {error}
              </div>
            )}
            <form onSubmit={handleLoginSubmit} className="adminForm4">
              <label>Email:</label>
              <input
                type="email"
                name="mail"
                value={form.mail}
                onChange={handleChange}
                required
              />
              <label>Mot de passe:</label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                autoCapitalize="none"
                autoCorrect="off"
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  cursor: "pointer",
                }}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
              </span>
              <br></br>
              <button type="submit">Se connecter</button>
            </form>
            <p
              className="forgot-password-link"
              onClick={() => setView("forgot-password")}
              style={{ cursor: "pointer", color: "#b21a00", marginTop: "10px" }}
            >
              Mot de passe oublié ?
            </p>
            <p className="toggle-form-link">
              Pas encore de compte ?{" "}
              <span onClick={() => setView("register")}>S'enregistrer</span>
            </p>
          </div>
        );

      case "register":
        return (
          <div className="auth-form register-form">
            <form onSubmit={handleRegisterSubmit} className="adminForm4">
              <label>Nom</label>
              <input
                name="lastname"
                placeholder="Nom"
                onChange={handleChange}
                required
              />
              <br></br>
              <label>Prénom</label>
              <input
                name="firstname"
                placeholder="Prénom"
                onChange={handleChange}
                required
              />
              <br></br>
              <label>Email</label>
              <input
                type="email"
                name="mail"
                placeholder="Adresse Email"
                onChange={handleChange}
                required
              />
              <br></br>
              <label>Mot de passe</label>
              <label>
                <small>
                  12 caractères, 1 minuscule, 1 majuscule, 1 chiffre, 1
                  caractère spécial minimum
                </small>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  cursor: "pointer",
                }}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
                {/* Ou une icône Lucide-react / FontAwesome */}
              </span>
              <br></br>
              <label>Téléphone</label>
              <input type="tel" name="tel" onChange={handleChange} required />
              <br></br>

              <label>Je veux recevoir la newsletter ?</label>
              <div className="inputRadioRegister">
                <input
                  type="radio"
                  name="newsletter"
                  value="1"
                  onChange={handleChange}
                  style={{ marginRight: "0.2em" }}
                />{" "}
                Oui
                <input
                  type="radio"
                  name="newsletter"
                  value="0"
                  onChange={handleChange}
                  defaultChecked
                  style={{ marginRight: "0.2em", marginLeft: "0.5em" }}
                />{" "}
                Non
              </div>
              <br></br>

              <label>Gâteau préféré</label>
              <select name="product_id" onChange={handleChange} required>
                <option value="">--Choisissez--</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: "15px" }}>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(val) => setForm({ ...form, captchaToken: val })}
                />
              </div>

              <button
                type="submit"
                disabled={!form.captchaToken}
                style={{ marginTop: "15px" }}
              >
                S'enregistrer
              </button>
            </form>
            <p className="toggle-form-link">
              Déjà un compte ?{" "}
              <span onClick={() => setView("login")}>Se connecter</span>
            </p>
          </div>
        );

      case "forgot-password":
        return (
          <div className="auth-form">
            <h3>Réinitialiser</h3>
            <p>Saisissez votre email pour recevoir un lien.</p>
            <form onSubmit={handleRequestReset} className="adminForm4">
              <input
                type="email"
                name="mail"
                placeholder="Votre email"
                onChange={handleChange}
                required
              />
              <button type="submit">Envoyer le lien</button>
            </form>
            <p
              className="toggle-form-link"
              onClick={() => setView("login")}
              style={{ cursor: "pointer" }}
            >
              Retour à la connexion
            </p>
          </div>
        );

      case "success-mail":
        return (
          <div className="auth-form" style={{ textAlign: "center" }}>
            <h3 style={{ color: "#b21a00" }}>Vérifiez vos emails ! 📧</h3>
            <p>
              Un lien d'activation vous a été envoyé. Merci de cliquer dessus
              pour valider votre compte.
            </p>
            <button onClick={onClose}>Fermer</button>
          </div>
        );

      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                {view === "login" && "Connexion"}
                {view === "register" && "Enregistrement"}
                {view === "forgot-password" && "Récupération"}
              </h3>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {renderContent()}
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <a
                  href="/politique"
                  target="_blank"
                  style={{ fontSize: "xx-small", color: "#b21a00" }}
                >
                  Politique de Confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default AuthModal;
