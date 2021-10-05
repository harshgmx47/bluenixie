import React from "react";
import logo from '../img/logo.png';

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon } from 'mdb-react-ui-kit';
    import 'bootstrap/dist/css/bootstrap.min.css';
  
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return(
        <MDBNavbar expand='lg' light bgColor='white'> 
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <img src={logo} className="bluenixielogo" alt="logo" />
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='Home'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='shop'>Shop</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='offer'>Offer Zone</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='about'>About Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='contact'>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
            <MDBNavbarItem className='socialIcon'>
            <FontAwesomeIcon icon={faSearch} />
              </MDBNavbarItem>
              <MDBNavbarItem className='socialIcon'>
            <FontAwesomeIcon icon={faHeart} />
              </MDBNavbarItem>
              <MDBNavbarItem className='socialIcon'>
            <FontAwesomeIcon icon={faShoppingCart} />
              </MDBNavbarItem>
            <MDBNavbarItem className='signinBtn'>
                <MDBNavbarLink className="small-font-navbar sign-in" href='signin'>Sign In</MDBNavbarLink>
              </MDBNavbarItem>
              </MDBNavbarNav>
          </div>
          
        </MDBContainer>

</MDBNavbar>
    );
    
};
export default NavBar;