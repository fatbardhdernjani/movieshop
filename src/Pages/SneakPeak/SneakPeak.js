import React from "react";
import "../../Components/Assets/styles/SneakPeak.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/SneakersComponents/Home/Home";
import Collection from "../../Components/SneakersComponents/Collection/Collection";

const SneakPeak = () => {
  return (
    <div className="bg-color">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <Footer />
    </div>
  );
};

export default SneakPeak;
