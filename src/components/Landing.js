import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Assets/coverPhotos/landingPagePhoto.jpg";

let LandingPage = () => {
	console.log(Cover);
	return (
		<div>
			<div className="landing-container">
				<div>
					<img
						className="main-cover-photo"
						src={Cover}
						alt="cover"
					></img>
					<div class="overlay"></div>
					<button className="landing-button">
						<Link to="/home">Home</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
