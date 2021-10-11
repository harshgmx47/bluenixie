import React,{useState} from "react";
import './Slider.css'
 import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import 'bootstrap/dist/css/bootstrap.min.css';

export default  function Slider() {

    const [slideIndex,setSlideIndex] = useState(1)
     const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide= () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }

     }
     const moveDot = index =>{
        setSlideIndex(1)
     }
return(
    <div className="container-slider">
        {dataSlider.map((obj,index) => {
            return (
                <div 
                key={obj.id}
                className={slideIndex === index + 1 ? 
                    "slide active-anim": "slide"}
                >
                    <img className="banner" alt="banner" 
                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                     />
                </div>
            )
        } )}
         <BtnSlider moveSlide={nextSlide} direction={'next'} />
         <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

       
         <div className='mask'>
          <div className='d-flex bottom-0 position-absolute m-5'>
            <div className='text-white'>
              <h1 className='mb-3'>Top Trending</h1>
              <h4 className='mb-3'>Pink Color</h4>
              <Link className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Discover Now
              </Link> 
            </div>
          </div>
        </div>
        <div className="container-dots">
             {Array.from({length: 5}).map((item,index) =>(
                <div 
                onClick={()=> moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
             ))}
         </div>
        </div>
)
}
