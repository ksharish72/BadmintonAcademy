import React, { Component } from "react";
import styles from "./Content.css";
import { Row, Col, Button } from "react-bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="SECTION_1">
        <section id="SECTION_2">
          <h1 id="H1_3">Welcome to Splendor Sports Badminton Academy</h1>
          <hr id="HR_4" />

          <article id="ARTICLE_5">
            <p id="P_6">
              ✠ As per International Standard,The overall dimensions of a
              badminton court is 20 feet by 44 feet. The lines along these
              measurements mark the sidelines for doubles play and long service
              lines for singles play. The net line marks the middle of the court
              where the net is placed, creating a 22 feet by 20 feet area on
              each side of the net
            </p>
            <p id="P_7">
              The surfaces available for an ideal badminton court are:100% PVC
              Synthetic Surface with BWF certified floorings.
            </p>
            <p id="P_8">
              ✠ There is a good liking between an asphalt base an synthetic
              surface as both are joint less surfaces. our floor are technically
              advanced, 100% pvc SYNTHETIC sports surfaces.
            </p>
            <p id="P_9">
              ✠ The multi-layer cushion system affords maximum player comfort
              and exceptional durability throughout the life of the court.
            </p>
            <p id="P_10">
              ✠ These courts are made in accordance with the Badminton world
              federation (BWF) use of 100% PVC synthetic flooring.
            </p>
            <p id="P_11">
              ✠ Textured sand finish of the courts make them highly resistant
              against weather and ultra-violet degradation we offered flooring's
              for badminton courts are widely demanded.
            </p>
            <p id="P_12">
              ✠ These cost effective and low maintenance flooring make these
              courts the perfect choice of customer comfort and protection of
              joints and muscles.
            </p>
            <p id="P_13" />
          </article>
          <hr id="HR_14" />

          <article id="ARTICLE_15">
            <figure id="FIGURE_16">
              <a href="#" id="A_17">
                <img
                  src="https://raw.githubusercontent.com/ksharish72/BadmintonAcademy/master/UserInterface/badmintonacademy_ui/src/Tabs/Home/ImageSlider/academy_1.jpeg"
                  alt=""
                  id="IMG_18"
                />
              </a>
              <figcaption id="FIGCAPTION_19">
                <h2 id="H2_20">OMR BADMINTON ACADEMY</h2>
                <div id="DIV_21">July,28 2017</div>
              </figcaption>
            </figure>
            <p id="P_22">
              Badminton is a racquet sport played by either two opposing players
              (singles) or two opposing pairs (doubles), who take positions on
              opposite halves of a rectangular court divided by a net.
            </p>
          </article>
          <hr id="HR_23" />
        </section>
      </section>
    );
  }
}
export default Content;
