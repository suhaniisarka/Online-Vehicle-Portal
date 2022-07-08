import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Signup from "./components/signup";
function App() {
  return (
    <>
      <NavBar />
      <Signup />
    </>
  );
}

export default App;
