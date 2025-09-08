import React from "react";
import MenuComponent from "../components/MenuComponent";
import ResaCameo from "../components/ResaCameo";
import ContactComponent from "../components/ContactComponent";
import CoutureCameo from "../components/CoutureCameo";
import CommandeGateau from "../components/CommandeGateau";
import Goodies from "../components/Goodies";

function Shop() {
  return (
    <div className="page">
      <h1 className="shopTitle">La Boutique du Caméo</h1>
      <MenuComponent />
      <h2 className="shopTitle2">Les Services du Caméo</h2>
      <div className="gridServices">
        <div className="gridCaseCameo">
          <ResaCameo />
        </div>
        <div className="gridCaseCameo">
          <CoutureCameo />
        </div>
      </div>
      <div
        className="gridCaseCameo"
        style={{ margin: "2.5em", marginTop: "0.5em" }}
      >
        <CommandeGateau />
      </div>
      <div className="gridCaseCameo2">
        <ContactComponent />
      </div>
      <h2 className="shopTitle2">Les goodies</h2>
      <div
        className="gridCaseCameo"
        style={{ margin: "2.5em", marginTop: "0.5em" }}
      >
        <Goodies />
      </div>
    </div>
  );
}

export default Shop;
