import React, { useEffect, useState } from "react";
import Interieur1 from "../assets/images/Lieu/le-cameo-int4.jpg";
import Interieur2 from "../assets/images/Lieu/le-cameo-pat.jpg";
import ImageArticle1 from "../assets/images/Lieu/le-cameo-littoral.jpg";
import ImageArticle2 from "../assets/images/Lieu/le-cameo-sudouest.jpg";
import Accordion from "../components/homeAccordionMobile.jsx";

function Concept() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "12px 18px",
            borderRadius: "10px",
            background: "whitesmoke",
            color: "#6c1304",
            cursor: "pointer",
            border: "solid 2px #dd7300",
            fontWeight: "400",
            fontSize: "xx-large",
            transition: "opacity 0.3s",
          }}
        >
          ↑
        </button>
      )}
      <hr className="NavigLigne2"></hr>
      <hr className="NavigLigne21"></hr>
      <section className="bande3">
        <h1>Le Caméo, c'est quoi ?</h1>
        <div className="cadreDef1">
          <div className="texteDef">
            <h3>La Création du Caméo</h3>
            <p className="sousTitre">Une histoire de passion</p>
            <p className="texteParaph">
              Au départ, le projet de Mathilde a été de créer un endroit qui lui
              ressemble à tous les niveaux et où elle pourrait exposer sa
              créativité et celles des autres et assouvir son besoin de partage.
            </p>
            <p className="texteParaph">
              La passion de Mathilde pour le cinéma a toujours été importante et
              elle n’a pas cessé de réfléchir à un rapprochement possible entre
              cette dernière et son métier.
            </p>
            <p className="texteParaph">
              Depuis maintenant quelques années, des livres de cuisine
              thématique voient le jour et notamment autour du cinéma. L’attrait
              est véritablement présent et rapproche plusieurs générations. Lui
              vient l’idée d’un lieu pour rassembler ces cinéphiles de tout âge.
            </p>
          </div>
          <div className="photoDef1">
            <img
              className="photoCadre1"
              src={Interieur1}
              alt="intérieur du salon de thé avec une rangée de siège comme au cinéma"
            />
          </div>
        </div>
        <div className="cadreDef1">
          <div className="photoDef1">
            <img
              className="photoCadre1"
              src={Interieur2}
              alt="intérieur du salon de thé avec une rangée de siège comme au cinéma"
            />
          </div>
          <div className="texteDef">
            <h3>Tout le monde est bienvenu</h3>
            <p className="sousTitre">Un lieu accueillant et chaleureux</p>
            <p className="texteParaph">
              Le Caméo est un salon de thé sur la thématique du cinéma. Les
              clients pourront déguster des pâtisseries directement tirées de
              leur univers cinématographique préféré.
            </p>
            <p className="texteParaph">
              Le concept passe par l’assiette mais également dans l’ambiance et
              la décoration du salon de thé puisque il y a des affiches de
              cinéma ou encore des objets qui font directement référence à
              divers univers cinématographiques. Les pâtisseries sont toutes
              faites maison et sur place. Le but est de travailler avec le
              maximum de partenaires locaux.
            </p>
          </div>
        </div>
        <div className="divArticle">
          <div className="titreArticles">
            <h3>Ils parlent du Caméo...</h3>
          </div>
          <div className="blocArticles">
            <div className="imageArticle">
              <p className="nomJournal">Le littoral</p>
              <img
                src={ImageArticle1}
                className="imageArticle1"
                alt="Mathilde souriante assise dans son salon de thé"
              />

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.le-littoral.com/actualite-17185-rochefort-le-cameo-quand-le-7e-art-rencontre-l-art-du-the"
              >
                <p className="lienArticle">
                  Rochefort. Le Caméo : quand le 7e art rencontre l'art du thé{" "}
                </p>
              </a>
            </div>
            <div className="imageArticle">
              <p className="nomJournal">Sud-Ouest</p>
              <img
                src={ImageArticle2}
                className="imageArticle1"
                alt="portrait de Mathilde fière debout devant une affiche de cinéma de son salon"
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.sudouest.fr/charente-maritime/rochefort/rochefort-avec-son-salon-de-the-elle-partage-sa-passion-pour-le-septieme-art-21114131.php"
              >
                <p className="lienArticle">
                  Rochefort : avec son salon de thé, elle partage sa passion
                  pour le septième art
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="avisMobileDiv">
        <h3 style={{ color: "#6c1304" }}>Ce qu'ils en pensent...</h3>
        <div id="avisGoogleCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex flex-column align-items-center text-center p-4">
                <p style={{ color: "#582108" }}>
                  "Déjà plusieurs visites à mon actif, toujours un très agréable
                  moment. Mathilde est adorable et tout est absolument délicieux
                  😋!!!! …"
                </p>
                <span className="font-weight-bold" style={{ color: "#582108" }}>
                  Lucie
                </span>
                <div className="stars mt-2" style={{ color: "#dd7300" }}>
                  ★★★★★
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-4">
                <p style={{ color: "#582108" }}>
                  "Une pause goûter comme à la maison ☺️ J’ai adoré le concept
                  livre & jeux de société à disposition 📚 On peux même choisir
                  sa tasse ☕️ Le chocolat chaud est délicieux et je vous parles
                  pas des pâtisseries 😋 Hâte de revenir les tester !"
                </p>
                <span className="font-weight-bold" style={{ color: "#582108" }}>
                  Alyssa
                </span>
                <div className="stars mt-2" style={{ color: "#dd7300" }}>
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-4">
                <p style={{ color: "#582108" }}>
                  "Un joli lieu-refuge, où déguster d’excellentes pâtisseries,
                  en jouant à des jeux de société, ou en testant ses
                  connaissances sur le cinéma. Une merveille de salon de thé,
                  petite cuisine le midi, comme on aimerait en trouver plus
                  souvent !"
                </p>
                <span className="font-weight-bold" style={{ color: "#582108" }}>
                  Armell
                </span>
                <div className="stars mt-2" style={{ color: "#dd7300" }}>
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#avisGoogleCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#avisGoogleCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
      <div className="avis">
        <h3>Ce qu'ils en pensent...</h3>
        <div className="row">
          <div className="col-4">
            <p className="nomClient">Lucie</p>
            <div className="starRate">
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
            </div>
            <p className="avisGoogle">
              Déjà plusieurs visites à mon actif, toujours un très agréable
              moment. Mathilde est adorable et tout est absolument délicieux
              😋!!!! …
            </p>
          </div>
          <div className="col-4">
            <p className="nomClient">Alyssa</p>
            <div className="starRate">
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
            </div>
            <p className="avisGoogle">
              Une pause goûter comme à la maison ☺️ J’ai adoré le concept livre
              & jeux de société à disposition 📚 On peux même choisir sa tasse
              ☕️ Le chocolat chaud est délicieux et je vous parles pas des
              pâtisseries 😋 Hâte de revenir les tester !
            </p>
          </div>
          <div className="col-4">
            <p className="nomClient">Armell</p>
            <div className="starRate">
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
              <i className="bi bi-star-fill fs-6"></i>
            </div>
            <p className="avisGoogle">
              Un joli lieu-refuge, où déguster d’excellentes pâtisseries, en
              jouant à des jeux de société, ou en testant ses connaissances sur
              le cinéma. Une merveille de salon de thé, petite cuisine le midi,
              comme on aimerait en trouver plus souvent !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concept;
