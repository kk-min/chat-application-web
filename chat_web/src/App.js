import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/chat' element={<ChatScreen />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
