import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/Landing";
import Header from "./components/Header";
import data from "./data";
import New from "./components/New";
import ShoppingPage from "./components/ShoppingPage";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import React from "react";

let RouteSwitch = () => {
	let [productData, setProductData] = React.useState(data);

	let handleAddToCart = (id) => {
		setProductData((previousData) =>
			previousData.map((data) => {
				return data.id === id ? { ...data, inCart: true } : data;
			})
		);
	};

	let increaseQuantity = (id) => {
		setProductData((previousData) =>
			previousData.map((data) => {
				return data.id === id
					? { ...data, quantity: data.quantity++ }
					: data;
			})
		);
	};
	let decreaseQuantity = (id) => {
		setProductData((previousData) =>
			previousData.map((data) => {
				return data.id === id
					? { ...data, quantity: data.quantity-- }
					: data;
			})
		);
	};

	let removeFromCart = (id) => {
		setProductData((previousData) =>
			previousData.map((data) => {
				return data.id === id ? { ...data, inCart: false } : data;
			})
		);
	};

	return (
		<div>
			<BrowserRouter>
				<HashRouter basename="/">
					{<Header data={productData} />}
					<Routes>
						<Route path="/home" element={<HomePage />}></Route>
						<Route path="/" element={<LandingPage />}></Route>
						<Route
							path="/outdoor"
							element={
								<ShoppingPage
									page="outdoor"
									items={productData}
								/>
							}
						></Route>
						<Route
							path="/indoor"
							element={
								<ShoppingPage
									page="indoor"
									items={productData}
								/>
							}
						></Route>
						<Route
							path="/new"
							element={
								<ShoppingPage page="new" items={productData} />
							}
						></Route>

						<Route
							path="indoor/itemdetail/:id"
							element={
								<ItemDetail handleAddToCart={handleAddToCart} />
							}
						></Route>
						<Route
							path="outdoor/itemdetail/:id"
							element={
								<ItemDetail handleAddToCart={handleAddToCart} />
							}
						></Route>
						<Route
							path="new/itemdetail/:id"
							element={
								<ItemDetail handleAddToCart={handleAddToCart} />
							}
						></Route>
						<Route
							path="/cart"
							element={
								<Cart
									items={productData}
									increaseQuantity={increaseQuantity}
									decreaseQuantity={decreaseQuantity}
									removeFromCart={removeFromCart}
								/>
							}
						></Route>
					</Routes>
				</HashRouter>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
