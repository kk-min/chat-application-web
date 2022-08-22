import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";
import Welcome from "./pages/Welcome";
import Debug from "./pages/Debug";

function App() {
	const [userName, setUserName] = useState();
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		document.body.style = "background: #e0dffa;";
		document.body.style.overflow = "hidden";
		document.title = "Chat with Min";
	});

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<Navigate replace to='/' />} />
					<Route
						path='/'
						element={
							<Home
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
							/>
						}
					/>
					<Route
						path='/chat'
						element={
							<ChatScreen
								userName={"LQY"}
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
							/>
						}
					/>
					<Route
						path='/welcome'
						element={
							<Welcome
								userName={userName}
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
							/>
						}
					/>
					<Route path='/debug' element={<Debug />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
