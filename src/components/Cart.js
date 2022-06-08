import React from "react";
import Purchased from "./Purchased";

let Cart = (props) => {
	let items = props.items;
	let purchased = items.filter((item) => {
		return item.inCart;
	});

	let total = () => {
		let result = purchased.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0);

		return result;
	};

	let inCart = purchased.map((item) => {
		return (
			<div className="test">
				<Purchased
					image={Object.values(item.image)}
					title={item.title}
					price={item.price}
					quantity={item.quantity}
				/>
				<div className="buttons">
					<button
						className="quantity-button"
						onClick={() =>
							props.increaseQuantity(parseInt(item.id))
						}
					>
						+
					</button>
					<button
						className="quantity-button"
						onClick={() =>
							props.decreaseQuantity(parseInt(item.id))
						}
					>
						-
					</button>
				</div>
			</div>
		);
	});

	return (
		<div>
			<h2>Cart</h2>
			<div className="cart-container">{inCart}</div>
			<div>Total: {total()}</div>
		</div>
	);
};

export default Cart;
