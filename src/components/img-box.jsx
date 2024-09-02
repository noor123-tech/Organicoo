 import imageonleft from '../Assets/images/image-on-left.webp';
 import imageonright from '../Assets/images/image-on-right1.webp';

 const ImageBOX=()=>{
return (
<div id="img-container">
<div id='img-left'>
    <img src={imageonleft}/>
</div>
<div id='img-right'>
    <img src={imageonright}/>
</div>
</div>


);
 }
 export default ImageBOX