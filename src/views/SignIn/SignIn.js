import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';

function SignIn() {
    return(
        <div>
        <NavBar />
        <div style={{margin:50}}>
        <div className="row">
            <label className="col-lg-3">Email</label>
            <input className="col-lg-9 form-control" type="text" style={{width:400, height:25}} />
        </div>
        <br/>
        <div className="row">
            <label className="col-lg-3">Password</label>
            <input className="col-lg-9 form-control" type="text" style={{width:400, height:25}}/>
        </div>
        <div className="text-center">
        <br/>
        <button className="btn btn-secondary">Sign in</button>
        <p>Forgot your password?</p>
        <p>No account? Create one here</p>
        </div>
        </div>
        <FootBar />
        </div>
    );
};
export default SignIn; 