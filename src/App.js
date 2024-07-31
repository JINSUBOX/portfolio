import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

function App() {
	return (
		<div>
			<Header />
			<div className="section" id="home">
				<Home />
			</div>
			<div className="section" id="about">
				<About />
			</div>
			<div className="section" id="projects">
				<Projects />
			</div>
			<Footer />
		</div>
	);
}

export default App;
