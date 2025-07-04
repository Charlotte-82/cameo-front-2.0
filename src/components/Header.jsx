import React from "react";
import LogoHeaderRouge from "../assets/images/logos/Logo baseline beige.png";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header">
      <div className="iconI">
        <a
          href="https://www.instagram.com/lecameo.17?fbclid=IwY2xjawLCaUhleHRuA2FlbQIxMABicmlkETE2ZmRad0dnZ285dHRzemtCAR6Z77uwzjzeNdZ4W4t9YOwIbWbvXLZiqyyNEuzDtk-aGLEjFRCosUJlC8Z39Q_aem_e0N8YyCXs1839mt5vmQejg"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <div className="iconU">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="iconFB">
        <a
          href="https://www.facebook.com/p/Le-Cam%C3%A9o-61556540673702/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
      </div>

      <div className="logo">
        <a href="/">
          <img
            className="logoHeader"
            src={LogoHeaderRouge}
            alt="logo du salon de thé Le Caméo"
          />
        </a>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
