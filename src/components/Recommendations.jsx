
import Details from './Details';
import daraz from '../Assets/images/daraz-logo.avif';
import keto from '../Assets/images/keto-logo.avif';
import time from '../Assets/images/time-medico.avif';
import savemart from '../Assets/images/save-mart.avif';
import lifestyle from '../Assets/images/lifestyle-express.avif';
import naheed from '../Assets/images/naheedsupermarket-logo.avif';
const Recommendations = ({ title,Desc }) => {
    return (
        <>
            <Details heading={title} paragraph={Desc} />
            <div id='Recommendations-skincare-parent-container'>
                <div id="Recommendations-skincare-product-container">

               
                        <div className="Recommendations-skincare-product-image">
                            <img src={daraz } />
                        </div>
                        <div className="Recommendations-skincare-product-image">
                            <img src={keto } />
                        </div>
                        <div className="Recommendations-skincare-product-image">
                            <img src={time } />
                        </div>
                        <div className="Recommendations-skincare-product-image">
                            <img src={savemart } />
                        </div>
                        <div className="Recommendations-skincare-product-image">
                            <img src={lifestyle } />
                        </div>
                        <div className="Recommendations-skincare-product-image">
                            <img src={ naheed} />
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Recommendations