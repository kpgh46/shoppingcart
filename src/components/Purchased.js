import React from "react";

let Purchased = (props) => {
	return (
		<div>
			<img
				className="image-incart"
				src={props.image}
				alt={props.title}
			></img>
			<div>Quantity: 1</div>
			<h4>{props.title}</h4>
			<h4>{props.price}</h4>
		</div>
	);
};

export default Purchased;
