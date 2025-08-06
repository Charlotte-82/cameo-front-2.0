import React from "react";
import EventDataManagement from "../components/adminComponents/EventDataManagement";

function EventManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des événements</h1>
        <EventDataManagement />
      </div>
    </div>
  );
}

export default EventManagement;
