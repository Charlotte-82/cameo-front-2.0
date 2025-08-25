import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        width: "80%",
        border: "solid 4px #dd7300",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        padding: "1em",
        backgroundColor: "#6c1304",
      }}
    >
      <div
        className="accordion-item"
        style={{
          borderBottom: "solid 4px #dd7300",
          marginBottom: "10px",
          backgroundColor: "#6c1304",
          overflow: "hidden",
        }}
      >
        <button
          className={`accordion-button ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleSection(0)}
          style={{
            color: "#ffdfb7",
            padding: "2px",
            marginBottom: "5px",
            width: "100%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          La Création du Caméo
        </button>
        <div
          className={`accordion-content ${activeIndex === 0 ? "active" : ""}`}
          style={{ overflow: "hidden" }}
        >
          <div className="accordion-content-inner">
            <p style={{ color: "#6c1304" }}>
              Au départ, le projet de Mathilde a été de créer un endroit qui lui
              ressemble à tous les niveaux et où elle pourrait exposer sa
              créativité et celles des autres et assouvir son besoin de partage.
              La passion de Mathilde pour le cinéma a toujours été importante et
              elle n’a pas cessé de réfléchir à un rapprochement possible entre
              cette dernière et son métier. Depuis maintenant quelques années,
              des livres de cuisine thématique voient le jour et notamment
              autour du cinéma. L’attrait est véritablement présent et rapproche
              plusieurs générations. Lui vient l’idée d’un lieu pour rassembler
              ces cinéphiles de tout âge.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="accordion-item"
        style={{
          borderBottom: "solid 4px #dd7300",
          marginBottom: "10px",
          backgroundColor: "#6c1304",
          overflow: "hidden",
        }}
      >
        <button
          className={`accordion-button ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleSection(1)}
          style={{
            color: "#ffdfb7",
            padding: "2px",
            marginBottom: "5px",
            width: "100%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Tout le monde est bienvenu{" "}
        </button>
        <div
          className={`accordion-content ${activeIndex === 1 ? "active" : ""}`}
          style={{ overflow: "hidden" }}
        >
          <div className="accordion-content-inner">
            <p style={{ color: "#6c1304" }}>
              Le Caméo est un salon de thé sur la thématique du cinéma. Les
              clients pourront déguster des pâtisseries directement tirées de
              leur univers cinématographique préféré. Le concept passe par
              l’assiette mais également dans l’ambiance et la décoration du
              salon de thé puisque il y a des affiches de cinéma ou encore des
              objets qui font directement référence à divers univers
              cinématographiques. Les pâtisseries sont toutes faites maison et
              sur place. Le but est de travailler avec le maximum de partenaires
              locaux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
