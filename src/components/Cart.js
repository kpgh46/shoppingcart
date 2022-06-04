import React from "react";
import Purchased from "./Purchased";

let Cart = (props) => {
	let items = props.items;
	let purchased = items.filter((item) => {
		return item.inCart;
	});

	let inCart = purchased.map((item) => {
		return (
			<div>
				<Purchased
					image={Object.values(item.image)}
					title={item.title}
					price={item.price}
				/>
			</div>
		);
	});

	return (
		<div>
			<h2>Cart</h2>
			<div className="cart-container">{inCart}</div>
			<div>Total: </div>
		</div>
	);
};

export default Cart;
