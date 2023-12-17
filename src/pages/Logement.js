import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import dblogement from "../data/logement.json";
import { useParams } from "react-router-dom";

const Logement = () => {
  //Récupere l'id du logement à partir de l'url
  const { id } = useParams();

  // Trouve le logement correspondant dans la base de données

  const logement = dblogement.find((apptm) => apptm.id === id);

  console.log(logement);

  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="img-container">
          <img src={logement.cover} alt="coverimage" />
        </div>
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
          <div className="owner-container">
            <div className="owner">
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt="" />
            </div>
            <div className="rating"></div>
          </div>
          {/* <div className="Description"></div>
          <div className="Equipements"></div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Logement;
