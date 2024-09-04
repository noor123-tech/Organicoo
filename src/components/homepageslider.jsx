import React, { useState, useEffect } from 'react'
import { SliderArray } from '../Constant/Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function FoodCategoriesSlider() {
  return (
    <Carousel>
      {SliderArray && SliderArray.length > 0 && SliderArray.map((item, index) => {
        return (
          <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
          <div style={{maxWidth:'1310px',width:'100%'}}>
            <img src={item} style={{width: "100%", height: "500px", objectFit: "cover"}} />
            <p className="legend">Legend 1</p>
          </div>

          </div>
        )
      })}
    </Carousel>
  )
}

export default FoodCategoriesSlider