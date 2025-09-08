import React, { useState } from "react";

function ContactComponent() {
  const [status, setStatus] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nom: e.target.NomInput1.value,
      prenom: e.target.PrenomInput1.value,
      email: e.target.EmailInput1.value,
      message: e.target.exampleFormControlTextarea1.value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/send-mail.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Votre message a bien été envoyé !");
      } else {
        setStatus("Erreur : " + result.error);
      }
    } catch (err) {
      setStatus("Erreur d'envoi : " + err.message);
    }
  };

  return (
    <div className="ResaCameoDiv">
      <h3>Formulaire de contact</h3>
      <p>
        Quelque soient vos besoins ou vos envies, remplissez le formulaire
        ci-dessous pour nous soumettre votre projet. Il y sera apporté une
        réponse aussi vite que possible.
      </p>
      <form className="FormCommande" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="NomInput1" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            className="form-control"
            id="NomInput1"
            placeholder="Nom"
            required
          />

          <label htmlFor="PrenomInput1" className="form-label">
            Prénom :
          </label>
          <input
            type="text"
            className="form-control"
            id="PrenomInput1"
            placeholder="Prénom"
            required
          />

          <label htmlFor="EmailInput1" className="form-label">
            Adresse E-mail :
          </label>
          <input
            type="email"
            className="form-control"
            id="EmailInput1"
            placeholder="adresse@email.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Votre demande :
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkDefault"
            required
          />
          <label className="form-check-label" htmlFor="checkDefault">
            J'autorise le Caméo à me recontacter par mail ou par téléphone.
          </label>
        </div>

        <button type="submit" className="boutonCollection">
          Envoyer
        </button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default ContactComponent;
