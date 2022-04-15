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
            Place holder text. This is simply placeholder text. Want some more
            place holder text? We got you. Featuring the best of the best in the
            technology of place holders, we are able to place the holders better
            than anyone in the industry.
          </p>
          <p>
            Place holder text. This is simply placeholder text. Want some more
            place holder text? We got you. Featuring the best of the best in the
            technology of place holders, we are able to place the holders better
            than anyone in the industry.
          </p>
        </div>
      </div>
      <div className="meetings-container2">
        <div className="workshop-text" data-aos="fade-up">
          <h1>Bi-Weekly Workshops</h1>
          <p>
            Place holder text. This is simply placeholder text. Want some more
            place holder text? We got you. Featuring the best of the best in the
            technology of place holders, we are able to place the holders better
            than anyone in the industry.
          </p>
          <p>
            Place holder text. This is simply placeholder text. Want some more
            place holder text? We got you. Featuring the best of the best in the
            technology of place holders, we are able to place the holders better
            than anyone in the industry.
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
