import React, { useState, useEffect } from "react";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NameScreen from "./pages/NameScreen";
import ChatScreen from "./pages/ChatScreen";
import Welcome from "./pages/Welcome";
import Debug from "./pages/Debug";

function App() {
	const [userName, setUserName] = useState();

	useEffect(() => {
		document.body.style = "background: #e0dffa;";
		document.body.style.overflow = "hidden";
	});

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/chat'
						element={<ChatScreen userName={"LQY"} />}
					/>
					<Route path='/welcome' element={<Welcome />} />
					<Route path='/debug' element={<Debug />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
