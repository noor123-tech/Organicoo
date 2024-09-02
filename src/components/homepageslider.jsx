import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderArray } from "../Constant/Product";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {SliderArray && SliderArray?.length > 0 && SliderArray.map((item)=>{
          return(
            <div>
              <h1>Slider 1</h1>
              <img src={item} alt="" style={{objectFit: "cover"}} />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default SimpleSlider
