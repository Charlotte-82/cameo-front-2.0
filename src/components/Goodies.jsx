import React from "react";
import Retour from "../assets/images/retour.png";
import Brod3 from "../assets/images/brod3.jpg";
import Ghibli from "../assets/images/ghibli.png";
import Sticker from "../assets/images/sticker.png";
import Portecle from "../assets/images/portecle.png";

function Goodies() {
  return (
    <div className="ResaCameoDiv">
      <p>
        Retrouvez en magasin et en exclusivité, les oeuvres sublimes de
        créatrices de la région. Pour plus d'informations, n'hésitez pas à
        visiter notre page{" "}
        <a
          href="/partenaires"
          target="_blank"
          style={{
            color: "#b21a00",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Partenaires
        </a>
      </p>
      <div className="sousDivGoodies">
        <div className="divArtisteGoodies">
          <h3>Les porte-clés</h3>
          <p>4€</p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Portecle}
              alt="Le professeur Macgonagal"
            />
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les stickers de Mutyn.e</h3>
          <p>2€</p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Sticker}
              alt="Le professeur Macgonagal"
            />
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les cartes postales de Mutyn.e</h3>
          <p>3,50€</p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Retour}
              alt="Le professeur Macgonagal"
            />
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les illustrations de Frida K.O.</h3>
          <p>10€</p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Ghibli}
              alt="une broche brodée du Petit Prince"
            />
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les broderies de Frida K.O.</h3>
          <p>30€ / 40€</p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Brod3}
              alt="une broche brodée du Petit Prince"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goodies;
