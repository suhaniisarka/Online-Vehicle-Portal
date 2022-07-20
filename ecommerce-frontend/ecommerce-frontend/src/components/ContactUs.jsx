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
          background:'#696969',
        }}
      >
        <a style={{ color: "white",fontSize:"45px"}}>Contact Us</a>
        <div style={{display:"grid"}}><p style={{ color: "white"}}>
          <a style={{fontSize:"30px"}}>Feel free to reach out to us at any of the following!</a>
          <br />
          <div>
          <img src={'email.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Email-Id: abcd@dummy.com</a>
          </div>
        </p></div>
        
      </div>
    </>
  );
}

export default ContactUs;