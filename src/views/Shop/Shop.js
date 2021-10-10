import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
//import ShopImg1 from '../../img/shop-img-1.jpg';
//import ShopImg2 from '../../img/shop-img-2.jpg';
import ShopCategory1 from '../../img/shop-category-1.jpg';
import './shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Shop() {
    return (
        <div>
            <NavBar />
            <div className="container-fluid">
                <section className="category">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 bg-red">
                                <div>
                                    <aside className="side-area product-side side-shadow">
                                        <div className="side-title">
                                            <h3>Category</h3>
                                        </div>
                                        <div className="side-content">
                                            <ul className="list">
                                                <li><span className="collasp">
                                                    <a href="home">Home</a></span>
                                                    </li>
                                            </ul>
                                        </div>
                                        <div className="side-title">
                                            <h3>Product Title</h3>
                                        </div>
                                        <div className="side-content">
                                            <ul className="list">
                                                <p>Brands</p>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href=""> Apple</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Rolex</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href=""> Rado</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Seiko</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Samsung</a>
                                                </li>
                                            </ul>
                                            <ul className="list">
                                                <p>Color</p>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Black</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Black Leather</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Gold</a>
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <a href="">Space grey</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </a>
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <a className="btn btn-outline-primary btn-sm" href="product" data-abc="true">View Products</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </a>
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </a>
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                                    </div>
                                </div>
                            </div>
</div>
</div>
                        </div>
                    </div>
                </section>
            </div>

            {/*<div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                </div>
                            </div>
                        </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $50</p>
                                <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                </div>
                            </div>
                        </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $50</p>
                                <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30"><a className="card-img-tiles" href="" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />

                                </div>
                            </div>
                        </a>
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $9</p>
                                <a className="btn btn-outline-primary btn-sm" href="" data-abc="true">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>*/}

            <FootBar />
        </div>
    );
};
export default Shop;