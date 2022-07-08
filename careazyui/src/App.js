import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Signup from "./components/signup";
import Welcome from "./components/welcome";
function App() {
  return (
    <>
      <NavBar />
      <Welcome />
    </>
  );
}

export default App;
