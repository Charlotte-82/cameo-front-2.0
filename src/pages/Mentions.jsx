import React from "react";

function Mentions() {
  return (
    <div className="page">
      <div className="sousTitre">
        <h1>Mentions Légales</h1>
      </div>
      <div className="paraDiv">
        <p className="paraMentions">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site{" "}
          <strong>
            <a href="/" target="_blank">
              lecameo17.fr
            </a>
          </strong>{" "}
          l'identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi.
        </p>
      </div>
      <div className="sousTitre">
        <h2>Édition du site</h2>
      </div>
      <div className="paraDiv">
        <p className="paraMentions">
          Le présent site, accessible à l’URL{" "}
          <strong>
            <a href="/" target="_blank">
              https://www.lecameo17.fr
            </a>
          </strong>
          , est édité par : LE CAMÉO situé au 36 Avenue de La Fayette 17300
          Rochefort,{" "}
          <strong>
            <a href="mailto:lecameo17@gmail.com" style={{ color: "#b21a00" }}>
              lecameo17@gmail.com
            </a>
          </strong>
          , Numéro SIRET [98086689100016].
        </p>
      </div>
      <div className="sousTitre">
        <h2>Hébergement</h2>
      </div>
      <div className="paraDiv">
        <p className="paraMentions">
          Le Site est hébergé par : <strong>O2Switch</strong>
          <br></br>Chemin des Pardiaux,<br></br>63000 Clermont-Ferrand,<br></br>
          <a href="/" target="_blank">
            https://www.o2switch.fr/
          </a>
          ,<br></br>04 44 44 60 40.
        </p>{" "}
      </div>
      <div className="sousTitre">
        <h2>Directeur de la publication</h2>
      </div>
      <div
        className="paraDiv"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <p className="paraMentions">
          Le Directeur de la publication du Site est Mathilde Scotto.
        </p>

        <p>
          NOUS CONTACTER
          <ul>
            <li>
              {" "}
              Par e-mail :{" "}
              <a href="mailto:lecameo17@gmail.com" style={{ color: "#b21a00" }}>
                lecameo17@gmail.com
              </a>
            </li>
            <li>Par courrier : 36 Avenue Lafayette 17300 Rochefort</li>
          </ul>
        </p>
        <p className="paraMentions">
          Le site a été développé et déployé par Charlotte Régis [©Plume&Pixel].
        </p>
      </div>

      <div className="sousTitre">
        <h2>Données personnelles</h2>
      </div>
      <div className="paraDiv">
        <p className="paraMentions">
          Le traitement de vos données personnelles est régi par notre{" "}
          <a href="/politique" target="_blank">
            Politique de Confidentialité
          </a>
          , conformément au Règlement Général sur la Protection des Données
          2016/679 du 27 avril 2016 (« RGPD »).
        </p>
      </div>
      <div className="sousTitre">
        <h2>Loi applicable et attribution de juridiction</h2>
      </div>
      <div className="paraDiv">
        <p className="paraMentions">
          Tout litige en relation avec l'utilisation du site{" "}
          <strong>
            <a href="/" target="_blank">
              https://www.lecameo17.fr
            </a>
          </strong>{" "}
          est soumis au droit français. En dehors des cas où la loi ne le permet
          pas, il est fait attribution exclusive de juridiction aux tribunaux
          compétents de Charente-Maritime.
        </p>
      </div>
    </div>
  );
}

export default Mentions;
