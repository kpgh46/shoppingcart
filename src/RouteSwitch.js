import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/Landing";

let RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
