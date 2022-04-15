import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading" data-aos="fade-up">
          Join the our newsletter to stay up to date with events!
        </p>
        <p className="footer-subscription-text" data-aos="fade-up">
          You can unsubscribe at any time.
        </p>
        {/* Directs to google form */}
        <a href="https://z.umn.edu/blockchain-signup" data-aos="fade-up">
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </a>
        {/* <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items" data-aos="fade-up">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items" data-aos="fade-up">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/umn_blockchain/">Instagram</a>
            <a href="https://www.linkedin.com/company/umn-blockchain/">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/channel/UCHGi8gWjPJN4XyCvVkCh04w">
              Youtube
            </a>
            <a href="https://twitter.com/umnblockchain">Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="logo-text">
            <img
              className="logofooter"
              src="images\Blockchain_Club__UMN.png"
              alt=""
            />
            <h1 className="logotextfooter">BLOCKCHAIN</h1>
          </div>
          <div class="social-icons">
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/umn_blockchain/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com/channel/UCHGi8gWjPJN4XyCvVkCh04w"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/umnblockchain"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/company/umn-blockchain/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
