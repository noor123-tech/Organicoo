
import React, { useEffect, useState } from 'react'
import Details from './Details'
import Card from './card'
const KetoProduct = ({ title, Desc, Product }) => {
    const [KetoProduct ,setKetoProduct  ] = useState([])
    useEffect(() => {
        if (Product && Product.length > 0) {
            setKetoProduct  (Product)
        }
    }, [Product])
    return (
        <>
            <Details heading={title} paragraph={Desc} />
<div id='KetoProduct-skincare-parent-container'>
            <div id="KetoProduct-skincare-product-container">
                { KetoProduct &&  KetoProduct.length > 0 &&  KetoProduct.map((item) => {
                    return (
                        <Card Data={item} title="ketoproduct"/>
                        // <div id="KetoProduct-skincare-product" key={item.id}>
                        //     <div id="KetoProduct-skincare-product-image">
                        //         <img src={item.image[0]} />
                        //     </div>
                        //     <div id="KetoProduct-skincare-product-name">
                        //         {item.name}
                        //     </div>
                        //     <div id="KetoProduct-skincare-product-price">
                        //     {item.priceAfterDiscount && (
                        //         <del>Rs.{item.priceAfterDiscount}</del>
                        //     )}
                        //        Rs.{item.price}
                        //     </div>
                        // </div>
                    )
                })}

            </div>

            </div>
        </>
    );
}
export default  KetoProduct 