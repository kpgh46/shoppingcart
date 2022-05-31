import React from "react";
import { Link } from "react-router-dom";

let Header = () => {
	return (
		<div>
			<nav>
				<ul className="header">
					<Link to="/outdoor">
						<li>Outdoor</li>
					</Link>
					<Link to="/indoor">
						<li>Indoor</li>
					</Link>
					<Link to="/new">
						<li>New</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
