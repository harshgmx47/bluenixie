//import banner2 from './img/banner-2.jpg'
import newArrival from './img/new-arrival.jpg'
import './App.css';
// import Slider from './views/Slider/Slider';
import Banner from './views/Slider/Banner';
import NavBar from './NavBar/NavBar';
import FootBar from './NavBar/FootBar';
import MiddleBanner from './views/Slider/MiddleBanner';

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


<div >
<MiddleBanner />
</div>

<div className="container  mb-10">
<div className="row row-content mb-10">
<div className="col-md-4 col-lg-4">
            <div className="card mb-80 ">
              <a className="card-img-resposive" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-fluid custom-img" src={"	https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-home_default.jpg"} alt="Category"/>
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
            <div className="card mb-30">
            <a className="card-img-resposive" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-fluid custom-img" src={"	https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-home_default.jpg"} alt="Category"/>
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
            <div className="card mb-30">
            <a className="card-img-resposive" href="#!" data-abc="true">
                    <div className="inner">
                        <div className="main-img">
                            <img className="img-fluid custom-img" src={"	https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/img/p/1/7/0/170-home_default.jpg"} alt="Category"/>
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
