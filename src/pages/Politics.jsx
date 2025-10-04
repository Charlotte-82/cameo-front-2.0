import React, { useState, useEffect } from "react";

function Politics() {
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
      <div className="sousTitre">
        <h1>Politique de Confidentialité</h1>
      </div>
      <div className="politicDiv">
        <ol>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Identité du responsable du traitement:
            </span>{" "}
            Le responsable du traitement de vos données personnelles est : Le
            Caméo, 36 Avenue Lafayette 17300 Rochefort,{" "}
            <a href="mailto:lecameo17@gmail.com" style={{ color: "#b21a00" }}>
              lecameo17@gmail.com
            </a>
            .
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Données personnelles collectées:
            </span>{" "}
            Nous collectons les données suivantes :
            <ul>
              <li>
                <u>Données d'authentification</u> : Nom d'utilisateur, adresse
                e-mail, mot de passe.
              </li>
              <li>
                <u>Données de réservation</u> : Informations liées à votre
                réservation, telles que numéro de téléphone, nombre de places,
                date, description de l'activité.
              </li>
            </ul>
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Finalités du traitement des données:
            </span>{" "}
            Vos données personnelles sont traitées exclusivement pour les
            finalités suivantes :
            <ul>
              <li>
                Gérer votre compte utilisateur et assurer votre authentification
                sur notre site.
              </li>
              <li>Gérer vos réservations d'activités.</li>
              <li>
                Nous ne collectons ni ne traitons vos données à des fins
                commerciales, marketing, de profilage, ou de suivi de votre
                navigation.
              </li>
            </ul>
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">Base légale du traitement:</span> Le
            traitement de vos données personnelles est fondé sur l'exécution
            d'un contrat (Article 6.1.b du RGPD). En vous inscrivant et en
            effectuant des réservations, vous consentez à ce que vos données
            soient traitées pour la bonne exécution des services que vous avez
            demandés.
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">Destinataires des données:</span> Vos
            données personnelles ne sont pas communiquées à des tiers, à
            l'exception des sous-traitants techniques qui interviennent dans la
            fourniture de nos services. Ces sous-traitants sont liés par des
            obligations contractuelles garantissant la sécurité et la
            confidentialité de vos données.
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Durée de conservation des données:
            </span>{" "}
            Vos données d'authentification sont conservées tant que votre compte
            utilisateur est actif. Les données de réservation sont conservées
            pour une durée de 1 an après l'activité afin de pouvoir gérer
            d'éventuels litiges ou questions.
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Vos droits Conformément au RGPD:
            </span>{" "}
            Vous disposez des droits suivants concernant vos données
            personnelles :
            <ul>
              <li>
                <u>Droit d'accès</u> : Vous pouvez demander l'accès à vos
                données personnelles que nous détenons.
              </li>
              <li>
                <u>Droit de rectification</u> : Vous pouvez demander la
                rectification de données inexactes ou incomplètes.
              </li>
              <li>
                <u>Droit d'effacement</u> : Vous pouvez demander l'effacement de
                vos données dans certaines conditions.
              </li>
              <li>
                <u>Droit à la limitation du traitement</u> : Vous pouvez
                demander la limitation du traitement de vos données.
              </li>
              <li>
                <u>Droit à la portabilité</u> : Vous pouvez demander à recevoir
                vos données dans un format structuré et couramment utilisé.
              </li>
              <li>
                <u>Droit d'opposition</u> : Vous pouvez vous opposer au
                traitement de vos données pour des raisons légitimes. Pour
                exercer ces droits, vous pouvez nous contacter à{" "}
                <a
                  href="mailto:lecameo17@gmail.com"
                  style={{ color: "#b21a00" }}
                >
                  lecameo17@gmail.com
                </a>
                . Nous nous engageons à vous répondre dans un délai d'un mois.
              </li>
            </ul>{" "}
          </li>
          <li style={{ marginBottom: "1em" }}>
            <span className="politicSpan">
              Droit d'introduire une réclamation:
            </span>{" "}
            Si vous estimez que le traitement de vos données ne respecte pas les
            exigences du RGPD, vous avez le droit de déposer une réclamation
            auprès de la CNIL (Commission Nationale de l'Informatique et des
            Libertés) :
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              style={{ color: "#b21a00" }}
            >
              https://www.cnil.fr/fr/plaintes
            </a>
            .
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Politics;
