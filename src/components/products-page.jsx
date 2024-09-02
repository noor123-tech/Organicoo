import React, { useEffect, useState } from 'react'
import Details from './Details'
import Card from './card'

const ProductPage = ({ title, Desc, Product }) => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        if (Product && Product.length > 0) {
            setProductList(Product)
        }
    }, [Product])
    return (
        <>
            <Details heading={title} paragraph={Desc} />

            <div id="product-container">
                {productList && productList.length > 0 && productList.map((item) => {
                    return(
                        <Card Data={item} title="product" />
                    )
                })}
         


     

            </div>

            <div id="show-more-container">
                <div id='show-more-btn'>
                    <button > Show More </button>
                </div>
            </div>

        </>
    );
}
export default ProductPage