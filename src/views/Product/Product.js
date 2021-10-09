import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import ShopCategory1 from '../../img/shop-category-1.jpg';

function Product() {
    return (
        <div>
            <NavBar />
            <div>
                {/* Block content section */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-md-0">
                            <div>
                                <div className="row">

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
             
                {/* Block content section */}

            </div>
            <FootBar  className="footer mx-auto py-3"/>
        </div>
    );
};
export default Product;