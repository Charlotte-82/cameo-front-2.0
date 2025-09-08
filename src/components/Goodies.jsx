import React from "react";
import Retour from "../assets/images/retour.png";
import Potter from "../assets/images/potter.png";

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
            aux couleurs franches.
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
          </div>
        </div>
        <div className="divArtisteGoodies">
          <h3>Les broderies de Frida K.O.</h3>
        </div>
      </div>
    </div>
  );
}

export default Goodies;
