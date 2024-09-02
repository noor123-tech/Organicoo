import image1 from '../Assets/images/mctoil1.jpg';
import image2 from '../Assets/images/mctoil2.jpg';
import image3 from '../Assets/images/coconutoil1.jpg';
import image4 from '../Assets/images/coconutoil2.png';
import image5 from '../Assets/images/oatmilk1.jpg';
import image6 from '../Assets/images/oatmilk2.jpg';
import image7 from '../Assets/images/butteroil1.jpg';
import image8 from '../Assets/images/butteroil2.jpg'; 
import image9 from '../Assets/images/alovera1.jpg';
import image10 from '../Assets/images/alovera2.jpg';
import image11 from '../Assets/images/soap1.jpg';
import image12 from '../Assets/images/soap2.jpg';
import image13 from '../Assets/images/mustardoil.jpg';
import image14 from '../Assets/images/cocooil1.jpg';
import image15 from '../Assets/images/cocooil2.jpg';
// discount bundles imports
import discountimage1 from '../Assets/images/discount-image1.jpg';
import discountimage2 from '../Assets/images/discount-image2.jpg';
import discountimage3 from '../Assets/images/discount-image3.jpg';
import discountimage4 from '../Assets/images/discount-image4.jpg';
import discountimage6 from '../Assets/images/discount-image6.jpg';// number 5
import discountimage5 from '../Assets/images/discount-image5.jpg';//number 6
// =========discount bundles ends here==========

//Best product Start from here
import bestimage1 from '../Assets/images/best-image1.png';
import bestimage2 from '../Assets/images/best-image2.png';
import bestimage3 from '../Assets/images/best-image3.png';
import bestimage4 from '../Assets/images/best-image4.jpg';
import bestimage5 from '../Assets/images/best-image5.jpg';
import bestimage6 from '../Assets/images/best-image6.jpg';
import bestimage7 from '../Assets/images/best-image7.png';
//===Best products end here
// Organic product Bundle starts from here;
import organicproduct1 from '../Assets/images/organic-product1.webp';
import organicproduct2 from '../Assets/images/organic-product2.webp';
import organicproduct3 from '../Assets/images/organic-product3.webp';
import organicproduct4 from '../Assets/images/organic-product4.webp';

// organic product bundle ends here
// Keto Products Starts from here
import ketoproduct1 from '../Assets/images/ketoproduct1.jpg';
import keto from '../Assets/images/keto.webp';
import ketoproduct2 from '../Assets/images/ketoproduct2.webp';
import ketoproduct3 from '../Assets/images/ketoproduct4.jpg';
import ketoproduct4 from '../Assets/images/ketoproduct3.jpg';

// Keto Products Ends from here



// organic-skincare starts from here
import organicskincareimg1 from '../Assets/images/organic-skincare-Coco-200_370x.webp';
import organicskincareimg2 from '../Assets/images/organic-skincare-coco-butter-lotion.webp';
import organicskincareimg3 from '../Assets/images/organic-skincare-Coco-100_370x.webp';
import organicskincareimg4 from '../Assets/images/organic-skincare-4.1_940x.webp';


// Homepage Slider Images 
import Slider1 from '../Assets/images/slider-img-1.jpg'
import Slider2 from '../Assets/images/slider-img-2.jpg'
import Slider3 from '../Assets/images/slider-img-3.jpg'
import Slider4 from '../Assets/images/slider-img-4.jpg'
import Slider5 from '../Assets/images/slider-img-5.jpg'
import Slider6 from '../Assets/images/slider-img-6.jpg'


// Homepage Slider Array 
export const SliderArray = [
    Slider1, Slider2, Slider3, Slider4, Slider5, Slider6
]

// organic skincare ends from here
export const Product = [
    {id:1,image:[image1,image2],name:"MCT OIL 500 ML",price:"3200.00",quantity:1},
    {id:2,image:[image3,image4],name:"Coconut Oil Jar 800ml",price:"920.00",quantity:1},
    {id:3,image:[image5,image6],name:"Oat and Milk Lotion",price:"350.00",quantity:1},
    {id:4,image:[image7,image8],name:"Coconut Butter lotion 100ml",price:"320.00",quantity:1},
    {id:5,image:[image9,image10],name:"Aloevera lotion 100ml ",price:"300.00",quantity:1},
    {id:6,image:[image11,image12],name:"Neem soap ",price:"120.00",quantity:1},
    {id:7,image:[image13],name:"Mustard Oil 1 litre - Pet Bottle",price:"850.00",quantity:1}, 
    {id:8,image:[image14,image15],name:"Coconut oil 500 ml Bottle",price:"560.00",quantity:1},
]

