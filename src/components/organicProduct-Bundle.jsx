import React, { useEffect, useState } from 'react'
import Details from './Details'
import Card from './card'
const OrganicProduct = ({ title, Desc, Product }) => {
    const [OrganicProduct, setOrganicProduct] = useState([])
    useEffect(() => {
        if (Product && Product.length > 0) {
            setOrganicProduct(Product)
        }
    }, [Product])
    return (
        <>
            <Details heading={title} paragraph={Desc} />
<div id='organic-parent-container'>
            <div id="Organic-product-container">
                {OrganicProduct && OrganicProduct.length > 0 && OrganicProduct.map((item) => {
                    return (
                        <Card Data={item} title="organicproduct"/>
                        // <div id="Organic-product" key={item.id}>
                        //     <div id="Organic-product-image">
                        //         <img src={item.image[0]} />
                        //     </div>
                        //     <div id="Organic-product-name">
                        //         {item.name}
                        //     </div>
                        //     <div id="Organic-product-price">
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
export default  OrganicProduct 