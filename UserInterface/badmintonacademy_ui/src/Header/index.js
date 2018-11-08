import React, { Component } from "react";
import styles from "./index.css";
import { Image } from "react-bootstrap";
import logo from "./images/headerlogo.png";

class Header extends Component {
	render() {
		return (
			<header id="HEADER_1">
				<div id="DIV_2">
					<a href="index.html">
						<Image src={logo} alt="" style={{ float: "left" }} />
					</a>{" "}
					<span
						style={{
							fontFamily: "Oswald",
							backgroundColor: "darkred"
						}}
						id="SPAN_5"
					>
						SPLENDOR SPORTS BADMINTON ACADEMY
					</span>
					<p id="P_7">Vision-Mission-Action</p>
					<h5 style={{ fontFamily: "Oswald" }} id="H5_8">
						call : 044-24502020,<br id="BR_9" />
						<br id="BR_10" /> 91-9600093205, 91-9445032020<br id="BR_11" />
						<br id="BR_12" />{" "}
						<small style={{ fontFamily: "Oswald" }} id="SMALL_13">
							Address:<br id="BR_14" /> No.461/6A, Rajiv Gandhi
							salai,<br id="BR_15" /> Chromepet,Chennai -600044.<br id="BR_16" />
							<span id="email">harish@gmail.com</span>
						</small>
					</h5>
				</div>
			</header>
		);
	}
}

export default Header;
