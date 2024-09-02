import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
import React, { useState } from "react";
import { BsDisplay } from "react-icons/bs";

const Footer = () => {
    const [toshow, setToshow] = useState(true);
    const togglemenu = () => {
        setToshow(!toshow);
    }

    return (
        <>
            <div id="footer-container">
                <div id="footerChildCont">
                    <div id="about-section">
                        <h2>About Organico</h2>
                        <p>Organico is your one-stop shop to buy organic products in Pakistan at reasonable prices. So, be good to yourself, eat clean, and purchase only organic.</p>

                        <div id="socials-section">
                            <div id="facebook"><FaFacebookF className="cssforfacebook" /></div>
                            <div id="instagram"><FaInstagram className="cssforinstagram" /></div>
                        </div>
                    </div>
                    <div id="menu-section"
                               style={{
                                height: toshow ? '244px' : '45px',
                                transition: 'height 1 ease'
                              }}
                     >
                        <h2>Menu</h2>
                        <div id="menu_functionality"><div>Menu</div>
                            <button onClick={togglemenu} className="minus-plus-icon">
                         {toshow? <GoPlus className="plus-icon" /> :<HiMinusSm className="minus-icon" />  }
                                </button>
                                </div>
                        <ul style={{ display: toshow ? 'block' : 'none' }}>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Shop Now</li>
                            <li>Eid Bundles</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div id="head-office-section">
                        <h2>Head Office</h2>

                        <p style={{ height: '24px' }}>H.A INDUSTRIES</p>
                        <p>Plot # F-321, Fakhruddin Road, S.I.T.E Karachi, Pakistan</p>
                    </div>
                    <div id="newsletter-section">
                        <h2>Newsletter Sign Up</h2>
                        <p>Receive our latest updates about our products and promotions.</p>
                        <div id="input-Submit">
                            <input type="text" placeholder="Enter Your Email Address" />
                            <button type="button">Submit</button>
                        </div>
                    </div >





                </div >
                <div id="newsletter-section2">
                    <h2>Newsletter Sign Up</h2>
                    <p>Receive our latest updates about our products and promotions.</p>
                    <div id="input-Submit2">
                        <input type="text" placeholder="Enter Your Email Address" />
                        <button type="button">Submit</button>
                    </div>
                </div >
            </div>


        </>
    );
}
export default Footer