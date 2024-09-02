import React from 'react'
import ProductPage from '../components/products-page'
import DiscountBundleComponent from '../components/Discount-bundle-page'
import Spotlight from '../components/Spotlight'
import OrganicProduct from '../components/organicProduct-Bundle'
import ImageBOX from '../components/img-box'
import KetoProduct from '../components/keto-products'
import Recommendations from '../components/Recommendations'
import InstagramPageLinks from '../components/Instagram-page-links'
import { Product, DiscountBundle, BestProduct, OrganicProductBundle, KetoProductBundle ,organicskincare } from '../Constant/Product';
import OrganicSkincare from '../components/organic-skincare-products'
import SimpleSlider from '../components/homepageslider';
import Cart from '../components/Cart'
function Home() {
    return (
        <>

            {/* <SimpleSlider /> */}


            <ProductPage title={"Best Organic Products in Pakistan"} Desc={"We don’t think that organic has to come at an expensive price tag. That’s why we wanted to give you a chance to live a healthy, clean life by using organic products and feel good about it."} Product={Product} />
            <DiscountBundleComponent title={"Discount Boundles"} Product={DiscountBundle} />


            <Spotlight />
            <OrganicProduct title={"Best Organic Haircare Products"} Desc={"Everyone loves lustrous, long, shiny, and beautiful hair. Our organic oils for hair are extracted from natural herbs to stimulate hair growth, prevents hair fall, and make them strong and gorgeous."} Product={BestProduct} />
            <OrganicSkincare title={"Organic Skincare Products"} Desc={"We want to give you smoother, softer, better skin without the toxic chemicals. Our organic coconut oils for skincare can make a good addition to your beauty routine."} Product={organicskincare}/>
            <ImageBOX />

            <KetoProduct title={"Best Keto Products in Pakistan"} Desc={"On a keto diet and want to boost your metabolism and energy? Then, grab your hands on our medium – chain triglycerides and unflavoured coconut oils."} Product={KetoProductBundle} />
            <Recommendations title={"Our Products Are Also Available on"} Desc={""} />
            <InstagramPageLinks />
        </>
    )
}

export default Home