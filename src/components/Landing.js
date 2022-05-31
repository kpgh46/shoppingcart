import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Assets/coverPhotos/pexels-mark-mccammon-1080696.jpg";

let LandingPage = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<h3>
				<Link to="/home">Home</Link>
			</h3>
			<div className="landing-container">
				<img className="main-cover-photo" src={Cover} alt="cover"></img>
			</div>
		</div>
	);
};

export default LandingPage;
