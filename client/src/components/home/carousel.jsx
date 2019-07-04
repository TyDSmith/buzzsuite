import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class InfluencerCarousel extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <img
            // className="d-block w-100"
            src="../images/logos/icon.png"
            alt=""
          /> */}
          {/* <p>parameter 1</p>
          <p>parameter 2</p>
          <p>parameter 3</p> */}
        </div>

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
      </div>
    );
  }
}

export default InfluencerCarousel;
