import React from "react";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import Error from "./Error";
import Footer from "../components/Footer";
import dblogement from "../data/logement.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

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
                <h3>{logement.host.name}</h3>
                <img src={logement.host.picture} alt="" />
              </div>
              <div className="rating"></div>
            </div>
          </div>
          <div className="rolling-container">
            <Collapse
              data={[
                { title: "Description", description: logement.description },
              ]}
              titleKey="title"
              textKey="description"
            />
            <Collapse
              data={[{ title: "Equipements", equipments: logement.equipments }]}
              titleKey="title"
              textKey="equipments"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Logement;
