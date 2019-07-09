import React from "react";
// import "./home";
import InfluencerCarousel from "./carousel";
import "./home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ContactRow from "./contact-row";
import Footer from "../footer";


function Home(props) {
  return (
    <div className="homepage">
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
            Say goodbye to clunky and messy spreadsheets.
        </p>
        </div>

        <div className="home-image-column">
          <img
            className="home-image"
            src="../images/home-img-2.png"
          />

        </div>
      </div>
      <div className="home-row">
        <div className="home-image-column">
          <img
            className="home-image"
            src="../images/home-img-1.png"
          />
        </div>
        <div className="home-text-column">
          <h3 className="home-subtitle">Make data-driven decisions</h3>
          <p className="home-content">Leverage previous analytics to drive more educated future marketing initiatives.
          Identify the most cost-effective influencers on a CPC, CPM, & CPE basis.
        </p>
        </div>

      </div>

      {/* <ContactRow /> */}
      <Footer />
      {/* <InfluencerCarousel /> */}

    </div>
  );
}

export default Home;
