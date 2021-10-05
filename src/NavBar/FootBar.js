import React from "react";
import payment from '../img/payment.png';
const FootBar = () => {
    return(
        <div className='App-header'>
        <div className="row col-lg-12">
        <div className="col-lg-3">
      <p>About Us</p>
      <p className="small-font-navbar">Welcome to the world of The Bluenixie.
<br/><br/>
We founded The Bluenixie in November of 2016 as a celebration of pleasure in all its forms. In our creative process</p>
    <p>Follow Us</p>
    <p>
    </p>
      </div>
      <div className="col-lg-3">
      <p>Information</p>
      <p className="small-font-navbar">
      About Us</p>
      <p className="small-font-navbar">
Shipping Policy
</p>
      <p className="small-font-navbar">
Privacy Policy</p>
      <p className="small-font-navbar">
Terms & Conditions</p>
      <p className="small-font-navbar">
Return Policy</p>
      </div>
      <div className="col-lg-3">
      <p>My Account</p>
      <p className="small-font-navbar">
      Contact Us
</p>
      <p className="small-font-navbar">
      Returns
</p>
      <p className="small-font-navbar">

      My Account
</p>
      <p className="small-font-navbar">
      Order History
</p>
      <p className="small-font-navbar">
      Wish List
</p>
<p className="small-font-navbar">
Newsletter
</p>
      </div>
      <div className="col-lg-3">
      <p>Get In Touch</p>
      <p className="small-font-navbar">
      Blue Nixie OPC Pvt Ltd.
4th floor ,plot no.34,jogeshwarpuri ,
badri saraf service road,
Vikas Nagar, Lucknow UP 226022
<br/>
<br/>
Phone:  +91 85915 70804,
                +91 9819 727019
                <br/><br/>
Email: info@bluenixie.in
</p>
<p><img src={payment} alt="payment"></img></p>
      </div>
        </div>
        </div>
    );
};
export default FootBar;