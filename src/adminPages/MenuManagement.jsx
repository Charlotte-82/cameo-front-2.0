import React from "react";
import ProductManagement from "../components/adminComponents/ProductManagement";
import MenuCompoManagement from "../components/adminComponents/MenuCompoManagement";

function MenuManagement() {
  return (
    <div className="menuManagement">
      <a href="/admin/dashboard">
        <button className="backButtonDash">Retour au Tableau de Bord</button>
      </a>
      <h1>Gestion de la carte</h1>
      <ProductManagement />
      <hr></hr>
      <MenuCompoManagement />
    </div>
  );
}

export default MenuManagement;
