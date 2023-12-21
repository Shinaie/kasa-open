import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import source2 from "../img/img_source2.jpg";
import dataAbout from "../data/about.json";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Banner src={source2} alt="photo de montagne" />
        <div className="about-container">
          <Collapse data={dataAbout} titleKey="title" textKey="text" />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default About;
