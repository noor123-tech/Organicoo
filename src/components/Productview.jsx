import React, { useEffect, useState, useContext } from 'react';
import { IoClose, IoEllipseSharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { Product,eidbundle , DiscountBundle, BestProduct, OrganicProductBundle, KetoProductBundle, organicskincare } from '../Constant/Product';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PiGreaterThanLight } from "react-icons/pi";
import { contextState } from "../App";

const Productview = () => {
  const navigate = useNavigate();
  const { cartdata, setCartdata, setTotalquantity , totalquantity} = useContext(contextState);

  const location = useLocation()
  const [editId, setEditId] = useState("")
  const [category, setCategory] = useState("")
  const [productList, setProductList] = useState([])
  const [values, setValues] = useState("");
  const [totalquant, setTotalquan] = useState(0);
  const addcart = (values) => {
    const itemexists = cartdata.find((item) => item.id == editId);
  
    if (itemexists) {
      const updatedData = cartdata.map((item) => {
        if (item.id == editId) {
          return {
            ...item,
            quantity: values.quantity
          };
        } else {
          return item;
        }
      });
      setCartdata(updatedData);
   
    } else {
      setCartdata([...cartdata, { ...values, id: editId }]);

    }
  };
  
  // Log the updated cart data using useEffect to ensure the state has been updated
  useEffect(() => {
    console.log('Updated cart data:', cartdata);
  }, [cartdata]);
  useEffect(() => {
    const searchId = new URLSearchParams(location.search)
    const id = searchId.get("id")
    const name = searchId.get('category');
    setEditId(id ?? "")
    setCategory(name ?? "")
    console.log('ID:', id, 'Category:', name); // Add this line

  }, [location.search])
  const incre = (values) => {
    setValues((prevValues) => ({
      ...prevValues,
      quantity: prevValues.quantity + 1,
    }));
  
    setTotalquantity(totalquantity+1)
    // setTtotalquantity(values.quantity); 
  }
  const decre = (values) => {
    if (values.quantity > 1) {
      setValues((prevValues) => ({
        ...prevValues,
        quantity: prevValues.quantity - 1,
      }));
      setTotalquantity(totalquantity-1)
      // setTotalquantity(values.quantity); 
    }
  }

const UpdateData = (values) => {
  const data = cartdata
  console.log(data,'data')
  if(data?.length > 0){
    data.map((item)=>{
      if(item?.id == editId){
        console.log(item,values,"check")
      }
    })
  }else{
    setCartdata(values)
  }
}
  useEffect(() => {
    console.log(category,"Category");
    if (category) {
      if (category === "product") {
        let filterdata = Product.find((item) => {
          return item.id == editId;
        })
        console.log(filterdata, "filterdata")
        if (filterdata) {
          setValues(
            {
              name: filterdata?.name ?? "",
              price: filterdata?.price ?? "",
              quantity: filterdata?.quantity ?? "",
              image: filterdata?.image ?? "",
            }
          );
        }
        console.log('-->', values);
      }
      else if (category === "discount") {
        let filterdata = DiscountBundle.find((item) => {
          return item.id == editId;
        })
        if (filterdata) {
          setValues(
            {
              name: filterdata?.name ?? "",
              price: filterdata?.price ?? "",
              quantity: filterdata?.quantity ?? "",
              image: filterdata?.image ?? "",
            }
          );
        }
      } else if (category === "organicproduct") {
        let filterdata = BestProduct.find((item) => {
          return item.id == editId;
        })
        if (filterdata) {
          setValues(
            {
              name: filterdata?.name ?? "",
              price: filterdata?.price ?? "",
              quantity: filterdata?.quantity ?? "",
              image: filterdata?.image ?? "",
            }
          );
        }
      } else if (category === "organicskincare") {
        let filterdata = organicskincare.find((item) => {
          return item.id == editId;
        })
        if (filterdata) {
          setValues(
            {
              name: filterdata?.name ?? "",
              price: filterdata?.price ?? "",
              quantity: filterdata?.quantity ?? "",
              image: filterdata?.image ?? "",
            }
          );
        }
      }
      else if (category === "ketoproduct") {
        let filterdata = KetoProductBundle.find((item) => {
          return item.id == editId;
        })
        if (filterdata) {
          setValues(
            {
              name: filterdata?.name ?? "",
              price: filterdata?.price ?? "",
              quantity: filterdata?.quantity ?? "",
              image: filterdata?.image ?? "",
            }
          );
        }
      }

    
    else if (category === "EidBundle") {
      let filterdata =  eidbundle.find((item) => {
        return item.id == editId;
      })
      if (filterdata) {
        setValues(
          {
            name: filterdata?.name ?? "",
            price: filterdata?.price ?? "",
            quantity: filterdata?.quantity ?? "",
            image: filterdata?.image ?? "",
          }
        );
      }
    }
    }
    else {
      console.log("No data found for category:", category, "and id:", editId);
    }
  }, [editId, category])

  return (

    <>
      <div id='productview-parentCont'>
        <div id="gohomepage" style={{
          marginBottom: '20px',
          display: 'flex',

          alignItems: 'center',
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home  &nbsp;
          </Link>
          &gt; {values.name}
        </div>
        <div id="productview-container">


          <div id="productview-img">
            <div id="sale-productview">Sale</div>
            {values.image && values.image.length > 0 && <img src={values.image[0]} alt={values.name} />}
          </div>

          <div id="productview-item-data">
            <div id="productview-name">
              {/* {product.name} */}
              {values.name}
            </div>
            <div id="sold-lasthour">
              <FaFireFlameCurved style={{ marginRight: '8px', fontSize: '18px' }} />
              6 sold in last 18 hours
            </div>
            <span id="availability"
              style={{
                fontSize: '14px',
                color: '#3C3C3C',
                lineHeight: '24px'

              }}
            >
              Availability: In Stock
            </span>
            <div id="productview-price">
              {/* Rs.{product.price} */}
              Rs.  {values.price}
            </div>
            {/* to add space here */}
            <div>

            </div>
            <div>

            </div>
            <div style={{ color: '#232323' }}>
              Quantity:
            </div>
            <div id="productview-quantityparent">
              <div id="productview-quantity">

                <FiMinus onClick={() => { decre(values) }} />
                   {totalquantity}
                <FaPlus onClick={() => { incre(values) }} />
              </div>
            </div>
            <div id="productview-subtotal">
              Subtotal: Rs  {((values.price*values.quantity).toFixed(2))}

            </div>
            <div id="productview-addtocart">
              <button onClick={() => { addcart(values) }} >Add to Cart</button>
              <div id="productview-links">
                <div className='like'>
                  <FiHeart />
                </div>
                <div>
                  <IoShareSocialOutline style={{ fontSize: '28px', marginLeft: '10px' }} />
                </div>
              </div>
            </div>


            <div id="product-views">
              <FaRegEye style={{ marginRight: '8px', fontSize: '20px' }} />
              291 customers are viewing this product
            </div>
          </div>
        </div>
        <div id="productview-desc">
          <h3>Discount</h3>
          Our seven herbal oil is a unique blend of 7 powerful and nourishing herbs. It is specially formulated to give you long, extensive, and non-sticky damage repair solutions for your silky tresses.
          <ul>
            <li>
              Seven herbal hair oil is a root repair treatment for weak and damaged hair.

            </li>
            <li>
              It not only fosters hair growth but also strengthens the roots and gently makes your hair smooth and silky.

            </li>
            <li>
              7 herbal oil is naturally pure food for your hair and the best solution to get rid of dandruff and hair fall.

            </li>

            <li>
              Best hair oil for growth that makes your hair up to 20x stronger, long, and voluminous. It’s a perfect therapy for all your hair problems.

            </li>
          </ul>
          <h2 style={{ marginTop: '30px', marginBottom: '20px' }}>Buy Seven Herbal Oil For Hair In Pakistan</h2>
          <p>   Why gamble with your hair condition when you can protect it with Organico Seven Herbal Oil? One ingredient is not enough when it comes to inducing quick and easy hair growth. So we have blended 7 (yes 7!) powerful ingredients to make it a fail-proof solution for your silky tresses.

            Ingredients:

            It is a blend of 7 powerful ingredients including:
            <br></br>
            <div style={{ marginTop: '10px' }}>
              <p><b>Sesame Oil:</b> It is a hair fall oil with occlusive traits which keep your scalp moisturized and prevents scalp dryness, itching, and flaking.</p>
              <p><b>Emblica</b> (Amla): Amla has a special effect on hair growth, it strengthens rough and frizzy hair and prevents premature greying and thinning of hair.</p>
              <p><b>Taramira Oil:</b> 2-3 hours of massaging of taramira oil ensure dandruff-free long tresses and its essence is a perfect remedy for nits and lice.</p>
              <p><b>Coriander Oil:</b> This haircare oil stimulates hair growth and prevents premature greying. This oil typically strengthens hair bulbs, prevents dandruff, and helps with scalp diseases.</p>
              <p><b>Mustard Oil:</b> Mustard oil is enriched with fatty acids, which helps in keeping the moisture of your hair intact, and keeps your hair bouncy and fresh.</p>
              <p><b>Aritha:</b> Aritha is known for promoting hair growth and makes your hair softer and shinier.</p>
              <p><b>Shikakai:</b> Shikakai is a great source of essential vitamins and it is an excellent cleanser that removes oil from your scalp without stripping off the natural oils.</p>
            </div>
            When all these wonderful ingredients blend together they produce a miraculous potion that brings tremendous results for your hair.
          </p>
          <h2 style={{ marginTop: '20px' }}> How to use Seven herbal oil
          </h2>
          <ol>
            <li>
              Apply our seven herbal hair oil on your scalp with the help of your fingertips and massage gently for 15-20 minutes.

            </li>
            <li>Don’t use your palms for massage, use your finger tips.
            </li>
            <li>Steam your hair with a hot towel to make sure the oil absorbs properly.
            </li>
            <li>Leave oil on your hair for two hours or overnight.
            </li>
            <li>Wash your hair within 12 hours.
            </li>
          </ol>
        </div>
      </div>

    </>
  );
};

export default Productview;
