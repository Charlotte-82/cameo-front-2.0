import React, { useState } from "react";
import LogoHeaderRouge from "../assets/images/logos/Logo baseline beige.png";
import Navigation from "./Navigation";
import AuthModal from "./AuthModal";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const onLoginSuccess = () => {
    setIsModalOpen(false);
  };

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
        {user ? (
          <div className="bienvenue">
            <span>Bonjour {user.firstname} !</span>
            <button>
              <a href="/profile">Ton compte</a>
            </button>
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        ) : (
          <i className="bi bi-person-circle" onClick={toggleModal}></i>
        )}
        <div className="iconE">
          <a href="mailto:lecameo17@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
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
      <hr className="NavigLigne"></hr>
      {isModalOpen && (
        <AuthModal onClose={toggleModal} onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
}

export default Header;
