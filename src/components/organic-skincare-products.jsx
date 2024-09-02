import React, { useEffect, useState } from 'react'
import Details from './Details'
import Card from './card'
import image from '../Assets/images/Side_banner.webp'
import Slider from "react-slick";

const OrganicSkincare = ({ title, Desc, Product }) => {
    const [OrganicSkincare,setOrganicSkincare ] = useState([])
    useEffect(() => {
        if (Product && Product.length > 0) {
            setOrganicSkincare (Product)
        }
    }, [Product])

// 


// 
    return (
        <>
            <Details heading={title} paragraph={Desc} />

            <div id="Organic-skincare-product-container">
          
        <div id='organic-slick-slider' >

        {OrganicSkincare && OrganicSkincare.length > 0 && OrganicSkincare.map((item) => {
                    return (
                        <Card Data={item} title="organicskincare" />
                        // <div id="Discount-product" key={item.id}>
                        //     <div id="Discount-product-image">
                        //         <img src={item.image[0]} />
                        //     </div>
                        //     <div id="Discount-product-name">
                        //         {item.name}
                        //     </div>
                        //     <div id="Discount-product-price">
                        //     {item.priceAfterDiscount && (
                        //         <del>Rs.{item.priceAfterDiscount}</del>
                        //     )}
                        //         <span style={{color:'red',marginLeft:'10px'}}>Rs.{item.price}</span>
                        //     </div>
                        // </div>
                    )
                })}

            </div>
           <div id='organic-skincare-image'>
                    <img src={image}/>
                </div>

       
      
      </div>
        </>
    );
}
export default  OrganicSkincare