import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

class InfluencerCarousel extends Component {
  render() {
    return (
      <div className="carousel-div">
        <div>
          <div>
            <header className="header stuff">
              <Link to="/signup">
                <button className="signUp"> Sign up </button>
              </Link>
            </header>
          </div>

          <div className="bodyCopy">
            <h1>Welcome to Buzzsuite</h1>
            <p>
              <b>Influencer analytics management made easy.</b> Easily track
              influencer marketing campaigns, measure engagement, and identify
              the most cost-effective channels. All in one easy to navigate
              suite.
              <div>
                <b>Make data-driven decisions</b> Leverage previous analytics to
                drive more educated future marketing initiatives.
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/influencerpics/influencer5.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/influencerpics/influencer1.png"
                    alt="Third slide"
                  />

                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/influencerpics/influencer2.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption />
                </Carousel.Item>
              </Carousel>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfluencerCarousel;
