import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
    return(
        <div className="App">
        <div className="container-fluid">
            <header className="row-header ">
                <NavBar />
            </header>
            <div className="container">
                <div className="row justify-content-center align-items mb-5">
                    <div className="col-sm-7 col-md-6">
                        <form>
                            
                        <div className="row  justify-content-center align-items mb-3">
                                <label for="inputTtl" className="col-md-3 col-form-label">Title</label>
                                <div className="col-sm-7">
                                    <span className="">
                                    <input type="radio" className="" name="inputTtl" id="inputTtl1" selected/>
                                    &nbsp;
                                    Mr.
                                    </span>
                                    <span  className="m-5">
                                    <input type="radio" className="" name="inputTtl" id="inputTtl2" />
                                    &nbsp;
                                    Ms.
                                    </span>
                                </div>
                            </div>
                        <div className="row  justify-content-center align-items mb-3">
                                <label for="inputFn" className="col-md-3 col-form-label">First Name</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputFn" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputLn" className="col-md-3 col-form-label">Last Name</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputLn" />
                                </div>
                            </div>
                            
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputEmail3" className="col-md-3 col-form-label">Email</label>
                                <div className="col-sm-7">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputPassword3" className="col-md-3  col-form-label">Password</label>
                                <div className="col-sm-7">
                                    <input type="password" className="form-control" id="inputPassword3" value=""/>
                                </div>
                            </div> 
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputBd" className="col-md-3 col-form-label">Birth Date</label>
                                <div className="col-sm-7">
                                    <input type="date" className="form-control" id="inputBd" />
                                </div>
                            </div>
                            <div className="row justify-content-center align-items">
                                <div className="col-md-3">
                                <button type="submit" className="btn btn-secondary">Sign up</button>

                                </div>
                            <div className="col-md-7">
                            <a href="SignIn" className="text-monospace btn btn-primary">
                                Already have Account...! Sign In
                                </a>
                                </div>                          
                                </div>
                        </form>
                    </div>
                </div>

            </div>
            </div>
            <FootBar />             
</div>
       
    );
};
export default SignUp; 