import { useNavigate } from "react-router-dom";
const Contactus=()=>{
return(
    <div id="contactus-parentcontainer">
     <p>CONTACT</p>
    <h2>GET IN TOUCH</h2>
<div id="contactus-container">
<h3>Send us an Email</h3>

<p>Ask us anything! We're here to help.</p> 

<form id="contactus-inputs">
<label>Name</label>
<input type="text" placeholder="Name"></input>
{/*  */}
<label>Phone</label>
<input type="text" placeholder="Name"></input>
<label>Email<span style={{color:'red',marginLeft:'7px'}}>*</span></label>
<input type="text" placeholder="Name"></input>
<label>Comment<span style={{color:'red',marginLeft:'7px'}}>*</span></label>
<textarea></textarea>
<button>Submit Contact</button>
</form>


</div>


    </div>


);
}
export default Contactus