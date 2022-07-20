import React from "react";
import { UseNavigate } from "react-router-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
// import NavBar from "./components/navbar";
import Signup from "./components/signup";

import Welcome from "./components/welcome";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