export const DiscountBundle = [
    {id:1 , image:[discountimage1], name:"Box of Two Coconut",price:"1300.00",priceAfterDiscount:"1500.00",quantity:1},
    {id:2 , image:[discountimage2], name:"Family Pack 1",price:"950.00",priceAfterDiscount:"1010.00",quantity:1},
    {id:3 , image:[discountimage3], name:"Pack of Remedy",price:"750.00",priceAfterDiscount:"1930.00",quantity:1},
    {id:4 , image:[discountimage4], name:"Pack of Herbal",price:"500.00",priceAfterDiscount:"930.00",quantity:1},
    {id:5 , image:[discountimage6], name:"Family Pack 2",price:"1700.00",priceAfterDiscount:"620.00",quantity:1},
    {id:6 , image:[discountimage5], name:"Pack of Essential",price:"600.00",priceAfterDiscount:"820.00",quantity:1},
]


export const BestProduct=[
{id:1,image:[bestimage1],name:"Seven Herbal Hair Oil-100 ML",price:"250.00",quantity:1},
{id:2,image:[bestimage2],name:"Amla Hair Oil for Growth - 100 ML",price:"220.00",quantity:1},
{id:3,image:[bestimage3],name:"Coconut Oil with Aloe vera Extracts - 100 ML",price:"250.00",quantity:1},
{id:4,image:[bestimage4],name:"Organic 5 Serum for Strong Hair - 100 ML",price:"450.00",quantity:1},
{id:5,image:[bestimage5],name:"Black Seed Oil-Kalonji Oil for Hair-100 ML - Hair Fall Solution",price:"700.00",quantity:1},
{id:6,image:[bestimage6],name:" Organico's Coconut Mint oil -100 ML  ",price:"220.00"},
{id:7,image:[bestimage7],name:"Cold Pressed Mustard Oil – 100ml – Sarson Ka Tail – Extracted From Pure Mustard Seeds",price:"150.00",quantity:1},

]
export const OrganicProductBundle=[
{id:1,image:[organicproduct1],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"260.00",quantity:1},
{id:2,image:[organicproduct2],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"105.00",quantity:1},
{id:3,image:[organicproduct3],name:"Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin",price:"150.00",quantity:1},
{id:4,image:[organicproduct4],name:"Aloevera Lotion 30ml",price:"95.00",quantity:1},

]


export const KetoProductBundle=[
{id:1,image:[ketoproduct1,keto],name:"MCT Oil | Keto Product | Pure Medium Chain Triglycerides For Weight Loss",price:"1,600.00",quantity:1},
{id:2,image:[ketoproduct2],name:"Organico’s Coconut Oil Unflavored – 680ml | Coconut Oil For Keto Diet",price:"900.00",quantity:1},
{id:3,image:[ketoproduct4,ketoproduct3],name:"MCT Oil – 1 Ltr. Pet Bottle",price:"6,000.00",quantity:1},


]


export const organicskincare=[
{id:1,image:[organicskincareimg1],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"260.00",quantity:1},
{id:2,image:[organicskincareimg2],name:"Coco Butter Lotion 30ml",price:"105.00",quantity:1},
{id:3,image:[organicskincareimg3],name:"Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin",price:"150.00",quantity:1},
// {id:1,image:[organicskincareimg1],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"260.00"},
]



// export const eidbundle=[
//     {id:1,image:[image1,image2],name:"MCT OIL 500 ML",price:"3200.00",quantity:1},
//     {id:2,image:[image3,image4],name:"Coconut Oil Jar 800ml",price:"920.00",quantity:1},
//     {id:3,image:[image5,image6],name:"Oat and Milk Lotion",price:"350.00",quantity:1},
//     {id:4,image:[image7,image8],name:"Coconut Butter lotion 100ml",price:"320.00",quantity:1},
//     {id:5,image:[image9,image10],name:"Aloevera lotion 100ml ",price:"300.00",quantity:1},
//     {id:6,image:[image11,image12],name:"Neem soap ",price:"120.00",quantity:1},
//     {id:7,image:[image13],name:"Mustard Oil 1 litre - Pet Bottle",price:"850.00",quantity:1}, 
//     {id:8,image:[image14,image15],name:"Coconut oil 500 ml Bottle",price:"560.00",quantity:1},
//     {id:1 , image:[discountimage1], name:"Box of Two Coconut",price:"1300.00",priceAfterDiscount:"1500.00",quantity:1},
//     {id:2 , image:[discountimage2], name:"Family Pack 1",price:"950.00",priceAfterDiscount:"1010.00",quantity:1},
//     {id:3 , image:[discountimage3], name:"Pack of Remedy",price:"750.00",priceAfterDiscount:"1930.00",quantity:1},
//     {id:4 , image:[discountimage4], name:"Pack of Herbal",price:"500.00",priceAfterDiscount:"930.00",quantity:1},
//     {id:5 , image:[discountimage6], name:"Family Pack 2",price:"1700.00",priceAfterDiscount:"620.00",quantity:1},
//     {id:6 , image:[discountimage5], name:"Pack of Essential",price:"600.00",priceAfterDiscount:"820.00",quantity:1},
//     {id:1,image:[bestimage1],name:"Seven Herbal Hair Oil-100 ML",price:"250.00",quantity:1},
//     {id:2,image:[bestimage2],name:"Amla Hair Oil for Growth - 100 ML",price:"220.00",quantity:1},
//     {id:3,image:[bestimage3],name:"Coconut Oil with Aloe vera Extracts - 100 ML",price:"250.00",quantity:1},
//     {id:4,image:[bestimage4],name:"Organic 5 Serum for Strong Hair - 100 ML",price:"450.00",quantity:1},
//     {id:5,image:[bestimage5],name:"Black Seed Oil-Kalonji Oil for Hair-100 ML - Hair Fall Solution",price:"700.00",quantity:1},
//     {id:6,image:[bestimage6],name:" Organico's Coconut Mint oil -100 ML  ",price:"220.00"},
//     {id:7,image:[bestimage7],name:"Cold Pressed Mustard Oil – 100ml – Sarson Ka Tail – Extracted From Pure Mustard Seeds",price:"150.00",quantity:1},
//     {id:1,image:[organicproduct1],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"260.00",quantity:1},
//     {id:2,image:[organicproduct2],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"105.00",quantity:1},
//     {id:3,image:[organicproduct3],name:"Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin",price:"150.00",quantity:1},
//     {id:4,image:[organicproduct4],name:"Aloevera Lotion 30ml",price:"95.00",quantity:1},
//     {id:1,image:[organicskincareimg1],name:"Organic Coconut Oil – 200ml | Coconut Oil For Face And Body",price:"260.00",quantity:1},
//     {id:2,image:[organicskincareimg2],name:"Coco Butter Lotion 30ml",price:"105.00",quantity:1},
//     {id:3,image:[organicskincareimg3],name:"Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin",price:"150.00",quantity:1},
// ]

