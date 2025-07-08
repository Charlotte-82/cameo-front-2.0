import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Bienvenue Mathilde !</h1>
      <div className="divH2">
        <h2>TABLEAU DE BORD</h2>
      </div>
      <div className="dashboardGrid">
        <div className="weeklyPastryDiv">
          <h3>Gestion des Pâtisseries de la Semaine</h3>
          <div className="imageMenuDashboard"></div>
        </div>
        <div className="workshopManagementDiv">
          <h3>Gestion des Ateliers</h3>
          <div className="imageMenuDashboard"></div>
        </div>
        <div className="eventManagementDiv">
          <h3>Gestion des Événements</h3>
          <div className="imageMenuDashboard"></div>
        </div>
        <div className="userManagementDiv">
          <h3>Gestion des Utilisateurs</h3>
          <div className="imageMenuDashboard"></div>
        </div>
        <div className="reservationManagementDiv">
          <h3>Gestion des Réservations</h3>
          <div className="imageMenuDashboard"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
