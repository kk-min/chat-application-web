import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
