import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Banner />
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
