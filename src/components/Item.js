import React from "react";
import { Link } from "react-router-dom";

let Item = (props) => {
	let source = props.source;
	// console.log(props);

	return (
		<div className="item-container">
			<Link to={`itemdetail/${props.id}`}>
				<img
					className="main-item-photo"
					src={source}
					alt="item photo"
				></img>
			</Link>
			<div>{props.title}</div>
			<div>{props.price}</div>
			<div>{props.description}</div>
		</div>
	);
};

export default Item;
