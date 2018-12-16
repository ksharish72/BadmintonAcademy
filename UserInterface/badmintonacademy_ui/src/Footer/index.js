import React, { Component } from "react";
import styles from "./index.css";
import logo from "./images/headerlogo.png";
import { Image } from "react-bootstrap";

class Footer extends Component {
	render() {
		return (
			<footer id="FFOOTER_1">
				<div id="FDIV_2">
					<div id="FDIV_3">
						<h5 id="FH5_4" />
						<div id="FDIV_5">
							<a href="index.html" id="FA_6">
								<Image src={logo} alt="" id="FIMG_7" />
							</a>
						</div>
					</div>

					<div id="FDIV_8">
						<h5 id="FH5_9">Contact us</h5>
						<p id="FP_10">
							<strong id="FSTRONG_11">
								SPLENDOR SPORTS BADMINTON ACADEMY
							</strong>
							<br id="FBR_12" /> Splendor Sports,<br id="FBR_13" />{" "}
							Kalaivanar Salai,<br id="FBR_14" />{" "}
							Chitlapakkam,Chennai-600064
						</p>
						<p id="FP_15" />
						<p id="FP_16">
							Mobile No: +919444222829<br id="FBR_18" />Email:
							splendorsports64@gmail.com
							<br id="FBR_19" />
						</p>
					</div>

					<div id="FDIV_20">
						<h5 id="FH5_21">CAREERS</h5>
					</div>
				</div>
				<div id="FDIV_27" />

				<div id="FDIV_28">
					Copyrights © 2018 Splendor Sports Badminton Academy All
					Rights Reserved. Designed and Developed by{" "}
					<a
						href="https://www.linkedin.com/in/harish-sivaprakash-032218114/"
						target="_blank"
						id="FA_29"
					>
						Harish K S
					</a>
				</div>

				<ul id="FUL_30">
					<li id="FLI_31">
						<a href="https://www.facebook.com/" id="FA_32">
							<img
								src="images/social-icons/facebook.png"
								alt="Facebook"
								id="FIMG_33"
							/>
						</a>
					</li>
					<li id="FLI_34">
						<a href="https://twitter.com/" id="FA_35">
							<img
								src="images/social-icons/twitter.png"
								alt="Twitter"
								id="FIMG_36"
							/>
						</a>
					</li>
					<li id="FLI_37">
						<a href="https://plus.google.com/" id="FA_38">
							<img
								src="images/social-icons/google+.png"
								alt="Google+"
								id="FIMG_39"
							/>
						</a>
					</li>
					<li id="FLI_40">
						<a href="https://www.youtube.com/" id="FA_41">
							<img
								src="images/social-icons/youtube.png"
								alt="YouTube"
								id="FIMG_42"
							/>
						</a>
					</li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
