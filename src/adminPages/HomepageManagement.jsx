import React from "react";

function HomepageManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des Actualités</h1>
        <h2>Activité mise en avant</h2>
        <h2>Pâtisserie de la semaine</h2>
      </div>
    </div>
  );
}

export default HomepageManagement;
