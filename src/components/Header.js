import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

let Header = () => {
	let el = <FontAwesomeIcon icon={faCartShopping} />;
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
					<Link to="/cart">{el}</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
