import React from "react";
import NavBar from '../../NavBar/NavBar';
import FootBar from '../../NavBar/FootBar';
import Link from "@material-ui/core/Link";
import './product.css'
import { img, Container, Row, Col, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
// import ShopCategory1 from '../../img/shop-category-1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Product() {
    return (
        <div>
            <NavBar />
            <div className="container">
                {/* Block content section */}
                <Container >
                    <Row className="mb-5 mt-5">
                        <Col xs={6} md={4} >
                            <div >
                            <div className="col-12 main-img mb-0">
                                <figure className="view overlay rounded z-depth-1 main-img">
                                    <Link href="#1"
                                        data-size="710x823">
                                        <img src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-large_default.jpg"
                                            className="img-fluid cusotm-img-size z-depth-1 " alt="" />
                                    </Link> 
                                </figure>
                                
                                {/* <figure className="view overlay rounded z-depth-1" >
                                    <Link href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                        data-size="710x823">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                            className="img-fluid z-depth-1" />
                                    </Link> 
                                </figure>
                                <figure className="view overlay rounded z-depth-1">
                                    <Link href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                        data-size="710x823">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                            className="img-fluid z-depth-1" />
                                    </Link> 
                                </figure>
                                <figure className="view overlay rounded z-depth-1" >
                                    <Link href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                        data-size="710x823">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                            className="img-fluid z-depth-1" />
                                    </Link> 
                                </figure> */}
                            
                        </div>
                        <div className="col-12 extra-img">
                            <div className="row">
                                <div className="col-3">
                                    <div className="view overlay rounded z-depth-1 gallery-item">
                                        <img src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-large_default.jpg"
                                            className="img-fluid" alt=""/>
                                        <div class="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="view overlay rounded z-depth-1 gallery-item">
                                        <img src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-large_default.jpg"
                                            className="img-fluid" alt=""/>
                                        <div className="mask rgba-white-slight" ></div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="view overlay rounded z-depth-1 gallery-item">
                                        <img src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-large_default.jpg"
                                            className="img-fluid" alt=""/>
                                        <div className="mask rgba-white-slight"></div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="view overlay rounded z-depth-1 gallery-item">
                                        <img src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-large_default.jpg"
                                            className="img-fluid" alt="" />
                                        <div class ="mask rgba-white-slight">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </Col>
                <Col></Col>
                <Col xs={6} md={6} >
                    <div className="pro_desc" >
                    <h3 className="h5 pro_desc">Curabitur Dolor Nunc</h3>
                    <p className="mb-2 text-muted text-uppercase small">Shirts</p>
                    <div className="product-price pro_desc">
                        <div className="product-price h5 has-discount">
                            <div className="current-price">
                                <span className="align-items-cnter" content="19.12">???19.12</span>
                                <span className="discount discount-percentage">Save 20%</span>
                            </div>
                        </div>
                        <div className="product-discount">
                            <span className="regular-price h6 ml-8">???23.90</span>
                        </div>
                    </div>
                    <div className="pro_desc col-md-12">
                        <p className="pt-1 h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                            error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                            officia quis dolore quos sapiente tempore alias.</p>
                        <div>
                            <MDBTable borderless borderColor="primary" >
                                <MDBTableBody >
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Model</strong></th>
                                        <td>Shirt 5407X</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Color</strong></th>
                                        <td>Black</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                        <td>USA, Europe</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                        <hr />
                        <div>
                            <MDBTable borderless borderColor="primary">
                                <MDBTableBody >
                                    <tr>
                                        <td className="pl-0 pb-0 w-25">Quantity</td>
                                        <td className="pb-0">Select size</td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0">
                                            <div className="d-flex p-0">
                                                <Button className="plus" variant="light">+</Button>
                                                <input className="form-control" min="0" name="quantity" value="1" type="number"></input>
                                                <Button className="minus" variant="light">-</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="mt-1">
                                                <div className="form-check form-check-inline pl-0">
                                                    <input type="radio" className="form-check-input" id="small" name="materialExampleRadios"
                                                         />
                                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                                        for="small">Small</label>
                                                </div>
                                                <div className="form-check form-check-inline pl-0">
                                                    <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios" />
                                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                                        for="medium">Medium</label>
                                                </div>
                                                <div className="form-check form-check-inline pl-0">
                                                    <input type="radio" className="form-check-input" id="large" name="materialExampleRadios" />
                                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                                        for="large">Large</label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                        {/* BUYNOW AND ADDTOCART BUTTONS */}
                        <div>
                        <button type="button" className="btn btn-primary btn-md mr-2 mb-2 custom-button"><span className="p-2">Buy now</span></button>
                        <button type="button" className="btn btn-light btn-md mr-2 mb-2 custom-button">
                            <i className="p-2"><FontAwesomeIcon icon={faShoppingCart} /></i>Add to cart</button>
                        </div>
                        {/* BUYNOW AND ADDTOCART BUTTONS */}
                    </div>
                </div>
                </Col>

            </Row>
        </Container>
                {/* Block content section */ }

            </div >
        <FootBar className="footer mx-auto py-3" />
        </div >
    );
};
export default Product;