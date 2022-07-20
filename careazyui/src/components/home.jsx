import React, { Component } from "react";
import NavBar from "./navbar";

import background from "../images/background.jfif";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div
          className="carousel-item active"
          style={{
            //backgroundImage: "url(" + background + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container py-4 h-300">
            <h2 className=" align-items-center h-100">
              Welcome to <span style={{ fontWeight: "bolder" }}>CarEazy</span>
            </h2>
            <p
              className="animate__animated animate__fadeInUp"
              style={{ fontColor: "white" }}
            >
              CarEazy provides you a platform to get a best deals for your next
              new car.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
