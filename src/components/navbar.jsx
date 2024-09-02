import React, { useState } from 'react';
import organicLogo from '../Assets/images/Organico_Logo (1).png';
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import Cart from '../components/Cart'
import { SlBag } from "react-icons/sl";
import { useContext ,useEffect} from 'react';
import { contextState } from '../App';
import { FaYoutube } from "react-icons/fa6";

const Navbar = () => {
    const { cartdata, setCartdata , totalquantity} = useContext(contextState);
    const [totalquant, setTotalquan] = useState(0);
    const [showmenu,setShowmenu]=useState(false);
const fshowmenu=()=>{
setShowmenu(!showmenu);
}
    
 
    const [showcart,setShowcart]=useState(false);
useEffect(()=>{
   setTotalquan(totalquantity);
},[totalquantity])
  const toshowcart=()=>{
    setShowcart(!showcart);
  }
    return (
        <>
    
        <div id="menu-container" 
        style={{ display: showmenu ? "block" : "none"}}
        >
            <div id="menu-bar">
             <div style={{padding:'20px 20px 6px 15px'}} id='menu-head'>
                <b>Menu</b> <IoCloseSharp onClick={fshowmenu}/> </div>
            
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>Home</div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>About Us </div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>Shop Now </div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>Eid Bundles</div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>Blog</div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7'}}>Contact Us</div>


<div style={{display:'flex',alignItems:'center',padding:'15px',borderBottom:'1px solid #C7C7C7'}}>
<FaRegHeart style={{marginRight:'10px'}}/>
My Wish List 
</div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7',display:'grid',rowGap:'10px'}}>
<b>For Online Order/ WhatsApp</b>

0333-22334411
</div>
<div style={{padding:'15px',borderBottom:'1px solid #C7C7C7',display:'grid',rowGap:'30px'}}>
<b>Folow Us </b>
<div style={{display:'flex',columnGap:'20px'}}>
<FaFacebookF />
<AiFillInstagram />
<FaYoutube />
 </div>
</div>
                </div>
             
                

        </div>

          <Cart onClose={()=>{setShowcart(false)}} showCart={showcart}/>
        <div id="navparentCont">
            <div id="navContainer">
                
                <div id="logo">
                    <img src={organicLogo} alt='Organico Logo' />
                </div>
                <div className='mobile-nav-btn'>
                <IoIosMenu className='menu' onClick={fshowmenu} />

                <IoIosSearch className='search-icon'/>
                </div>
                <div id="searchbar">
                    <input type='text' placeholder='Search the Store' />
                    <div id="search">
                        <IoIosSearch className='searchlogo' />
                    </div>
                </div>
                <div id="container">
                    <div id="number">
                        <span>Available 24/7 at </span>
                        <span style={{ fontWeight: 'bold', marginTop: "5px" }}>0333-2233560</span>
                    </div>
                    <div className="nav-item wishlist">
                        <CiHeart className='nav-logo' />
                        <div>Wish Lists</div>
                    </div>
                    <div className="nav-item cart" onClick={toshowcart}>
                  <BsCart3 className='nav-logo' /> 
                        <span id="quantity">{totalquant}</span>
                        <div>Cart</div>
                    </div>
                    <div className='bag-icon-div' onClick={toshowcart}>
                    <SlBag className='bag-icon' />
                    <span id="quantity2">{totalquant}</span>
                    </div>
                </div>

            </div>
        </div>

        </>
    );
}

export default Navbar