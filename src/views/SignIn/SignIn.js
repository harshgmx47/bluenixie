import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
    return (
        <div className="App">
        <div className="container-fluid">
            <header className="row-header ">
                <NavBar />
            </header>
            <div className="container">
                <div className="row row-content justify-content-center align-items">
                    <div className="col-sm-7 col-md-6">
                        <form>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputEmail3" className="col-md-2 col-form-label">Email</label>
                                <div className="col-sm-7">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputPassword3" className="col-md-2  col-form-label">Password</label>
                                <div className="col-sm-7">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div> 
                            <div className="row justify-content-center align-items">
                                <div className="col-md-3">
                                <button type="submit" className="btn btn-secondary">Sign in</button>
                                </div>
                            <div className="col-md-7">
                                     <a href="signup" className="text-decoration-none text-monospace">
                                     <button type="submit" className="btn btn-primary">Create a new Account..!Signup Here</button>
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
export default SignIn;