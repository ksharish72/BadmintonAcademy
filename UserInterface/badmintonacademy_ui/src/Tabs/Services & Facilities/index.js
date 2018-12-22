import React from "react";
import styles from "./index.css";
import court from "./images/court.png";
import cctv from "./images/cctv.png";
import alldays from "./images/alldays.png";
import credit from "./images/credit.png";
import dressingroom from "./images/dressingroom.png";
import juice from "./images/juice.png";
import led from "./images/led.png";
import locker from "./images/locker.png";
import membership from "./images/membership.png";
import parking from "./images/parking.png";
import power from "./images/power.png";
import restroom from "./images/restroom.png";
import rowater from "./images/rowater.png";
import specialcoaching from "./images/specialcoaching.png";
import wifi from "./images/wifi.png";

class Services extends React.Component {
  render() {
    return (
      <section id="SERVICESSECTION_1">
        <h2 id="SERVICESH2_2">Service &amp; Facilities</h2>
        <div id="SERVICESDIV_3">
          <img src={court} alt="" width="100%" id="SERVICESIMG_4" />
        </div>
        <div id="SERVICESDIV_5">
          <img src={cctv} alt="" width="100%" id="SERVICESIMG_6" />
        </div>
        <div id="SERVICESDIV_7">
          <img src={alldays} width="100%" alt="" id="SERVICESIMG_8" />
        </div>
        <div id="SERVICESDIV_9">
          <img src={credit} width="100%" alt="" id="SERVICESIMG_10" />
        </div>
        <div id="SERVICESDIV_11">
          <img src={dressingroom} alt="" width="100%" id="SERVICESIMG_12" />
        </div>
        <div id="SERVICESDIV_13">
          <img src={juice} width="100%" alt="" id="SERVICESIMG_14" />
        </div>
        <div id="SERVICESDIV_15">
          <img src={led} width="100%" alt="" id="SERVICESIMG_16" />
        </div>
        <div id="SERVICESDIV_17">
          <img src={locker} alt="" width="100%" id="SERVICESIMG_18" />
        </div>
        <div id="SERVICESDIV_19">
          <img src={membership} width="100%" alt="" id="SERVICESIMG_20" />
        </div>
        <div id="SERVICESDIV_21">
          <img src={parking} alt="" width="100%" id="SERVICESIMG_22" />
        </div>
        <div id="SERVICESDIV_23">
          <img src={power} width="100%" alt="" id="SERVICESIMG_24" />
        </div>
        <div id="SERVICESDIV_25">
          <img src={restroom} width="100%" alt="" id="SERVICESIMG_26" />
        </div>
        <div id="SERVICESDIV_27">
          <img src={rowater} alt="" width="100%" id="SERVICESIMG_28" />
        </div>
        <div id="SERVICESDIV_29">
          <img src={specialcoaching} width="100%" alt="" id="SERVICESIMG_30" />
        </div>
        <div id="SERVICESDIV_31">
          <img src={wifi} width="100%" alt="" id="SERVICESIMG_32" />
        </div>
      </section>
    );
  }
}

export default Services;
