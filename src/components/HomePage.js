import React from "react";
import { Link } from "react-router-dom";
import indoorPhoto from "../Assets/coverPhotos/pexels-huseyn-kamaladdin-667838.jpg";
import outdoorPhoto from "../Assets/coverPhotos/pexels-souranshi-fashion-and-lifestyle-magazine-4497545.jpg";

let HomePage = () => {
	return (
		<div>
			<div className="home-container">
				<div className="home-left">
					<img
						className="indoor-cover-photo"
						src={indoorPhoto}
						alt="indoor photo"
					></img>
					<Link to="/indoor">
						<div className="home-overlay">
							<div>Shop Indoor</div>
						</div>
					</Link>
				</div>
				<div className="home-right">
					<img
						className="outdoor-cover-photo"
						src={outdoorPhoto}
						alt="outdoor photo"
					></img>
					<Link to="/outdoor">
						<div className="home-overlay">
							<div>Shop Outdoor</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
