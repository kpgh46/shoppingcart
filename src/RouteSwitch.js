import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/Landing";
import Header from "./components/Header";
import data from "./data";
import New from "./components/New";
import ShoppingPage from "./components/ShoppingPage";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

let RouteSwitch = () => {
	let indoorData = data.filter((item) => {
		return item.type === "indoor";
	});
	let outdoorData = data.filter((item) => {
		return item.type === "outdoor";
	});

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
