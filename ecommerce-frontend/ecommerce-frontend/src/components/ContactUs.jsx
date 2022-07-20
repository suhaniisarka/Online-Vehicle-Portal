import React from "react";
function ContactUs() {
  return (
    <>
      <div
        className="container center"
        style={{
          display: "grid",
          paddingTop: 3,
          //justifyContent: "center",
          border: 'solid',
        }}
      >
        <h2 style={{ color: "white"}}>Contact Us</h2>
        <div style={{display:"grid"}}><p style={{ color: "white"}}>
          <a>Feel free to reach out to us at any of the following!</a>
          <br />
          <img src={'email.png'} /><a>Email-Id: abcd@dummy.com</a>
        </p></div>
        
      </div>
    </>
  );
}

export default ContactUs;