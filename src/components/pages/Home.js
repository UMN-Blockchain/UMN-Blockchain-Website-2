import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} /> */}
      <Footer />
    </>
  );
}

export default Home;
