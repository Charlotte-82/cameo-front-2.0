import React from "react";
import CakeManagement from "../components/adminComponents/CakeManagement";
import BoissonsChaudesManagement from "../components/adminComponents/BoissonsChaudesManagement";
import BoissonsFroidesManagement from "../components/adminComponents/BoissonsFroidesManagement";

function MenuManagement() {
  return (
    <div className="menuManagement">
      <h1>Gestion de la carte</h1>
      <CakeManagement />
      <hr></hr>
      <BoissonsChaudesManagement />
      <hr></hr>
      <BoissonsFroidesManagement />
    </div>
  );
}

export default MenuManagement;
