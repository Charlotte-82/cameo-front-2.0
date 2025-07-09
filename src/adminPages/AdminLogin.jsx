import React from "react";

function AdminLogin() {
  return (
    <div className="adminLogin">
      <h1>Accès à la cuisine</h1>
      <h2>Réservé au personnel habilité</h2>
      <div className="adminFormDiv">
        <form action="#" method="POST" className="adminForm">
          <fieldset>
            <legend>Connexion</legend>
            <label>Identifiant</label>
            <br></br>
            <input />
            <br></br>
            <br></br>
            <label>Mot de passe</label>
            <br></br>
            <input />
            <br></br>
            <br></br>
            <button type="submit">Se connecter</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
