import React from "react";
import { Link } from "react-router-dom";
import indoorPhoto from "../Assets/coverPhotos/pexels-huseyn-kamaladdin-667838.jpg";
import outdoorPhoto from "../Assets/coverPhotos/pexels-souranshi-fashion-and-lifestyle-magazine-4497545.jpg";

let HomePage = () => {
	return (
		<div>
			<h2>This is the home page!</h2>
			<div className="landing-container">
				<div>
					<img
						className="indoor-cover-photo"
						src={indoorPhoto}
						alt="indoor photo"
					></img>
					<Link to="/indoor">
						<button>Shop Indoor</button>
					</Link>
				</div>
				<div>
					<img
						className="outdoor-cover-photo"
						src={outdoorPhoto}
						alt="outdoor photo"
					></img>
					<Link to="/outdoor">
						<button>Shop Outdoor</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
