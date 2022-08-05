import React from "react";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
