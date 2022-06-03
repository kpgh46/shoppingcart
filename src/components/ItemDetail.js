import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

let ItemDetail = (props) => {
	let { id } = useParams();

	let product = data.find((item) => {
		return item.id === parseInt(id);
	});

	// let handleChange = (id) => {
	// 	props.onClick(id);
	// };

	return (
		<div className="itemdetail-container">
			<div className="itemdetail-left">
				<img
					className="itemdetail-photo"
					src={Object.values(product.image)}
					alt="photo"
				></img>
			</div>

			<div className="itemdetail-right">
				<h2>{product.title}</h2>
				<h4>{product.price}</h4>
				<p>{product.description}</p>
				<button onClick={() => props.handleAddToCart(parseInt(id))}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ItemDetail;
