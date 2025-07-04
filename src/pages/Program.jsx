import Calendar from "../components/Calendar";
import { useEffect, useState } from "react";
import axios from "axios";

function Program() {
  const [posts, setPosts] = useState([]);

  const baseURL = process.env.REACT_APP_API_URL;

  const parseACFDate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resEvenements, resAteliers] = await Promise.all([
          axios.get(`${baseURL}/wp-json/wp/v2/evenement?per_page=100`),
          axios.get(`${baseURL}/wp-json/wp/v2/atelier?per_page=100`),
        ]);
        console.log(process.env.REACT_APP_API_URL);
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        const isCurrentMonth = (acfDate) => {
          const date = parseACFDate(acfDate);
          return (
            date &&
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
          );
        };

        const allPosts = [...resEvenements.data, ...resAteliers.data];
        console.log("🔍 Tous les posts récupérés :", allPosts);

        const filteredSorted = allPosts
          .filter((post) => isCurrentMonth(post.acf?.date_de_debut))
          .sort(
            (a, b) =>
              parseACFDate(a.acf?.date_de_debut) -
              parseACFDate(b.acf?.date_de_debut)
          );

        console.log("✅ Posts filtrés pour le mois courant :", filteredSorted);
        setPosts(filteredSorted);
      } catch (err) {
        console.error("Erreur lors du chargement :", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="program">
      <h1>Les événements à venir</h1>
      <section className="listeEvenement">
        {posts.length === 0 ? (
          <p className="noEvent">Aucun événement ou atelier ce mois-ci.</p>
        ) : (
          posts.map((post, index) => {
            const dateDebut = post.acf?.date_de_debut;
            const dateFin = post.acf?.date_de_fin;

            const afficherDate =
              dateFin && dateFin !== dateDebut
                ? `Du ${dateDebut} au ${dateFin}`
                : `Le ${dateDebut}`;

            const backgroundColorClass =
              index % 2 === 0 ? "light-bg" : "orange-bg";

            return (
              <div
                key={post.id}
                className={`postProgram ${backgroundColorClass}`}
              >
                <div className="imageEventDiv">
                  {post.acf?.image && (
                    <img
                      src={post.acf.image.url}
                      alt="divers matériel de couture"
                      className="imageEvent"
                    />
                  )}
                </div>
                <div className="infoEvent">
                  {post.acf?.titre && <h3>{post.acf.titre}</h3>}
                  <p>
                    <strong>Date</strong>
                  </p>
                  <p>{afficherDate}</p>
                  <p>
                    <strong>Heure</strong>
                  </p>
                  {post.acf?.heure_de_debut && post.acf?.heure_de_fin && (
                    <p>
                      {post.acf.heure_de_debut} - {post.acf.heure_de_fin}
                    </p>
                  )}
                </div>
                <div className="infoEvent">
                  <p>
                    <strong>Intervenant</strong>
                  </p>
                  {post.acf?.intervenant && <p>{post.acf.intervenant}</p>}
                  <p>
                    <strong>Lieu</strong>
                  </p>
                  {post.acf?.lieu && <p>{post.acf.lieu}</p>}
                </div>
                <div className="textEventReserv">
                  {post.acf?.description && <p>{post.acf.description}</p>}
                  <button className="boutonReservation">
                    <a href="/agenda">Voir l'agenda</a>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </section>
      <section className="calendarProgram">
        <Calendar />
      </section>
    </div>
  );
}

export default Program;
