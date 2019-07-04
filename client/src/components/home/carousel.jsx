import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class InfluencerCarousel extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            {/* <img
            // className="d-block w-100"
            src="../images/logos/icon.png"
            alt=""
          /> */}
            <header>
              <h1>BUZZSUITE</h1>
              {/* <p>this is the buzzsuite homepage</p> */}
            </header>

            {/* <p>parameter 2</p>
          <p>parameter 3</p> */}
          </div>

          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/influencerpics/influencer5.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 />
                  <p />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/influencerpics/influencer1.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 />
                  <p />
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/influencerpics/influencer2.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 />
                  <p />
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </p>
        </div>
      </div>
    );
  }
}

export default InfluencerCarousel;
