import spotlightimage1 from '../Assets/images/spotlight-image1.png'
import spotlightimage2 from '../Assets/images/spotlight-image2.png'
const Spotlight=()=>{
return(
    <div id='spotlight-parent-container'>
<div id="spotlight-container">
<div id="spotlight-image1">
    <a href="#" ><img src={spotlightimage1}></img></a>
</div>
<div id="spotlight-image2">
<a href="#"> <img src={spotlightimage2}></img></a>
</div>

</div>

</div>

);
}
export default Spotlight