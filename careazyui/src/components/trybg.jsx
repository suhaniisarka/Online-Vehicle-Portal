import React, { Component } from "react";
import logo from "../images/clogo.png";
class Background extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundImage: "url(" + logo + ")" }}>helllo world</div>
    );
  }
}

export default Background;
