import React, { Component } from "react";
import logo from "../images/welcome.png";
import { withRouter } from "./withRouter";
class Welcome extends Component {
  render() {
    return (
      <>
        <section
          className="vh-100 gradient-custom"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                <div className="card bg-white text-black">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-2 mt-md-3 pb-5">
                      <div className="text-center mb-3">
                        <img src={logo} style={{ width: "185px" }} alt="logo" />
                      </div>
                      <div className="text-center">
                        <b style={{ fontSize: 28 }}>CarEazy</b>
                        <p style={{ fontSize: 22 }}>
                          Fast and Secure App to Buy and Sell
                          <br />
                          Cars
                        </p>
                      </div>
                      <div className="text-center mb-4">
                        <p style={{ fontWeight: 600 }}>Register or Login</p>
                      </div>
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2 px-3"
                        type="button"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          marginRight: 25,
                        }}
                        onClick={() => {
                          this.props.navigate("/signup");
                        }}
                      >
                        Sign Up
                      </button>
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2 px-3"
                        type="button"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                        onClick={() => {
                          this.props.navigate("/login");
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Welcome);
