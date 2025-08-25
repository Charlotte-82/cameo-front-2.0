import React from "react";
import CakeManagement from "../components/adminComponents/CakeManagement";
import BoissonsChaudesManagement from "../components/adminComponents/BoissonsChaudesManagement";
import BoissonsFroidesManagement from "../components/adminComponents/BoissonsFroidesManagement";
import GlacesManagement from "../components/adminComponents/GlacesManagement";

function MenuManagement() {
  return (
    <div className="menuManagement">
      <a href="/admin/dashboard">
        <button className="backButtonDash">Retour au Tableau de Bord</button>
      </a>
      <h1>Gestion de la carte</h1>
      <CakeManagement />
      <hr></hr>
      <BoissonsChaudesManagement />
      <hr></hr>
      <BoissonsFroidesManagement />
      <hr></hr>
      <GlacesManagement />
    </div>
  );
}

export default MenuManagement;
