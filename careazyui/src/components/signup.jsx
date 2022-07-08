import React, { Component } from "react";
class Signup extends Component {
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
                    <div className="mb-md-2 mt-md-3 pb-2">
                      <h2 className="fw-bold mb-4 text-uppercase">Sign Up</h2>
                      <div className="form-outline form-black mb-2">
                        <input
                          type="text"
                          id="typeNameX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeNameX">
                          Enter Name
                        </label>
                      </div>
                      <div className="form-outline form-black mb-2">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Enter Email
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Enter Password
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 px-5"
                        type="button"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        }}
                      >
                        Register
                      </button>
                    </div>
                    <div>
                      <p className="mb-0">
                        Already have an account?{" "}
                        <a href="#!" className="text-blue-50 fw-bold">
                          Sign In
                        </a>
                      </p>
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

export default Signup;
