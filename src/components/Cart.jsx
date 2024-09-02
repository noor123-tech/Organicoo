import React, { useState } from "react"
import { IoCloseSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { TfiNotepad } from "react-icons/tfi";
import { MdOutlineDiscount } from "react-icons/md";
import { useContext, useEffect } from "react";
import { contextState } from "../App";
const Cart = ({ onClose, showCart }) => {
    const { cartdata, setCartdata, setTotalquantity,totalquantity } = useContext(contextState);

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalquant, setTotalquan] = useState(0);
    const [allCartData, setAllCartData] = useState([])
    useEffect(() => {
        setAllCartData(cartdata?.length > 0 ? cartdata : [])
    }, [cartdata])
    useEffect(() => {
        let calculatePrice = 0
        let calculateQuant = 0
        if (allCartData && allCartData.length > 0) {
            allCartData.map((item) => {
                if (item?.price) {
                    calculatePrice += Number(item?.price) * Number(item?.quantity)
                }
                if (item?.quantity) {
                    calculateQuant += Number(item?.quantity)
                }
            })
        }
        setTotalPrice(calculatePrice)
        setTotalquan(calculateQuant)
        setTotalquantity(calculateQuant)
        console.log(calculateQuant)
    }, [allCartData])

    const handleDecrement = (product) => {
        const allData = allCartData
        allData.map((item) => {
            if (item?.id == product?.id && item?.name == product?.name && item?.quantity > 1) {
                item.quantity -= 1
            }
        })
        setAllCartData([...allData])

    }
    const handleIncrement = (product) => {
        const allData = allCartData
        allData.map((item) => {
            if (item?.id == product?.id && item?.name == product?.name) {
                item.quantity += 1
            }
        })
        setAllCartData([...allData])


    }

    const ToFilter = (item) => {

        const filterdata = allCartData.filter((product) => {
            return product.id != item.id || product.name != item.name;
        })
        item.quantity = 1;
        setAllCartData(filterdata);
        setCartdata(filterdata)
        // setTotalquan(1);
        setTotalquantity(1);

    }
    return (

        <div
            id="cart-container"
            style={{
                // display: showCart ? 'block' : 'none',
                visibility: showCart ? 'visible' : 'hidden',

            }}
        >
            <div id="cart"


                style={{
                    transform: showCart ? 'translateX(0)' : 'translateX(100%)',
                    opacity: showCart ? 1 : 0,
                }}

            >
                <div id="cart-header">
                    <div>Shopping Cart</div>
                    <div className="cancel-icon" onClick={onClose}><IoCloseSharp className="cross-icon" /></div>
                </div>

                <div style={{ padding: '5px 0px 10px 0px', color: '#727272', fontSize: '14px' }}>{totalquantity} items</div>
                <div id="cart-space">
                    <div >
                        <div id="to-apply-grid">

                            {/* .map function starts from here */}
                            {allCartData && allCartData?.length > 0 && allCartData.map((item) => {
                                return (
                                    <div id='cart-items'>
                                        <div id='cart-item-image'>
                                            <img src={item.image[0]} />
                                        </div>
                                        <div id="cart-item-content">
                                            <div id='cart-item-name'>
                                                {item.name}
                                            </div>
                                            <div id="cart-item-price">

                                                <span style={{ color: 'green' }}>Rs.  {item.price} </span>
                                            </div>
                                            <div id="cart-count-container">
                                                <div id="cart-item-count">
                                                    <FiMinus onClick={() => { handleDecrement(item) }} className="increment-icon" />
                                                    <span>{totalquantity}</span>
                                                    <FaPlus onClick={() => {handleIncrement(item) }} className="decrement-icon" />

                                                </div>
                                                <div >
                                                    <IoCloseSharp
                                                        onClick={() => { ToFilter(item) }}
                                                        className="item-quantity-icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        </div>
                        <div id="cart-space2">
                            <div>
                        <div id="cart-item-tools" >
                            <div id="cart-item-note">
                                <TfiNotepad className="note-icon" />
                            </div>
                            <div id='cart-item-discount'>
                                <MdOutlineDiscount className="discount-icon" />
                            </div>
                        </div>
         

                  

                  
                            <div id='cart-item-subtotal'>
                                <div style={{ fontSize: '14px' }}>Subtotal</div>
                                <div style={{ fontSize: '15px' }}>Rs.{totalPrice.toFixed(2)}</div>
                            </div>
                            <div id='cart-item-total'>
                                <div style={{ fontSize: '14px' }}>Total:</div>
                                <div style={{ fontSize: '18px' }}>Rs.{totalPrice.toFixed(2)}</div>
                            </div>
                            <div id='cart-btn-checkout'>
                                <button>Checkout</button>
                            </div>
                            <div id='cart-btn-viewcart'>
                                <button>View Cart</button>
                            </div>

                        </div>
                        
                        </div>

                    </div>

                </div>
        </div>

            );

}
            export default Cart