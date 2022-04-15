import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        {/* <img src="images\UMN-home.jpg" alt=""/> */}
        <h1>Inspire, and Educate.</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            About Us
          </Button>
          {/* <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                About Us
            </Button>      */}
        </div>
      </div>
      {/* <div className="hero-2">
        <h1>Placeholder</h1>
        <p>Placeholder 2</p>
      </div> */}
    </>
  );
}

export default HeroSection;
