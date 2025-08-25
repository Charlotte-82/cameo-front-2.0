import React from "react";
import LogoRondBeige from "../assets/images/logos/Logo rond beige.png";

function Footer() {
  return (
    <div className="footer">
      <div className="row px-4">
        <div className="col footerCol1 text-center">
          <p className="pFooter">
            Suivez l'actualité du salon sur les réseaux !
          </p>
          <a
            href="https://www.instagram.com/lecameo.17?fbclid=IwY2xjawLCaUhleHRuA2FlbQIxMABicmlkETE2ZmRad0dnZ285dHRzemtCAR6Z77uwzjzeNdZ4W4t9YOwIbWbvXLZiqyyNEuzDtk-aGLEjFRCosUJlC8Z39Q_aem_e0N8YyCXs1839mt5vmQejg"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/p/Le-Cam%C3%A9o-61556540673702/"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div className="col footerCol2">
          <p className="pFooter">Le Caméo</p>
          <p className="pFooter">36 avenue La Fayette</p>
          <p className="pFooter">17300 Rochefort</p>
          <p className="pFooter">lecameo17@gmail.com</p>
        </div>
        <div className="col footerCol3">
          <img
            className="logoFooter"
            src={LogoRondBeige}
            alt="Logo du salon de thé le Caméo"
          />
        </div>
        <div className="col footerCol4">
          <p className="pFooter">
            <a href="/agenda">Programme</a>
          </p>
          <p className="pFooter">
            <a href="/boutique">Boutique</a>
          </p>
          <p className="pFooter">
            <a href="/blog">Blog</a>
          </p>
          <p className="pFooter">
            <a href="/partenaires">Partenaires</a>
          </p>
          <p className="pFooter">
            <a href="/mentions">Mentions légales</a>
          </p>
        </div>
        <div className="col footerCol5">
          <p className="pFooter">
            Créez un compte et abonnez-vous à la newsletter pour profiter des
            bons plans !
          </p>
        </div>
      </div>
      <p className="copyright">© Le Caméo - Rochefort - 2025</p>
    </div>
  );
}

export default Footer;
