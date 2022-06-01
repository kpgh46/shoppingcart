import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/Landing";
import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Indoor from "./components/Indoor";
import New from "./components/New";
import ShoppingPage from "./components/ShoppingPage";

let RouteSwitch = () => {
	return (
		<div>
			<BrowserRouter>
				{<Header />}
				<Routes>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/outdoor" element={<ShoppingPage />}></Route>
					<Route path="/indoor" element={<ShoppingPage />}></Route>
					<Route path="/new" element={<New />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;
