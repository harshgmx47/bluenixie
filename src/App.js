import logo from './img/logo.png';
import payment from './img/payment.png';
import banner1 from './img/banner-1.jpg'
import banner2 from './img/banner-2.jpg'
import smallimg1 from './img/small-img-1.jpg'
import smallimg2 from './img/small-img-2.jpg'
import newArrival from './img/new-arrival.jpg'

import './App.css';
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

function App() {
  return (
    <div className="App">
       <header>
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
                <MDBNavbarLink className="small-font-navbar" href='#'>Offer Zone</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='about'>About Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className="small-font-navbar" href='#'>Contact Us</MDBNavbarLink>
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
                <MDBNavbarLink className="small-font-navbar sign-in" href='#'>Sign In</MDBNavbarLink>
              </MDBNavbarItem>
              </MDBNavbarNav>
          </div>
          
        </MDBContainer>

</MDBNavbar>
<div
        className='p-5 text-center bg-image '
        style={{ height: 550 }}
      >
        <img src={banner2} className="banner" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-black'>
              <h1 className='mb-3'>Top Trending</h1>
              <h4 className='mb-3'>Pink Color</h4>
              <a className='btn btn-outline-dark btn-lg' href='#!' role='button'>
                Discover Now
              </a>
            </div>
          </div>
        </div>
      </div>
<div className="row">

      <div
        className='p-5 text-center bg-image col-lg-3'
        style={{ height: 380 }}
      >
        <img src={smallimg1} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-black'>
             <h2>Clothing.No18</h2>
             <h5>Sale Off 20% All Store</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className='p-5 text-center bg-image col-lg-6'
        style={{ height: 380 }}
      >
        <img src={banner1} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-black'>
             <h2>Men’s Summer Sneaker</h2>
             <h5>Big Sale Off This Week</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className='p-5 text-center bg-image col-lg-3'
        style={{ height: 380 }}
      >
        <img src={smallimg2} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-black'>
              <h2>Bag.No1</h2>
              <h5>Big Sale No Limited</h5>
            </div>
          </div>
        </div>
      </div>
</div>

<div className="row">
<div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-black'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-black'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-black'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-black'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
      </div>
      <div className='App-header'>
        <div className="row col-lg-12">
        <div className="col-lg-3">
      <p>About Us</p>
      <p className="small-font-navbar">Welcome to the world of The Bluenixie.
<br/><br/>
We founded The Bluenixie in November of 2016 as a celebration of pleasure in all its forms. In our creative process</p>
    <p>Follow Us</p>
    <p>
    </p>
      </div>
      <div className="col-lg-3">
      <p>Information</p>
      <p className="small-font-navbar">
      About Us</p>
      <p className="small-font-navbar">
Shipping Policy
</p>
      <p className="small-font-navbar">
Privacy Policy</p>
      <p className="small-font-navbar">
Terms & Conditions</p>
      <p className="small-font-navbar">
Return Policy</p>
      </div>
      <div className="col-lg-3">
      <p>My Account</p>
      <p className="small-font-navbar">
      Contact Us
</p>
      <p className="small-font-navbar">
      Returns
</p>
      <p className="small-font-navbar">

      My Account
</p>
      <p className="small-font-navbar">
      Order History
</p>
      <p className="small-font-navbar">
      Wish List
</p>
<p className="small-font-navbar">
Newsletter
</p>
      </div>
      <div className="col-lg-3">
      <p>Get In Touch</p>
      <p className="small-font-navbar">
      Blue Nixie OPC Pvt Ltd.
4th floor ,plot no.34,jogeshwarpuri ,
badri saraf service road,
Vikas Nagar, Lucknow UP 226022
<br/>
<br/>
Phone:  +91 85915 70804,
                +91 9819 727019
                <br/><br/>
Email: info@bluenixie.in
</p>
<p><img src={payment} alt="payment"></img></p>
      </div>
        </div>
        </div>
</div>
    </header>
   </div>
  );
}

export default App;
