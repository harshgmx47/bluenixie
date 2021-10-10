import React from "react";
import logo from '../img/logo.png';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div>
    <MDBNavbar className="navbar navbar-expand-sm navbar-light fixed-top"  bgColor='white'>
      <MDBContainer  fluid >
        {/* {Brandh Logo} */}
        <div className="container justify-content-center align-items-center">
          <div className="row row-header">
        <a className="navbar-brand " href="Home">
          <img className="logo img-responsive" src={logo} height="" alt="mdb logo" />
        </a>
        </div>
        </div>
        
          {/* {Brandh Logo} */}
          <MDBNavbarNav right className="navbar-nav align-items-center d-lg-flex collapse navbar-collapse" id="NavBar">
            <MDBNavbarItem className="nav-item">
              <MDBNavbarLink className="small-font-navbar nav-link" href='Home'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="nav-item px-1  mb-0 position-relative d-lg-flex">
              <MDBNavbarLink className=" small-font-navbar  nav-link" href='shop'>Shop</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="nav-item px-1  mb-0 position-relative d-lg-flex">
              <MDBNavbarLink className=" small-font-navbar nav-link" href='offer'>Offer Zone</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="nav-item px-1 mb-0 position-relative d-lg-flex">
              <MDBNavbarLink className="small-font-navbar nav-link" href='about'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem className="nav-item px-1  mb-0 position-relative d-lg-flex">
              <MDBNavbarLink className="small-font-navbar nav-link" href='contact'>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav className='container navbar-nav justify-content-end flex-row align-items-center '>
            <div className="px-3">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <MDBNavbarItem className='socialIcon nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex'>
              <FontAwesomeIcon  className="m-2" icon={faSearch} />
              {/* <input type="text"></input> */}
            </MDBNavbarItem>
            <MDBNavbarItem className='socialIcon nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex'>
            <a className='nav-link' href="WishList">
              <FontAwesomeIcon icon={faHeart} />
              </a>
            </MDBNavbarItem>
            <MDBNavbarItem className="socialIcon nav-item  text-uppercase mb-0 position-relative d-lg-flex">
            <a className='nav-link' href="ShoppingCart"><FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-basket d-flex align-items-center justify-content-center">0</span>
            </a>
            </MDBNavbarItem>
            <MDBNavbarItem className='socialIcon nav-item px-3 mb-0 position-relative d-lg-flex'>
            <a className='nav-link' href="SignIn">
              <FontAwesomeIcon icon={faUser} />
            </a>
            </MDBNavbarItem>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
    <div className="row row-space"></div>
        </div>
  
  );

};
export default NavBar;