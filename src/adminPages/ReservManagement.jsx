import React from "react";
import ReservDataManagement from "../components/adminComponents/ReservDataManagement";

function ReservManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <a href="/admin/dashboard">
          <button className="backButtonDash">Retour au Tableau de Bord</button>
        </a>
        <h1>Gestion des réservations</h1>
        <ReservDataManagement />
      </div>
    </div>
  );
}

export default ReservManagement;
