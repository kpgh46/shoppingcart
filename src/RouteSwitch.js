import { BrowserRouter, Routes, Route } from "react-router-dom";
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
	let indoor = data.filter((item) => {
		return item.type === "indoor";
	});
	let outdoor = data.filter((item) => {
		return item.type === "outdoor";
	});

	let [indoorData, setIndoorData] = React.useState(indoor);
	let [outdoorData, setOutdoorData] = React.useState(outdoor);

	return (
		<div>
			<BrowserRouter>
				{<Header />}
				<Routes>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/" element={<LandingPage />}></Route>
					<Route
						path="/outdoor"
						element={
							<ShoppingPage page="outdoor" items={outdoorData} />
						}
					></Route>
					<Route
						path="/indoor"
						element={
							<ShoppingPage page="indoor" items={indoorData} />
						}
					></Route>
					<Route path="/new" element={<New />}></Route>
					<Route
						path="indoor/itemdetail/:id"
						element={<ItemDetail />}
					></Route>
					<Route
						path="outdoor/itemdetail/:id"
						element={<ItemDetail />}
					></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
