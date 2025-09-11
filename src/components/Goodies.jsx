import React from "react";
import Retour from "../assets/images/retour.png";
import Potter from "../assets/images/potter.png";
import Barbe from "../assets/images/barbe.png";
import Brod1 from "../assets/images/brod1.jpg";
import Brod2 from "../assets/images/brod2.jpg";
import Brod3 from "../assets/images/brod3.jpg";
import Brod4 from "../assets/images/brod4.jpg";
import Brod5 from "../assets/images/brod5.jpg";

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
          style={{ color: "red", textDecoration: "none" }}
        >
          Partenaires
        </a>
      </p>
      <div className="sousDivGoodies">
        <div className="divArtisteGoodies">
          <h3>Les cartes postales de Mutyn.e</h3>
          <p>
            Un style unique et les références cinématographiques qu'on aime
            beaucoup au Caméo, vous aimerez ces dessins aux traits marqués et
            aux couleurs franches. Elles sont au prix de 3,50€.
          </p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Retour}
              alt="une basket sur un skateboard"
            />
            <img
              className="imgArtiste"
              src={Potter}
              alt="Le professeur Macgonagal"
            />
            <img
              className="imgArtiste"
              src={Barbe}
              alt="Un homme avec une barbe naissante"
            />
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les broderies de Frida K.O.</h3>
          <p>
            Les broderies sont disponibles en magasin au prix de 30€ pour les
            petites et 40€ pour les grandes.
          </p>
          <div className="DivIllusArtiste">
            <img
              className="imgArtiste"
              src={Brod1}
              alt="une broche brodée de Mon Voisin Totoro"
            />
            <img
              className="imgArtiste"
              src={Brod2}
              alt="une broche brodée d'un clone de Star Wars"
            />
            <img
              className="imgArtiste"
              src={Brod3}
              alt="une broche brodée du Petit Prince"
            />
            <img
              className="imgArtiste"
              src={Brod4}
              alt="une broche brodée du chat de Kiki"
            />
            <img
              className="imgArtiste"
              src={Brod5}
              alt="une broche brodée de la maison de Frodon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goodies;
