import React from "react";
import CakeManagement from "../components/adminComponents/CakeManagement";
import BoissonsChaudesManagement from "../components/adminComponents/BoissonsChaudesManagement";
import BoissonsFroidesManagement from "../components/adminComponents/BoissonsFroidesManagement";
import GlacesManagement from "../components/adminComponents/GlacesManagement";
import TeaManagement from "../components/adminComponents/TeaDataManagement";
import MenuCompoManagement from "../components/adminComponents/MenuCompoManagement";
import FullCakeManagement from "../components/adminComponents/FullCakesManagement";

function MenuManagement() {
  return (
    <div className="menuManagement">
      <a href="/admin/dashboard">
        <button className="backButtonDash">Retour au Tableau de Bord</button>
      </a>
      <h1>Gestion de la carte</h1>
      <MenuCompoManagement />
      <hr></hr>
      <CakeManagement />
      <hr></hr>
      <FullCakeManagement />
      <hr></hr>
      <TeaManagement />
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
