
import Details from './Details';
import img1 from '../Assets/images/img1.webp';
import img2 from '../Assets/images/img2.webp';
import img3 from '../Assets/images/img3.webp';
import img4 from '../Assets/images/img4.webp';
import img5 from '../Assets/images/img5.webp';

const InstagramPageLinks = ({ title,Desc }) => {
    return (
        <>
          
            <div id='InstagramPageLinks-skincare-parent-container'>
            <div id='line'>Organic On Instagram</div>
            {/* <Details heading={title} paragraph={Desc} /> */}
                <div id="InstagramPageLinks-skincare-product-container">
             
               
                        <div className="InstagramPageLinks-skincare-product-image">
                            <img src={img1 } />
                        </div>
                        <div className="InstagramPageLinks-skincare-product-image">
                            <img src={img2 } />
                        </div>
                        <div className="InstagramPageLinks-skincare-product-image">
                            <img src={img3 } />
                        </div>
                        <div className="InstagramPageLinks-skincare-product-image">
                            <img src={img4 } />
                        </div>
                        <div className="InstagramPageLinks-skincare-product-image">
                            <img src={img5 } />
                        </div>
                    </div>
                </div>
        </>
    );
}
export default InstagramPageLinks