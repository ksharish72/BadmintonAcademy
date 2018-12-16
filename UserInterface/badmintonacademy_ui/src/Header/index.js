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
						<Image
							src={logo}
							alt=""
							style={{
								float: "left",
								width: "660px",
								height: "160px",
								marginTop: "10px"
							}}
						/>
					</a>{" "}
					<h5 style={{ fontFamily: "Oswald" }} id="H5_8">
						call : Mr. Dhanapathy <br id="BR_9" />
						<br id="BR_10" />+919444222829<br id="BR_11" />
						<br id="BR_12" />{" "}
						<small style={{ fontFamily: "Oswald" }} id="SMALL_13">
							Address:<br id="BR_14" /> Splendor Sports,
							Kalaivanar Salai,<br id="BR_15" />{" "}
							Chitlapakkam,Chennai-600064<br id="BR_16" />
						</small>
					</h5>
					<a
						href="https://maps.app.goo.gl/7M7pK"
						target="_blank"
						id="maps"
					>
						Open in Google Maps
					</a>
					<span id="email">splendorsports64@gmail.com</span>
				</div>
			</header>
		);
	}
}

export default Header;
