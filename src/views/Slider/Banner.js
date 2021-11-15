
import { React, useState } from 'react';
import { Carousel } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router,Link } from 'react-router-dom';



function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
      
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/modules/tm_imageslider/views/img/sample-2.jpg"
                        alt="First slide"

                    />
                    <Carousel.Caption>
                    {/* <div className='mask'>
                            <div className='d-flex bottom-0 position-absolute m-5'>
                                <div className='text-black'>
                                    <h1 className='mb-3'>Top Trending</h1>
                                    <h4 className='mb-3'>Pink Color</h4>
                                    <Link className='btn btn-dark btn-lg' href='#!' role='button'>
                                        Discover Now
                                    </Link> 
                                </div>
                            </div>
                        </div> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/modules/tm_imageslider/views/img/sample-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <div className='mask'>
                            <div className='d-flex bottom-0 '>
                                <div className='text-black'>
                                    {/* <h1 className='mb-3'>Top Trending</h1>
                                    <h4 className='mb-3'>Pink Color</h4> */}
                                    {/* <Router>
                                    <Link className='btn btn-dark btn-sm' style={{}} to="" role='button'>
                                        Discover Now
                                    </Link> 
                                    </Router> */}
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://prestashop.templatemela.com/PRS08/PRS080194/PRS02/modules/tm_imageslider/views/img/sample-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
  
    );
}

export default Banner;