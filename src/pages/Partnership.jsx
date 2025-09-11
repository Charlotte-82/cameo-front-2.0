import React from "react";
import Tea from "../assets/images/teamagine.jpeg";
import Vache from "../assets/images/Logo_La_Vache_Charentaise_web.png";
import Mafiore from "../assets/images/mafiore.jpg";
import Frida from "../assets/images/frida.png";
import House from "../assets/images/house.png";
import Mutyne from "../assets/images/logomutyne.png";
import Meo from "../assets/images/logo_meo_blanc.png";

function Partnership() {
  return (
    <div className="page">
      <h1 className="partnerH1">La grande famille du Caméo</h1>
      <div className="partnerDiv1">
        <h2>Les Fournisseurs</h2>
        <hr></hr>
        <div className="fourniDiv">
          <div className="teaDiv">
            <a
              className="partnerLink"
              target="_blank"
              href="https://tea-magine.com/"
            >
              <h3>TEA'MAGINE</h3>
            </a>
            <div>
              <p className="fourniParaph">
                Tea'Magine est une sommellerie française de thés et d'infusions
                originaux et naturels. Les produits sont faits à partir
                d'ingrédients issus de la nature, bio, sans polluant ni
                pesticides. Ces créations toulousaines sont uniques et faites à
                la main.
              </p>
              <p className="fourniParaph">
                Les thés spécialement créés pour le Caméo sont disponibles à
                l'achat au café !
              </p>
              <div className="tImageDiv">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://tea-magine.com/"
                >
                  <img src={Tea} alt="Logo de Tea'Magine" className="tImage" />
                </a>
              </div>
            </div>
          </div>
          <div className="teaDiv">
            <a
              className="partnerLink"
              target="_blank"
              href="https://tea-magine.com/"
            >
              <h3>MÉO</h3>
            </a>
            <div>
              <p className="fourniParaph">
                Torréfacteur depuis 1928; Méo vous fait profiter de son
                savoir-faire artisanal et de produits d'exception. Toutes les
                étapes de la confection du café sont soigneusement réalisées.
              </p>
              <p className="fourniParaph">
                Les cafés Méo sont garantis issus d'une agriculture biologique
                et adhèrent à la SCAA qui lutte pour les droits de l'homme et
                contre la corruption.
              </p>
              <div className="tImageDiv">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://tea-magine.com/"
                >
                  <img src={Meo} alt="Logo de Tea'Magine" className="tImage" />
                </a>
              </div>
            </div>
          </div>
          <div className="teaDivVache">
            <a
              className="partnerLink"
              target="_blank"
              href="https://www.lavachecharentaise.fr/"
            >
              <h3>LA VACHE CHARENTAISE</h3>
            </a>
            <div className="VacheDiv">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="fourniParaph">
                  Situé en Charente-Maritime, La Vache Charentaise propose toute
                  une gamme de produits à base de laits issus de son propre
                  laboratoire de fabrication. Impliquée dans le bien-être de
                  tous et soucieuse de la qualité de ses produits, La Vache
                  Charentaise s'est engagée aux côtés de l'association
                  Bleu-Blanc-Coeur.
                </p>
                <p className="fourniParaph">
                  Retrouvez la crème glacée de la Vache Charentaise au Caméo
                  durant l'été dans de délicieux milkshakes !
                </p>
              </div>
              <div className="tImageDiv">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://www.lavachecharentaise.fr/"
                >
                  <img
                    src={Vache}
                    alt="Logo de La Vache Charentaise"
                    className="tImage"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerDiv2">
        <h2>Les Artistes</h2>
        <hr></hr>
        <div className="fourniDiv">
          <div className="teaDiv2">
            <a
              className="partnerLink"
              target="_blank"
              href="https://www.mafiore.fr/"
            >
              <h3>MAFIORE</h3>
            </a>
            <div>
              <p className="fourniParaph2">
                "J’écris, souvent de la poésie mais pas seulement et slame
                régulièrement, je fabrique des badges, des cartes postales et
                d’autres objets poétiques, découpe et colle des mots et des
                images pour raconter le monde. J’anime des ateliers d’écriture
                pour vous guider sur les chemins de la créativité, de
                l’imagination et du plaisir d’écrire, en compagnie de textes et
                de livres classiques et contemporains que je souhaite partager."
              </p>
              <p className="fourniParaph2">
                Retrouvez Mafiore au Caméo lors des ateliers d'écriture.
                Surveillez le programme !
              </p>
              <div className="tImageDiv2">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://www.mafiore.fr/"
                >
                  <img src={Mafiore} alt="Logo de Mafiore" className="tImage" />
                </a>
              </div>
            </div>
          </div>
          <div className="teaDiv2">
            <a
              className="partnerLink"
              target="_blank"
              href="https://www.instagram.com/frida_k.o/"
            >
              <h3>FRIDA K.O.</h3>
            </a>
            <div>
              <p className="fourniParaph2">
                Artiste, créatrice, illustratrice et chanteuse basée sur La
                Rochelle, Frida K.O. organise des ateliers uniques pour libérer
                votre créativité. Inspirée par la Pop Culture, elle peut
                s'inspirer tout autant des studios Ghibli que de Star Wars !
                Vous ne voudrez pas manquer ça !
              </p>
              <p className="fourniParaph2">
                Certaines des réalisation unique de Frida K.O. sont disponibles
                à la vente au Caméo !
              </p>
              <div className="tImageDiv2">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://www.instagram.com/frida_k.o/"
                >
                  <img
                    src={Frida}
                    alt="Logo de Frida K.O."
                    className="tImage"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="teaDivMut">
            <a
              className="partnerLink"
              target="_blank"
              href="https://www.instagram.com/mutyn.e/"
            >
              <h3>MUTYN.E</h3>
            </a>
            <div className="VacheDiv">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="fourniParaph2">
                  Mutyn.e aime le cinéma et s'en inspire pour créer des oeuvres
                  authentiques et sans détour. Les traits francs et le couleurs
                  vives animent ces images d'une intention sincère.
                </p>
                <p className="fourniParaph2">
                  À offrir aux autres ou à soi, n'hésitez pas à passer au café
                  pour acquérir une de ces magnifiques cartes.
                </p>
              </div>
              <div className="tImageDiv2">
                <a
                  className="partnerLink"
                  target="_blank"
                  href="https://www.instagram.com/mutyn.e/"
                >
                  <img src={Mutyne} alt="Logo de Mutyne" className="tImage" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerDiv1">
        <h2>Les Associations</h2>
        <hr></hr>
        <div className="assoDiv">
          <div className="tImageDiv3">
            <a
              className="partnerLink"
              target="_blank"
              href="https://lahouse17.wordpress.com/"
            >
              {" "}
              <img src={House} alt="Logo de la House" className="tImage" />
            </a>
          </div>
          <div>
            <a
              className="partnerLink"
              target="_blank"
              href="https://lahouse17.wordpress.com/"
            >
              <h3 style={{ textAlign: "left" }}>LA HOUSE </h3>
            </a>
            <p className="fourniParaph">
              Association LGBTQIA+ Rochelaise, La House 17 organise des
              événements festifs pour la communauté et ses allié·e·s. Elle est
              le lieu de création des Safe Slace où chacun·e peut venir
              s'exprimer librement.
            </p>
            <p className="fourniParaph">
              {" "}
              La House 17, c'est plus qu'une association, c'est une famille !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
