import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

let Header = (props) => {
	let el = <FontAwesomeIcon icon={faCartShopping} />;
	let number = props.data.filter((item) => {
		return item.inCart === true;
	});

	return (
		<div>
			<nav>
				<ul className="header">
					<div className="header-left">
						<div className="logo">
							<Link style={{ textDecoration: "none" }} to="/">
								Furniture Design, Inc.
							</Link>
						</div>
						<Link style={{ textDecoration: "none" }} to="/outdoor">
							<li>Outdoor</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/indoor">
							<li>Indoor</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/new">
							<li>New</li>
						</Link>
					</div>
					<div className="header-right">
						<Link style={{ textDecoration: "none" }} to="/cart">
							<div>
								{el} ({number.length})
							</div>
						</Link>
					</div>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
