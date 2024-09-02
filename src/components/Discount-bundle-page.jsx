import React, { useState, useEffect } from 'react'
import Details from './Details'
import Card from './card'
const DiscountBundle = ({ title, Product }) => {
    const [discountProducts, setDiscountProducts] = useState([])
    useEffect(() => {
        if (Product && Product?.length > 0) {
            setDiscountProducts(Product)
        }
    }, [Product])
    return (
        <>
            <Details heading={title} />
            <div id="Discount-product-container">
                {discountProducts && discountProducts.length > 0 && discountProducts.map((item) => {
                    return (
                        <Card Data={item} title="discount" />
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
        </>
    );

}
export default DiscountBundle