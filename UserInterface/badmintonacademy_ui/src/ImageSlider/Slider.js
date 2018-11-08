import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import styles from "./Slider.css";
import { Row, Col, Button } from "react-bootstrap";

class DemoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: null };
  }

  render() {
    const images = [
      {
        original:
          "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-uvc04b7mgnnq0om5qu8a5i34r1-20160322235456.Medi.jpeg",
        thumbnail:
          "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-uvc04b7mgnnq0om5qu8a5i34r1-20160322235456.Medi.jpeg"
      },
      {
        original:
          "http://www.badmintoncentral.com/bc/wp-content/uploads/2013/12/2M6Q9599.jpg",
        thumbnail:
          "http://www.badmintoncentral.com/bc/wp-content/uploads/2013/12/2M6Q9599.jpg"
      },
      {
        original:
          "https://www.northeasttoday.in/assets/resources/2016/09/Badminton-680x365.jpg",
        thumbnail:
          "https://www.northeasttoday.in/assets/resources/2016/09/Badminton-680x365.jpg"
      },
      {
        original: "http://nkba.in/Content/Images/Site/Home/13.jpg",
        thumbnail: "http://nkba.in/Content/Images/Site/Home/13.jpg"
      },
      {
        original:
          "https://5.imimg.com/data5/DJ/DU/MY-1515609/badminton-court-28-indoor-29-500x500.jpg",
        thumbnail:
          "https://5.imimg.com/data5/DJ/DU/MY-1515609/badminton-court-28-indoor-29-500x500.jpg"
      }
    ];
    return (
      <Row className="show-grid">
        <Col md={12}>
          <ImageGallery
            sizes={{ height: "500" }}
            items={images}
            autoPlay={true}
          />
        </Col>
      </Row>
    );
  }
}
export default DemoCarousel;
