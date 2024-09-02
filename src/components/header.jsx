import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <div id="containerHeader">
            <ul id="headerdataCont">
                <li><button
                onClick={()=>{navigate('/')}}
                >Home</button></li>
                <li><button 
                onClick={()=>{navigate('/about')}}
                >About Us</button></li>
                <li><button>Shop Now</button></li>
                <li><button
                    onClick={()=>{navigate('/eidbundle')}}
                  
                >Eid Bundles</button></li>
                <li> <button>Blog </button></li>
                <li> <button
                 onClick={()=>{navigate('/contact')}}
                >Contact Us</button></li>
            </ul>

        </div>
    );
}
export default Header;