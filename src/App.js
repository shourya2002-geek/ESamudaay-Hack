import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {

	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
