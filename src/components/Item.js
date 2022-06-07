/* eslint-disable jsx-a11y/img-redundant-alt */
import { faL } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

let Item = (props) => {
	let source = props.source;

	let [over, setOver] = React.useState(false);
	console.log(over);

	return (
		<div
			onMouseOver={() => setOver(true)}
			onMouseOut={() => setOver(false)}
			className="item-container"
		>
			<Link to={`itemdetail/${props.id}`}>
				<img
					className={
						over
							? "main-item-photo item-overlay"
							: "main-item-photo"
					}
					src={source}
					alt="item photo"
				></img>
			</Link>
			<div className="item-details">
				<div>
					<div>{props.title}</div>
					<div>{props.price}</div>
				</div>

				{over ? <div className="details-button">Details</div> : ""}
			</div>
		</div>
	);
};

export default Item;
