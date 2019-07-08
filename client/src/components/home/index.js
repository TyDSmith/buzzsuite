import React, { Component } from "react";
// import "./home";
import InfluencerCarousel from "./carousel";
// import { Carousel,
import "./home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="headboard-image">
        <div className="home-headboard">
          <div className="home-text-column">
            <div className="home-intro-text">
              <h2 className="home-main-text">Influencer analytics made easy.</h2>
              <p>Easily track influencer marketing campaigns, measure engagement, and identify the most cost-effective channels. <br /><br />All in one easy-to-navigate suite.</p>
              <Link to="/signup">
                {" "}
                <button className="signup-button-home">Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="home-image-column">
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-text-column">
          <h3 className="home-subtitle">Track all your influencer campaigns in one place</h3>
          <p className="home-content">
            Say goodbye to clunky spreadsheets.
        </p>
        </div>
        <div className="home-image-column">
          <img
            className="d-block w-100"
            src="../images/influencerpics/influencer5.jpg"
            alt="First slide"
          />
        </div>
      </div>
      <div className="home-row">
        <div className="home-image-column">
          <img
            className="d-block w-100"
            src="../images/influencerpics/influencer2.jpg"
            alt="Third slide"
          />
        </div>
        <div className="home-text-column">
          <h3 className="home-subtitle">Make data-driven decisions</h3>
          <p className="home-content">Leverage previous analytics to drive more educated future marketing initiatives.
        </p>
        </div>

      </div>
      <div className="home-contact-div">
        <h4>Contact us</h4>

      </div>
      {/* <InfluencerCarousel /> */}

    </div>
  );
}

export default Home;
