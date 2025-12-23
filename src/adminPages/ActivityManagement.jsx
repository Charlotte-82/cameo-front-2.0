import React from "react";
import ActivityDataManagement from "../components/adminComponents/ActivityDataManagement";

function ActivityManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des ateliers</h1>
        <ActivityDataManagement />
      </div>
    </div>
  );
}

export default ActivityManagement;
