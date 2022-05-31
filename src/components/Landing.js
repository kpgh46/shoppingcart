import React from "react";

import { Link } from "react-router-dom";

let LandingPage = () => {
	return (
		<div>
			<h1>Landing Page!</h1>
			<h3>
				<Link to="/home">Home</Link>
			</h3>
		</div>
	);
};

export default LandingPage;
