import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [passwords, setPasswords] = useState({ new: "", confirm: "" });
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    if (!token) {
      alert("Accès refusé : Aucun jeton de réinitialisation trouvé.");
      navigate("/");
    } else {
      setIsValidating(false);
    }
  }, [token, navigate]);

  const handleReset = async (e) => {
    // e.preventDefault();

    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

    // if (passwords.new !== passwords.confirm) {
    //   alert("Les mots de passe ne correspondent pas.");
    //   return;
    // }

    // if (!passwordRegex.test(passwords.new)) {
    //   alert(
    //     "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
    //   );
    //   return;
    // }

    e.preventDefault();
    const newPass = passwords.new.trim();
    const confirmPass = passwords.confirm.trim();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,#\-/_]).{12,}$/;

    if (newPass !== confirmPass) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!passwordRegex.test(newPass)) {
      alert(
        "Le mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (ex: @, $, !, %, *, ?, &, ., #).",
      );
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password: newPass }),
        },
      );

      if (response.ok) {
        alert("Mot de passe mis à jour !");
        navigate("/");
      } else {
        alert("Le lien est invalide ou a expiré.");
      }
    } catch (err) {
      alert("Une erreur est survenue lors de la connexion au serveur.");
    }
  };

  if (isValidating) return <p>Vérification du lien...</p>;

  return (
    <div
      className="reset-container"
      style={{
        maxWidth: "100%",
        padding: "2em",
        backgroundColor: "#ffdfb7",
      }}
    >
      <h2 style={{ color: "#b21a00" }}>Nouveau mot de passe</h2>
      <p style={{ fontSize: "0.9em", textAlign: "center", padding: "2em" }}>
        Sécurité : Votre mot de passe doit comporter au moins 12 caractères, 1
        majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.
      </p>

      <form onSubmit={handleReset} className="adminForm4">
        <div className="form-group">
          <input
            style={{ width: "15em" }}
            type={showPassword ? "text" : "password"}
            placeholder="Nouveau mot de passe"
            className="form-control"
            autoCapitalize="none"
            autoCorrect="off"
            onChange={(e) =>
              setPasswords({ ...passwords, new: e.target.value })
            }
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
        </div>
        <div className="form-group" style={{ marginTop: "1em" }}>
          <input
            style={{ width: "15em" }}
            type={showPassword ? "text" : "password"}
            placeholder="Confirmez le mot de passe"
            className="form-control"
            autoCapitalize="none"
            autoCorrect="off"
            onChange={(e) =>
              setPasswords({ ...passwords, confirm: e.target.value })
            }
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
        </div>
        <button
          type="submit"
          className="btn-confirm"
          style={{ marginTop: "2em", width: "50%" }}
        >
          Enregistrer le nouveau mot de passe
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
