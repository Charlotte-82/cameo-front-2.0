import React from "react";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <p className="itemMenu">
          <a href="/agenda">Programme</a>
        </p>
        <p className="itemMenu">
          <a href="/404">Boutique</a>
        </p>
        <p className="itemMenu">
          <a href="/404">Blog</a>
        </p>
        <p className="itemMenu">
          <a href="/404">Partenaires</a>
        </p>
      </div>
    </nav>
  );
}

export default Menu;
