import React from "react";
import PastryDataManagement from "../components/adminComponents/PastryDataManagement";
import MediaPastryManagement from "../components/adminComponents/MediaPastryManagement";
import NewsDataManagement from "../components/adminComponents/NewsDataManagement";

function UserManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des Actualités</h1>
        <PastryDataManagement />
        <MediaPastryManagement />
        <NewsDataManagement />
      </div>
    </div>
  );
}

export default UserManagement;
