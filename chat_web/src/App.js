import React from "react";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";
import Debug from "./pages/Debug.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/debug" element={<Debug />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
