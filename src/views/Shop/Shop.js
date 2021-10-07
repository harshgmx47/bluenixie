import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import ShopImg1 from '../../img/shop-img-1.jpg';
import ShopImg2 from '../../img/shop-img-2.jpg';
import ShopCategory1 from '../../img/shop-category-1.jpg';
import './shop.css'

function Shop() {
    return(
        <div>
        <NavBar />
        <div className="container mt-100">
    <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true" />
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-thumbnail custom-img"  src={ShopCategory1} alt="Category"/>
                        </div>
                      
                    </div>
                <div className="card-body text-center">
                    <h4 className="card-title">Laptops</h4>
                    <p className="text-muted">Starting from $499</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img src="https://i.imgur.com/uRgdVY1.jpg" alt="Category"/>

                            </div>
                      
                    </div>
                </a>
                <div className="card-body text-center">
                    <h4 className="card-title">Mobiles</h4>
                    <p className="text-muted">Starting from $50</p>
                    <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-fluid" src="https://i.imgur.com/0jO40CF.jpg" alt="Category" />

                        </div>
                    </div>
                </a>
                <div className="card-body text-center">
                    <h4 className="card-title">Accessories</h4>
                    <p className="text-muted">Starting from $9</p><a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
    </div>
</div>
        
        <FootBar />
        </div>
    );
};
export default Shop; 