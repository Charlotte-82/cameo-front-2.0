import React from "react";
import Interieur1 from "../assets/images/Lieu/le-cameo-int4.jpg";
import Interieur2 from "../assets/images/Lieu/le-cameo-pat.jpg";
import ImageArticle1 from "../assets/images/Lieu/le-cameo-littoral.jpg";
import ImageArticle2 from "../assets/images/Lieu/le-cameo-sudouest.jpg";
import Exterieur1 from "../assets/images/Lieu/le-cameo-ext.jpg";
import PatisserieSemaine from "../components/PatisserieSemaine";
import News from "../components/News";
import Accordion from "../components/homeAccordionMobile.jsx";

function Home() {
  return (
    <div className="page">
      <section className="bande1">
        <h1>La pâtisserie de la semaine</h1>
        <PatisserieSemaine />
      </section>
      <section className="bande2">
        <h2>Actualités</h2>
        <News />
      </section>
      <section className="bande3Mobile">
        <h2>Le Caméo, c'est quoi ?</h2>
        <Accordion />
        <div
          className="row divArticleMobile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#6c1304", marginTop: "2em" }}>
            Ils parlent du Caméo...
          </h3>
          <div className="col-6 imageArticle" style={{ marginBottom: "1.5em" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.le-littoral.com/actualite-17185-rochefort-le-cameo-quand-le-7e-art-rencontre-l-art-du-the"
            >
              <p className="nomJournal">Le littoral</p>
              <img
                src={ImageArticle1}
                className="imageArticle1"
                alt="Mathilde souriante assise dans son salon de thé"
              />
            </a>
          </div>
          <div className="col-6 imageArticle">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.sudouest.fr/charente-maritime/rochefort/rochefort-avec-son-salon-de-the-elle-partage-sa-passion-pour-le-septieme-art-21114131.php"
            >
              <p className="nomJournal">Sud-Ouest</p>
              <img
                src={ImageArticle2}
                className="imageArticle1"
                alt="portrait de Mathilde fière debout devant une affiche de cinéma de son salon"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="bande3">
        <h2>Le Caméo, c'est quoi ?</h2>
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
        <div className="row divArticle">
          <h3>Ils parlent du Caméo...</h3>
          <div className="col-6 imageArticle">
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
          <div className="col-6 imageArticle">
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
                Rochefort : avec son salon de thé, elle partage sa passion pour
                le septième art
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="bande4">
        <h2>Le Caméo, c'est où ?</h2>
        <div className="bande4Div">
          <div className="carteGoogleDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.7040519489146!2d-0.9633540990930719!3d45.93499175739425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801415a4a79b7c1%3A0x9f46aae248ebd2e!2zTGUgQ2Ftw6lv!5e0!3m2!1sfr!2sfr!4v1750432728740!5m2!1sfr!2sfr"
              title="Carte d’emplacement du Caméo"
              className="carteGoogle"
            ></iframe>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="adresseDiv">
              <p className="adresse">36 avenue LaFayette</p>
              <p className="adresse">17300 Rochefort</p>
            </div>
            <div style={{ padding: "1em" }}>
              <p style={{ color: "#582108", textAlign: "center" }}>
                Ouvert du mercredi au samedi au 10h à 18h30
              </p>
              <p style={{ color: "#582108", textAlign: "center" }}>
                et le dimanche de 10h à 18h
              </p>
            </div>
          </div>
          <div className="imageDevantureDiv">
            <img
              src={Exterieur1}
              className="imageDevanture"
              alt="devanture du salon de thé"
            />
          </div>
        </div>
        <div className="avisMobileDiv">
          <h3 style={{ color: "#6c1304" }}>Ce qu'ils en pensent...</h3>
          <div id="avisGoogleCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <p style={{ color: "#582108" }}>
                    "Déjà plusieurs visites à mon actif, toujours un très
                    agréable moment. Mathilde est adorable et tout est
                    absolument délicieux 😋!!!! …"
                  </p>
                  <span
                    className="font-weight-bold"
                    style={{ color: "#582108" }}
                  >
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
                    livre & jeux de société à disposition 📚 On peux même
                    choisir sa tasse ☕️ Le chocolat chaud est délicieux et je
                    vous parles pas des pâtisseries 😋 Hâte de revenir les
                    tester !"
                  </p>
                  <span
                    className="font-weight-bold"
                    style={{ color: "#582108" }}
                  >
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
                  <span
                    className="font-weight-bold"
                    style={{ color: "#582108" }}
                  >
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
                Une pause goûter comme à la maison ☺️ J’ai adoré le concept
                livre & jeux de société à disposition 📚 On peux même choisir sa
                tasse ☕️ Le chocolat chaud est délicieux et je vous parles pas
                des pâtisseries 😋 Hâte de revenir les tester !
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
                jouant à des jeux de société, ou en testant ses connaissances
                sur le cinéma. Une merveille de salon de thé, petite cuisine le
                midi, comme on aimerait en trouver plus souvent !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
