import React from "react";
import Purchased from "./Purchased";

let Cart = (props) => {
	let items = props.items;
	let purchased = items.filter((item) => {
		return item.inCart;
	});

	let total = () => {
		let result = purchased.reduce(function (total, item) {
			return total + item.price * item.quantity;
		}, 0);

		return result;
	};

	let inCart = purchased.map((item) => {
		return (
			<div className="cart-main">
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
						disabled={item.quantity < 1 ? true : false}
						className="quantity-button"
						onClick={() =>
							props.decreaseQuantity(parseInt(item.id))
						}
					>
						-
					</button>
					<button
						className="remove-button"
						onClick={() => props.removeFromCart(parseInt(item.id))}
					>
						Remove from Cart
					</button>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="cart-total">
				<h2>Cart ({purchased.length})</h2>
				<h2 className="total">Total: ${total()}</h2>
			</div>
			<div className="cart-container">{inCart}</div>
		</div>
	);
};

export default Cart;
