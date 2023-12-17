import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import source2 from "../img/img_source2.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner src={source2} alt="photo de montagne" />

      <Footer />
    </div>
  );
};
export default About;
