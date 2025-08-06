import React from "react";
import WorkshopDataManagement from "../components/adminComponents/workshopDataManagement";

function WorkshopManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des ateliers</h1>
        <WorkshopDataManagement />
      </div>
    </div>
  );
}

export default WorkshopManagement;
