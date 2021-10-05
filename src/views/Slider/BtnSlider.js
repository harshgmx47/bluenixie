import React from "react";
import './Slider.css'
import lefArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BtnSlider({direction,moveSlide}){
    console.log(direction,moveSlide);
    return(
        <div col-xs-4>
        <button
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next':
         "btn-slide prev"}>
            <img className="img-responsive" 
            src={direction === "next" ? rightArrow : lefArrow} />
        </button>
        </div>
    );
}