import React from "react";
import { Link } from "react-router-dom";

let Home = () => {
	return (
		<div>
			<h2>This is the home page!</h2>
			<Link to="/">Landing</Link>
		</div>
	);
};

export default Home;
