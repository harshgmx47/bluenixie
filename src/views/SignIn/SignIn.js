import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import { SignUp } from "../SignUp";

function SignIn() {
    return (
        <div>
        <div className="container-fluid">
            <header className="row-header ">
                <NavBar />
            </header>
            <div className="container">
                <div className="row row-content justify-content-center align-items">
                   
                    <div className="col-12 col-sm-5 ">
                        <form>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-md-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-md-2  col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label class ="form-check-label" for="gridCheck1">
                                        Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-secondary">Sign in</button>
                            <div className="leftMargin">
                            <div className="text-center mx-auto mt-2 ">
                                     <a href="signup" className="text-decoration-none btn btn-primary text-monospace ">Create a new Account..!Signup Here</a>
                                </div>                          
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            </div>
            <div className="row-content">
                <footer className="custom-footer" >
                    <FootBar />
                </footer>
            </div>

</div>
       
    );
};
export default SignIn;