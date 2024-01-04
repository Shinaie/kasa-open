import React from "react";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import Error from "./Error";
import Footer from "../components/Footer";
import dblogement from "../data/logement.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Stars from "../components/Stars";

const Logement = () => {
  //Récupere l'id du logement à partir de l'url
  const { id } = useParams();

  // Trouve le logement correspondant dans la base de données

  const logement = dblogement.find((apptm) => apptm.id === id);

  // si la page n'existe pas

  if (!logement) {
    return <Error />;
  }

  return (
    <div>
      <Navigation />
      <main>
        <div className="header-img-container">
          <Carrousel data={logement} />
          <div className="header-container">
            <div className="title-container">
              <h2>{logement.title}</h2>
              <div className="subtitle-container">
                <p>{logement.location}</p>
                <ul className="tag">
                  {logement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="owner-container">
              <div className="owner">
                {/* permet de séparer le nom et le prenom dans un tableau */}
                <h3>
                  {/* Affiche la première partie du tableau (prénom) */}
                  {logement.host.name.split(" ")[0]}
                  <br />
                  {/* Affiche la deuxième partie du tableau (nom de famille) */}
                  {logement.host.name.split(" ")[1]}
                </h3>
                <img src={logement.host.picture} alt="" />
              </div>
              <div className="rating">
                <Stars rating={parseFloat(logement.rating)} />
              </div>
            </div>
          </div>
          <div className="rolling-container">
            <Collapse titleKey="Description" textKey={logement.description} />
            <Collapse titleKey="Equipements" textKey={logement.equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Logement;
