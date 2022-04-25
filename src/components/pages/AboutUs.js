import React from "react";
import "./AboutUs.css";
import "../../App.css";

function AboutUs() {
  return (
    <>
      <div className="mission-container">
        <h1 data-aos="fade-up">Our Mission</h1>
        <p data-aos="fade-up">
          At UMN Blockchain, we strive to educate and provide blockchain-related
          opportunities for students regardless of their major or background.
        </p>
      </div>
      <div className="meetings-container">
        <div className="discussion-img" data-aos="fade-up">
          <img src="images\Group1.jpeg" />
        </div>
        <div className="discussion-text" data-aos="fade-up">
          <h1>Weekly Discussions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className="meetings-container2">
        <div className="workshop-text" data-aos="fade-up">
          <h1>Bi-Weekly Workshops</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="discussion-img" data-aos="fade-up">
          <img src="images\Group2.jpeg" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
