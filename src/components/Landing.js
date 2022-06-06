import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Assets/coverPhotos/landingPagePhoto.jpg";

let LandingPage = () => {
	console.log(Cover);
	return (
		<div>
			<div className="landing-container">
				<div>
					<Link to="/home">
						<img
							className="main-cover-photo"
							src={Cover}
							alt="cover"
						></img>
					</Link>
					<Link to="/home">
						<div className="overlay">
							<div>Start Shopping</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
