import React, { useState, useEffect } from "react";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NameScreen from "./pages/NameScreen";
import ChatScreen from "./pages/ChatScreen";
import Debug from "./pages/Debug";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() =>{
    document.body.style.overflow = "hidden";
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
					<Route path='*' element={<Navigate replace to='/' />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/name"
            element={<NameScreen setUserName={setUserName} />}
          />
          <Route path="/chat" element={<ChatScreen userName={userName} />} />
          <Route path="/debug" element={<Debug />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
