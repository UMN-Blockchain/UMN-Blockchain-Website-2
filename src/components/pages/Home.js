import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import AboutUs from "./AboutUs";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} /> */}
      <Footer />
    </>
  );
}

export default Home;
