import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LogoHeaderRouge from "../assets/images/logos/Logo baseline beige.png";
import Navigation from "./Navigation";
import AuthModal from "./AuthModal";
// import Chihiro from "../assets/images/Ghibli/chihiro.gif";
// import Totoro from "../assets/images/Ghibli/totoro2.gif";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { client, logout } = useAuth();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const onLoginSuccess = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const status = searchParams.get("status");

    if (status === "verified") {
      setIsModalOpen(true);

      alert(
        "Compte activé avec succès ! Vous pouvez maintenant vous connecter.",
      );

      setSearchParams({}, { replace: true });
    } else if (status === "error") {
      alert("Le lien d'activation est invalide ou a déjà été utilisé.");
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="header">
      {/* <div className="ghibli-personnages">
        <img src={Chihiro} alt="Chihiro" className="chihiro"></img>
        <img src={Totoro} alt="Totoro" className="totoro"></img>
      </div> */}
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
        {client ? (
          <div className="bienvenue">
            <span>Bonjour {client.client_firstname} !</span>
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
