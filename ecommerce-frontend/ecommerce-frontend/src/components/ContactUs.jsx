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
          <br />
          <div>
          <img src={'email2.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Email-Id: abcd@dummy.com</a>
          </div>
          <br />
          <div>
          <img src={'address.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Address: Building alpha, 3rd Floor, X street, ABC</a>
          </div>
          <br />
          <div>
          <img src={'landline2.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Contact No: 123345678</a>
          </div>
          <br />
          <div>
          <img src={'cellphone1.png'} style={{width:'33px', paddingRight:'2px',paddingTop:"0px"}} />
          <a style={{fontSize:"22px",paddingTop:"2px"}}>Contact No(Mobile): 11111111</a>
          </div>
        </p></div>
        
      </div>
    </>
  );
}

export default ContactUs;