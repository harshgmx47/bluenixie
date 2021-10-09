import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import Card from 'react-bootstrap/Card';
import ShopCategory1 from '../../img/shop-category-1.jpg';


function WishList() {
    return (
        <div>
            <NavBar />
            <Card className="container col-lg-8">
                <Card.Body>
                    <blockquote className="blockquote mb-0 row">
                        <div className="inner col-lg-3">
                            <div className="main-img">
                                <img className="img-thumbnail custom-img-2" src={ShopCategory1} alt="Category" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>
                                LUXURIA-BNF 356 <br />
                                ₹375
                            </h3>
                            <br />
                            <h6>
                                Product Code: BNF 356
                                <br />
                                Availability: In Stock
                            </h6>
                            <br />
                            <div className="row">
                            <button className="btn btn-secondary col-lg-5">Add To Cart</button>
                            <button className="btn btn-danger col-lg-5">Remove</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <label className="col-md-4">Size</label> 
                            <select className="form-control col-md-6">
                                <option value="S" selected>S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <label className="col-md-4">Qty</label> 
                            <select className="form-control col-md-6">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <label className="col-md-4">Color</label> 
                            <select className="form-control col-md-6">
                            <option value="White" selected>White</option>
                                <option value="Black" style={{background:'black', color:"white"}} >Black</option>
                            <option value="Maroon" style={{background:'maroon', color:"white"}} >Marron</option>
                                
                            </select>

                        </div>
                    </blockquote>
                </Card.Body>
            </Card>
            <br />
            <FootBar />
        </div>
    );
};

export default WishList;