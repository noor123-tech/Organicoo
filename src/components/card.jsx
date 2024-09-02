import React, { useEffect, useState, useContext } from 'react';
import { contextState } from '../App';
import { FaRegHeart } from "react-icons/fa6";
import Quickview from "../components/Quickview";
import { useNavigate } from 'react-router-dom';
import image51 from '../Assets/images/oatmilk1.jpg';
import { eidbundle } from '../Constant/Product';
const Card = ({ Data, title = "", template = "" }) => {
    const navigate = useNavigate();
    const { cartdata, setCartdata } = useContext(contextState);
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState("");
    //     const cartdata=
    //     [
    //         {
    //         id:"",
    //         name:"",
    //         image:[],
    //         price:"",

    //     }
    // ];

    const AddCart = (item) => {
        const itemExists = cartdata.find(cartItem => cartItem.id === item.id);
    
        if (itemExists) {
            const updatedData = cartdata.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,  // Increment the quantity
                    };
                } else {
                    return cartItem;
                }
            });
            setCartdata(updatedData);
        } else {
            setCartdata([...cartdata, { ...item, quantity: 1 }]);  // Add new item with quantity 1
        }
    };
    useEffect(() => {
        if (Data) {
            if (Data.image && Data.image.length > 0) {
                setImage(Data?.image[0])
            }
            setProduct(Data);
        }
    }, [Data]);


    const [quickviewdata, setQuickviewdata] = useState("");
    const [showQuickview, setShowQuickview] = useState(false);

    const handleQuickview = (product) => {
        setShowQuickview(!showQuickview);
        setQuickviewdata(product);
    };
    const func = () => {
        setShowQuickview(!showQuickview);
    }

    return (
        <>
            {showQuickview && <Quickview product={quickviewdata} func={handleQuickview} addcart={AddCart} />}
            {template == "OneColumn" ? (
                  <div id="eidcard-container">
                 
                       
                              <div id="eidcard-img">
                                  <img src={product?.image[0]} alt={product?.name} onClick={() => {
                                navigate(`/product?id=${product.id}&category=${title}`)
                            }} />
                                  <div id="wishlist">
                                      <button>
                                          <FaRegHeart className='heart-icon' />
                                      </button>
                                  </div>
                                  <div id="quick-view" onClick={() => { handleQuickview(product) }}>
                                      <button>Quick View</button>
                                  </div>
                              </div>
                              <div id="eidcard-data">
                                  <div id="eidcard-name">
                                      <b>{product?.name}</b>
                                  </div>
                                  <div id="eidcard-desc">
                                  We take raw organicoo coconuts(among the most nutritious foods) and carefully cold press them (never refine, bleach, hydrogenate, or deodorize) to lock in all the aroma and nutrition.  Organic extra virgin coconut oil in Pakistan that contains fresh coconut flavor and sweet aroma. Best for...

                                  </div>
                                  <div id="eidcard-price">
                                      <b> Rs.{product?.price}</b>
                                  </div>
                                  <div id="eidcard-addtocart">
                                      <button onClick={() => { AddCart(product) }}>
                                          <b>Add to Cart</b>
                                      </button>
                                  </div>
                              </div>
                          
              </div>
            ) : (
                <div id="product" >
                    <div id={`${title === "discount" ? "Discount-product-image" : "product-image"}`} onMouseEnter={() => {
                        if (product?.image?.length > 1) {
                            // setTimeout(() => {
                            setImage(product?.image[1])
                            // }, 1000);
                        }
                    }}
                        // onClick={()=>{navigate('/product')}}
                        onMouseLeave={() => {
                            if (product?.image?.length > 0) {

                                setImage(product?.image[0])


                            }
                        }}
                    >
                        <img src={image} alt={product?.name} className={`${product?.image?.length > 1 ? "product-img" : 'product-img-without-hover'}`}
                            onClick={() => {
                                navigate(`/product?id=${product.id}&category=${title}`)
                            }} />
                        <div id="wishlist">
                            <button> <FaRegHeart className='heart-icon' /></button>
                        </div>
                        <div id="quick-view" onClick={() => { handleQuickview(product) }}>
                            <button>
                                Quick View
                            </button>
                        </div>
                        <div id="addtocart">
                            <button onClick={() => { AddCart(product) }}>Add to Cart</button>
                        </div>

                    </div>
                    <div id="product-name">
                        {product?.name}
                    </div>
                    <div id="product-price">
                        {product?.priceAfterDiscount && (
                            <del style={{ marginRight: '10px' }}>Rs.{product?.priceAfterDiscount}</del>
                        )}
                        <span style={{ color: product?.priceAfterDiscount ? 'red' : 'black' }}>Rs.{product?.price}</span>
                    </div>
                </div>
            )}

        </>
    );
};

export default Card;
