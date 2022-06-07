import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";

let ItemDetail = (props) => {
	let { id } = useParams();
	let truck = <FontAwesomeIcon icon={faTruckArrowRight} />;

	let product = data.find((item) => {
		return item.id === parseInt(id);
	});

	let capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

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
				<h2>{capitalize(product.title)}</h2>
				<h4>${product.price}</h4>
				<p>{product.description}</p>
				<button
					className="addToCart"
					onClick={() => props.handleAddToCart(parseInt(id))}
				>
					Add to Cart - ${product.price}
				</button>

				<div className="shipping"></div>
				{truck}
			</div>
		</div>
	);
};

export default ItemDetail;
