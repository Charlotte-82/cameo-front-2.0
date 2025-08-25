import React from "react";
import { useNavigate } from "react-router-dom";
import PastrySVG from "../components/imagesSVG/PastrySVG";
import ReservSVG from "../components/imagesSVG/ReservSVG";
import UserSVG from "../components/imagesSVG/userSVG";
import WorkshopSVG from "../components/imagesSVG/WorkshopSVG";
import EventSVG from "../components/imagesSVG/EventSVG";
import CakeSVG from "../components/imagesSVG/cakeSVG";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/admin");
  };

  return (
    <div className="dashboard">
      <button className="backButtonDash" onClick={handleLogout}>
        Déconnexion
      </button>
      <h1>Bienvenue Mathilde !</h1>
      <div className="divH2">
        <h2>TABLEAU DE BORD</h2>
      </div>
      <div className="dashboardGrid">
        <div className="weeklyPastryDiv">
          <a className="adminLink" href="/admin/dashboard/pastry">
            <h3>Gestion des Actualités</h3>
            <PastrySVG />
          </a>
        </div>
        <div className="workshopManagementDiv">
          <a className="adminLink" href="/admin/dashboard/workshop">
            <h3>Gestion des Ateliers</h3>
            <WorkshopSVG />
          </a>
        </div>
        <div className="eventManagementDiv">
          <a className="adminLink" href="/admin/dashboard/event">
            <h3>Gestion des Événements</h3>
            <EventSVG />
          </a>
        </div>
        <div className="userManagementDiv">
          <a className="adminLink" href="/admin/dashboard/user">
            <h3>Gestion des Utilisateurs</h3>
            <UserSVG />
          </a>
        </div>
        <div className="reservationManagementDiv">
          <a className="adminLink" href="/admin/dashboard/reservation">
            <h3>Gestion des Réservations</h3>
            <ReservSVG />
          </a>
        </div>
        <div className="cakeManagementDiv">
          <a className="adminLink" href="/admin/dashboard/carte">
            <h3>Gestion de la carte</h3>
            <CakeSVG />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
