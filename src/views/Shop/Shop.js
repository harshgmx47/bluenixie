import React from "react";
import '../../App.css';
import Link from "@material-ui/core/Link";
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
            <div>
            <NavBar />
            </div>
            <div className="container-fluid py-4">
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
                                                    <Link href="home">Home</Link> </span>
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
                                                    <Link href="#!"> Apple</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Rolex</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!"> Rado</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Seiko</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Samsung</Link> 
                                                </li>
                                            </ul>
                                            <ul className="list">
                                                <p>Color</p>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Black</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Black Leather</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Gold</Link> 
                                                </li>
                                                <li>
                                                    <input type="radio" aria-label="radio button" />
                                                    <Link href="#!">Space grey</Link> 
                                                </li>

                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30"><Link className="card-img-tiles" href="#!" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </Link> 
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <Link className="btn btn-outline-primary btn-sm" href="product" data-abc="true">View Products</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30">
                                    <Link className="card-img-tiles" href="#!" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </Link> 
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <Link className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-7 col-md-4 ">
                                <div className="card mb-30"><Link className="card-img-tiles" href="#!" data-abc="true">
                                    <div className="inner">
                                        <div className="main-img">
                                            <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                        </div>
                                    </div>
                                </Link> 
                                    <div className="card-body text-center">
                                        <h4 className="card-title">Lingerie</h4>
                                        <p className="text-muted">Starting from $50</p>
                                        <Link className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</Link> 
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
                        <div className="card mb-30"><Link className="card-img-tiles" href="#!" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                </div>
                            </div>
                        </Link> 
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $50</p>
                                <Link className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30"><Link className="card-img-tiles" href="#!" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />
                                </div>
                            </div>
                        </Link> 
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $50</p>
                                <Link className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</Link> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card mb-30"><Link className="card-img-tiles" href="#!" data-abc="true">
                            <div className="inner">
                                <div className="main-img">
                                    <img className="img-thumbnail custom-img" src={ShopCategory1} alt="Category" />

                                </div>
                            </div>
                        </Link> 
                            <div className="card-body text-center">
                                <h4 className="card-title">Lingerie</h4>
                                <p className="text-muted">Starting from $9</p>
                                <Link className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</Link> 
                            </div>
                        </div>
                    </div>
                </div>*/}
            <div className="App">
            <FootBar />
            </div>
        </div>
    );
};
export default Shop;