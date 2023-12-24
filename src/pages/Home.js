import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import source1 from "../img/img_source.png";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Banner
          src={source1}
          alt="paysage de montagne type breton"
          text="Chez vous, partout et ailleurs"
        />
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