export const eidbundle = [
    { id: 1, image: [image1, image2], name: "MCT OIL 500 ML", price: "3200.00", quantity: 1 },
    { id: 2, image: [image3, image4], name: "Coconut Oil Jar 800ml", price: "920.00", quantity: 1 },
    { id: 3, image: [image5, image6], name: "Oat and Milk Lotion", price: "350.00", quantity: 1 },
    { id: 4, image: [image7, image8], name: "Coconut Butter lotion 100ml", price: "320.00", quantity: 1 },
    { id: 5, image: [image9, image10], name: "Aloevera lotion 100ml", price: "300.00", quantity: 1 },
    { id: 6, image: [image11, image12], name: "Neem soap", price: "120.00", quantity: 1 },
    { id: 7, image: [image13], name: "Mustard Oil 1 litre - Pet Bottle", price: "850.00", quantity: 1 },
    { id: 13, image: [discountimage6], name: "Family Pack 2", price: "1700.00", priceAfterDiscount: "620.00", quantity: 1 },
    { id: 14, image: [discountimage5], name: "Pack of Essential", price: "600.00", priceAfterDiscount: "820.00", quantity: 1 },
    { id: 15, image: [bestimage1], name: "Seven Herbal Hair Oil-100 ML", price: "250.00", quantity: 1 },
    { id: 16, image: [bestimage2], name: "Amla Hair Oil for Growth - 100 ML", price: "220.00", quantity: 1 },
    { id: 17, image: [bestimage3], name: "Coconut Oil with Aloe vera Extracts - 100 ML", price: "250.00", quantity: 1 },
    { id: 18, image: [bestimage4], name: "Organic 5 Serum for Strong Hair - 100 ML", price: "450.00", quantity: 1 },
    { id: 19, image: [bestimage5], name: "Black Seed Oil-Kalonji Oil for Hair-100 ML - Hair Fall Solution", price: "700.00", quantity: 1 },
    { id: 20, image: [bestimage6], name: "Organico's Coconut Mint oil -100 ML", price: "220.00", quantity: 1 },
    { id: 21, image: [bestimage7], name: "Cold Pressed Mustard Oil – 100ml – Sarson Ka Tail – Extracted From Pure Mustard Seeds", price: "150.00", quantity: 1 },
    { id: 22, image: [organicproduct1], name: "Organic Coconut Oil – 200ml | Coconut Oil For Face And Body", price: "260.00", quantity: 1 },
    { id: 23, image: [organicproduct2], name: "Organic Coconut Oil – 200ml | Coconut Oil For Face And Body", price: "105.00", quantity: 1 },
    { id: 24, image: [organicproduct3], name: "Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin", price: "150.00", quantity: 1 },
    { id: 25, image: [organicproduct4], name: "Aloevera Lotion 30ml", price: "95.00", quantity: 1 },
    { id: 26, image: [organicskincareimg1], name: "Organic Coconut Oil – 200ml | Coconut Oil For Face And Body", price: "260.00", quantity: 1 },
    { id: 27, image: [organicskincareimg2], name: "Coco Butter Lotion 30ml", price: "105.00", quantity: 1 },
    { id: 28, image: [organicskincareimg3], name: "Organico’s Coconut Oil 100-Ml – Virgin Coconut Oil For Hair & Skin", price: "150.00", quantity: 1 },
];
