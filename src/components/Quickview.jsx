import { IoClose } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const Quickview=({product,func,addcart})=>{
if(!product){
    return null;
}
return(
<div id="quickview-cont">
<div id="quickview-whitebackground">

    <div id="toaddscroll" >
    <div id="quickview-close" onClick={func}>
    <IoClose />

    </div>
{/* <div id="quickview-img">
<img src={product.image[0]} />


</div>
<div id="quickview-item-data">
   
<div id="quickview-name">
{product.name}
</div>
<div id="quickview-price">
{product.price}
</div> */}
{/* 
</div> */}

<div id="quickview-img">
<div id="share-quickview">
    Share
</div>
<img src={product.image[0]} />
</div>

<div id="quickview-item-data">
<div id="quickview-name">
{product.name}
</div>
<div id="sold-lasthour">
<FaFireFlameCurved style={{marginRight:'8px',fontSize:'18px'}}/>
 6 sold in last 18 hours
</div>
<div id="quickview-price">
Rs.{product.price}
</div> 

<div id="quickview-addtocart">
    <button  onClick={()=>{addcart(product)}}>Add to Cart</button>
    <div><FiHeart />
    </div>
</div>
<div id="quickview-buy">
    <button>Buy it Now</button>
</div>


<div id="product-views">
<FaRegEye style={{marginRight:'8px',fontSize:'20px'}}/>
11 customers are viewing this product
</div>
</div>
</div>
</div>

</div>

);
}
export default Quickview;