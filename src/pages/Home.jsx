import React, { useState, useEffect } from "react";
import Exterieur1 from "../assets/images/Lieu/le-cameo-ext.jpg";
import PatisserieSemaine from "../components/PatisserieSemaine";
import News from "../components/News";

function Home() {
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
            borderRadius: "8px",
            background: "whitesmoke",
            color: "#6c1304",
            cursor: "pointer",
            border: "solid 2px #dd7300",
            fontWeight: "400",
            fontSize: "xx-large",
          }}
        >
          ↑
        </button>
      )}
      <hr className="NavigLigne2"></hr>
      <hr className="NavigLigne21"></hr>
      <section className="bande1">
        <h1>La pâtisserie de la semaine</h1>
        <PatisserieSemaine />
      </section>
      <div className="bande23">
        <section className="bande2">
          <h2>À Ne Pas Manquer !</h2>
          <News />
        </section>

        <section className="bande4">
          <h2>Comment venir ?</h2>
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
                  Ouvert du mercredi au samedi au <strong>10h à 18h30</strong>
                </p>
                <p style={{ color: "#582108", textAlign: "center" }}>
                  et le dimanche de <strong>10h à 18h</strong>
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
        </section>
      </div>
    </div>
  );
}

export default Home;
