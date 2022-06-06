import React from "react";

let Purchased = (props) => {
	return (
		<div>
			<img
				className="image-incart"
				src={props.image}
				alt={props.title}
			></img>

			<h4>{props.title}</h4>
			<h4>{props.price}</h4>
			<h4>Quantity: {props.quantity}</h4>
			<h4>Total:{props.price * props.quantity} </h4>
		</div>
	);
};

export default Purchased;
