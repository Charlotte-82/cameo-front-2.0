import React from "react";
import PastryDataManagement from "../components/adminComponents/PastryDataManagement";
import MediaPastryManagement from "../components/adminComponents/MediaPastryManagement";

function UserManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion de la Pâtisserie de la Semaine</h1>
        <PastryDataManagement />
        <MediaPastryManagement />
      </div>
    </div>
  );
}

export default UserManagement;
