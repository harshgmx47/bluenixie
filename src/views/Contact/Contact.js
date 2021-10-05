import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';

function Contact() {
    return(
        <div>
        <NavBar />
        <div style={{margin:50}}>
        
        <div className="row">
        <div className="col-lg-4">
        <h1>Contact Us</h1>
        <h5>Our Location</h5>
        <b>
        bluenixie fashion & leisurewear
        </b>
        <br/>
        Malad
        <br/>
            <b>
            Telephone
            </b>
            <br/>
            85915 70804
        </div>
        <div className="col-lg-6">
        <div className="row">
            <label className="col-lg-3"><span className="text-danger">*</span>Your Name</label>
            <input className="col-lg-9 form-control" type="text" style={{width:400, height:25}} />
        </div>
        <br/>
        <div className="row">
            <label className="col-lg-3"><span className="text-danger">*</span>Email</label>
            <input className="col-lg-9 form-control" type="text" style={{width:400, height:25}}/>
        </div>
        <br/>
        <div className="row">
            <label className="col-lg-3"><span className="text-danger">*</span>Enquiry</label>
            <textarea className="col-lg-9 form-control" style={{width:400, height:100}}/>
        </div>
        </div>
        <div className="col-lg-2">
        <button className="btn btn-secondary">Submit</button>
        </div>
        </div>
        </div>
        <FootBar />
        </div>
    );
};
export default Contact; 