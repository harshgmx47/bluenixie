
import banner1 from './img/banner-1.jpg'
//import banner2 from './img/banner-2.jpg'
import smallimg1 from './img/small-img-1.jpg'
import smallimg2 from './img/small-img-2.jpg'
import newArrival from './img/new-arrival.jpg'
import './App.css';
// import Slider from './views/Slider/Slider';
import Banner from './views/Slider/Banner';
import NavBar from './NavBar/NavBar';
import FootBar from './NavBar/FootBar';

function App() {
  return (
    <div className="App">
       <header>
       <NavBar />
       {/* Banner Section */}
       <div className="mt-5">
      <Banner />
      </div>
     {/* Banner Section */}

      
<div className="row row-content">

      <div
        className='p-5 text-center bg-image col-lg-3'
        style={{ height: 320 }}
      >
        <div className="position-relative">
        <img src={smallimg1} className="img-fluid" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-over'>
             <h2>Clothing.No18</h2>
             <h5>Sale Off 20% All Store</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        className='p-5 text-center bg-image col-lg-6'
        style={{ height: 320 }}
      ><div className="position-relative">
        <img src={banner1} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-over'>
             <h2>Men’s Summer Sneaker</h2>
             <h5>Big Sale Off This Week</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        className='p-5 text-center bg-image col-lg-3'
        style={{ height: 320 }}
      >
        <div className="position-relative">
        <img src={smallimg2} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-over'>
              <h2>Bag.No1</h2>
              <h5>Big Sale No Limited</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
</div>
<div className="container">
<div className="row">
<div className="col-md-4 col-sm-7">
            <div className="card mb-30"><a className="card-img-tiles" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-thumbnail custom-img" src={newArrival} alt="Category"/>
                            </div>
                    </div>
                </a>
                <div className="card-body text-center">
                    <h4 className="card-title">ELIZA-BNF 357 MAROON</h4>
                    <p className="text-muted">₹399</p>
                    <a className="btn btn-outline-primary btn-sm" href="product" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-7">
            <div className="card mb-30"><a className="card-img-tiles" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-thumbnail custom-img" src={newArrival} alt="Category"/>
                            </div>
                    </div>
                </a>
                <div className="card-body text-center">
                    <h4 className="card-title">ELIZA-BNF 357 MAROON</h4>
                    <p className="text-muted">₹399</p>
                    <a className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6">
            <div className="card mb-30"><a className="card-img-tiles" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-thumbnail custom-img" src={newArrival} alt="Category"/>
                            </div>
                    </div>
                </a>
                <div className="card-body text-center">
                    <h4 className="card-title">ELIZA-BNF 357 MAROON</h4>
                    <p className="text-muted">₹399</p>
                    <a className="btn btn-outline-primary btn-sm" href="#!" data-abc="true">View Products</a>
                </div>
            </div>
        </div>
  {/*
<div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <div className="position-relative">
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-over'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <div className="position-relative">
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-over'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <div className="position-relative">
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-over'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        className='p-5 text-left bg-image col-lg-3'
        style={{ height: 420 }}
      >
        <div className="position-relative">
        <img src={newArrival} className="smallimg" alt="banner" />
        <div className='mask'>
          <div className='d-flex justify-content-left align-items-left'>
            <div className='text-over'>
             <h6>ELIZA-BNF 357 MAROON</h6>
             <p>₹399</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  */}
</div>
</div>

<FootBar />
    </header>
   </div>
  );
}

export default App;
