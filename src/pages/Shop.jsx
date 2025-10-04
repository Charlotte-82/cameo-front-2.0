import React, { useState, useEffect } from "react";
import MenuComponent from "../components/MenuComponent";
import ResaCameo from "../components/ResaCameo";
import ContactComponent from "../components/ContactComponent";
import CoutureCameo from "../components/CoutureCameo";
import CommandeGateau from "../components/CommandeGateau";
import Goodies from "../components/Goodies";

function Shop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            zIndex: 5,
            bottom: "30px",
            right: "30px",
            padding: "12px 18px",
            borderRadius: "8px",
            background: "whitesmoke",
            color: "#6c1304",
            cursor: "pointer",
            border: "solid 2px #dd7300",
            fontWeight: "400",
            fontSize: "xx-large",
          }}
        >
          ↑
        </button>
      )}
      <hr className="NavigLigne2"></hr>
      <hr className="NavigLigne21"></hr>
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
