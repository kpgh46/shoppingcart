/* eslint-disable jsx-a11y/img-redundant-alt */
import { faL } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

let Item = (props) => {
	let source = props.source;
	console.log(source);

	let [over, setOver] = React.useState(false);

	let capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

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
					<div>
						{capitalize(props.title)} - ${props.price}
					</div>
				</div>

				{over ? (
					<Link
						style={{ textDecoration: "none" }}
						to={`itemdetail/${props.id}`}
					>
						<div className="details-button">Details</div>
					</Link>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Item;
