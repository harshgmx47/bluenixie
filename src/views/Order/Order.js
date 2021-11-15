import React from "react";
import '../../App.css';
import NavBar from '../../NavBar/NavBar';
// import { BrowserRouter as Router,Link } from 'react-router-dom';
import FootBar from '../../NavBar/FootBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Order() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
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
                                <label for="inputCom" className="col-md-3 col-form-label">Company</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputCom" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputAdd" className="col-md-3 col-form-label">Address</label>
                                <div className="col-sm-7">
                                    <textarea type="text" className="form-control" id="inputAdd" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputCt" className="col-md-3 col-form-label">City</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputCt" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputSt" className="col-md-3 col-form-label">State</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputSt" />
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputCoun" className="col-md-3 col-form-label">Country</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="inputCoun" readonly value="India"/>
                                </div>
                            </div>
                            <div className="row  justify-content-center align-items mb-3">
                                <label for="inputPc" className="col-md-3 col-form-label">Pincode</label>
                                <div className="col-sm-7">
                                    <input type="number" maxlength="6" className="form-control" id="inputPc" />
                                </div>
                            </div>
                            <div className="row justify-content-center align-items">
                                <div className="col-md-4">
                                <button type="submit" className="btn btn-secondary">Submit</button>

                                </div>                     
                                </div>
                        </form>
                    </div>
                </div>

            </div>
                        <div className="App">
                            <FootBar />
                        </div>
                        </div>
                
               
              
                    
                    );
};
 export default Order;