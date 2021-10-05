import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import ShopImg1 from '../../img/shop-img-1.jpg';
import ShopImg2 from '../../img/shop-img-2.jpg';
import ShopCategory1 from '../../img/shop-category-1.jpg';

function Shop() {
    return(
        <div>
        <NavBar />
        <div className="row">
            <div className="col-lg-3">
                <h4>Shop by Category</h4>
                <h6>Bra (19)</h6>
                <h6>Camisoles (0)</h6>
                <h6>Lounge Wear (1)</h6>
                <h6>Pyjamas (0)</h6>
                <h6>T-Shirt (0)</h6>
                <img src={ShopImg2} alt="shopImg"></img>
            </div>
            <div className="col-lg-9">
                <img src={ShopImg1} alt="shopImg"></img>
                <div className="row">
                    <div className="col-lg-4">
                    <img src={ShopCategory1} alt="shopImg"></img>
                    <h6>SHEENA-BN 1602</h6>
                    <p>₹249</p>
                    </div>
                    <div className="col-lg-4">
                    <img src={ShopCategory1} alt="shopImg"></img>
                    <h6>SHEENA-BN 1602</h6>
                    <p>₹249</p>
                    </div>
                    <div className="col-lg-4">
                    <img src={ShopCategory1} alt="shopImg"></img>
                    <h6>SHEENA-BN 1602</h6>
                    <p>₹249</p>
                    </div>
                </div>
            </div>
        </div>
        <FootBar />
        </div>
    );
};
export default Shop; 