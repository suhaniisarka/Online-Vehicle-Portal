import React from "react";
function ContactUs() {
  return (
    <>
      <div
        className="container center"
        style={{
          display: "flex",
          //alignItems: "center",
          paddingTop: 30,
          justifyContent: "center",
          //height: "100vh",
          //borderColor: "white",
          borderWidth: 3,
        }}
      >
        <h2>Contact Us</h2>
        <br />
        <p style={{ color: "white", paddingTop: 20 }}>
          contact info here
        </p>
      </div>
    </>
  );
}

export default ContactUs;