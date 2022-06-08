import React from "react";

let Purchased = (props) => {
	let capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className="purchased-item">
			<img
				className="image-incart"
				src={props.image}
				alt={props.title}
			></img>
			<h4 className="quantity">Quantity: {props.quantity}</h4>

			<h4>
				{capitalize(props.title)} - ${props.price}
			</h4>

			<h4>Total:${props.price * props.quantity} </h4>
		</div>
	);
};

export default Purchased;
