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
			<div>
				<Purchased
					image={Object.values(item.image)}
					title={item.title}
					price={item.price}
					quantity={item.quantity}
				/>
				<button
					onClick={() => props.increaseQuantity(parseInt(item.id))}
				>
					UP
				</button>
				<button
					onClick={() => props.decreaseQuantity(parseInt(item.id))}
				>
					Down
				</button>
			</div>
		);
	});

	return (
		<div>
			<h2>Cart</h2>
			<div className="cart-container">{inCart}</div>
			<div>Total: {total()} </div>
		</div>
	);
};

export default Cart;
