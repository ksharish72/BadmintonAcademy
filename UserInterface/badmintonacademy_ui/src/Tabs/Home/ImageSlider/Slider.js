import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import styles from "./Slider.css";
import { Row, Col, Button } from "react-bootstrap";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: null };
  }

  render() {
    const images = [
      {
        original:
          "https://raw.githubusercontent.com/ksharish72/BadmintonAcademy/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_1.jpg",
        thumbnail:
          "https://raw.githubusercontent.com/ksharish72/BadmintonAcademy/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_1.jpg"
      },
      {
        original:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_2.jpg?raw=true",
        thumbnail:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_2.jpg?raw=true  "
      },
      {
        original:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_3.jpg?raw=true",
        thumbnail:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_3.jpg?raw=true"
      },
      {
        original:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_4.jpg?raw=true",
        thumbnail:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_4.jpg?raw=true"
      },
      {
        original:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_5.jpg?raw=true",
        thumbnail:
          "https://github.com/ksharish72/BadmintonAcademy/blob/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_5.jpg?raw=true"
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
export default Slider;
