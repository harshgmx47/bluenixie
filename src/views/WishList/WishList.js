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
                        <div className="inner col-lg-4">
                            <div className="main-img">
                                <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                            </div>
                        </div>
                        <div className="col-lg-8">
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