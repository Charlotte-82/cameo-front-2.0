import React from "react";
import CakeManagement from "../components/adminComponents/CakeManagement";
import BoissonsChaudesManagement from "../components/adminComponents/BoissonsChaudesManagement";

function MenuManagement() {
  return (
    <div className="menuManagement">
      <h1>Gestion de la carte</h1>
      <CakeManagement />
      <hr></hr>
      <BoissonsChaudesManagement />
    </div>
  );
}

export default MenuManagement;
