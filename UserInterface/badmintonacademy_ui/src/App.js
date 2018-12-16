import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./Tabs";
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Tabs />
				<Footer />
			</div>
		);
	}
}

export default App;
