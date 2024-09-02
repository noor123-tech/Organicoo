import { useEffect, useState } from "react";
import { CgTemplate } from "react-icons/cg";
import { eidbundle } from "../Constant/Product";
// this is our api where we get cart data
import Card from "./card";
import EidBundleCard from "./Eidbundle-Card";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbColumns2 } from "react-icons/tb";
import { TbColumns3 } from "react-icons/tb";
import { IoEllipseSharp } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

import React from 'react';
import { BiLoader } from "react-icons/bi";

const Template = [
  { name: "OneColumn", icon: <GiHamburgerMenu />, isActive: false },
  { name: "TwoColumn", icon: <TbColumns2 />, isActive: false },
  { name: "ThreeColumn", icon: <TbColumns3 className="columnthree" />, isActive: false },
];

const EidBundle = () => {
  const [activeTemplate, setActiveTemplate] = useState("ThreeColumn")
  const [show, setShow] = useState(true);
  const [priceValue, setPriceValue] = useState(500)
  const [filteredEidbundle, setFilteredEidbundle] = useState(eidbundle);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [maxItems, setMaxItems] = useState(filteredEidbundle.length);
  const [showfilter, setShowfilter] = useState(false);

  useEffect(() => {
    setItemsToShow(Math.min(8, filteredEidbundle.length));

    let max = 0;
    for (let i = 0; i < filteredEidbundle.length; i++) {
      max++;
    }
    setMaxItems(max);

  }, [filteredEidbundle])
  const showmore = () => {
    if (itemsToShow < filteredEidbundle.length) {
      setItemsToShow((prevItems) => Math.min(prevItems + 8, filteredEidbundle.length));

    }
  }





 const apply=()=>{
    const filteredData = eidbundle.filter((item) => Number(item.price) <= priceValue);
    setFilteredEidbundle(filteredData);
  }

  const showdata = () => {
    setShow(!show);
  }

  const [show1, setShow1] = useState(true);
  const showdata1 = () => {
    setShow1(!show1);
  }
  const fshowfilter = () => {
    setShowfilter(!showfilter);
  }

  const [show3, setShow3] = useState(true);
  const showdata3 = () => {
    setShow3(!show3);
  }


  const handleTemplateClick = (item) => {
    setActiveTemplate(item);
    console.log(activeTemplate, "Columns");

    Template.forEach((product) => {
      product.isActive = false;
      console.log(product.isActive, "first");
      if (product.name === item) {

        product.isActive = true;
        console.log(product.isActive, "clicked one");
      }
    });
  }

  const handlePriceFilter = (e) => {
    console.log(e.target.value, "price")
    setPriceValue(e.target.value)
  }
  return (
    <>
    <div style={{display:'flex',maxWidth:"1350px",width:'100%'}}>
      {showfilter ? (
        <div id="filter-click">
          <div id="close-filter">
            <IoCloseSharp onClick={fshowfilter} />
          </div>
          <div id="eidbundle-options1">
            <div id="eidbundle-category" style={{ borderBottom: '1px solid #C7C7C7', marginBottom: '20px' }}>
              <div><h4><b>CATEGORIES</b></h4></div>
              {show ? (
                <FaAngleUp className="up-icon" onClick={showdata} />
              ) : (
                <FaAngleDown onClick={showdata} />
              )}
            </div>

            <div
              style={{
                height: show ? '240px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '40px'
              }}
            >
              <ul id="list-category" style={{ display: show ? 'block' : 'none', margin: 0, padding: 0, listStyleType: 'none', overflow: 'hidden' }}>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop Now</li>
                <li>Eid Bundles</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div id="eidbundle-category">
              <div><h4><b>AVAILABILITY</b></h4></div>
              {show1 ? (
                <FaAngleUp className="up-icon" onClick={showdata1} />
              ) : (
                <FaAngleDown onClick={showdata1} />
              )}
            </div>

            <div
              style={{
                height: show1 ? '70px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '20px'
              }}
            >
              <ul id="list-availability" style={{ display: show1 ? 'block' : 'none', overflow: 'hidden' }}>
                <li>
                  <input type="checkbox" id="inStockCheckbox" name="inStockCheckbox" /> In Stock (38)
                </li>
                <li>
                  <input type="checkbox" id="outStockCheckbox" name="outStockCheckbox" /> Out of Stock
                </li>
              </ul>
            </div>

            <div id="eidbundle-category" style={{ borderBottom: '1px solid #C7C7C7', marginBottom: '20px' }}>
              <div><h4><b>PRICE</b></h4></div>
              {show ? (
                <FaAngleUp className="up-icon" onClick={showdata3} />
              ) : (
                <FaAngleDown onClick={showdata3} />
              )}
            </div>

            <div
              style={{
                height: show3 ? '150px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '40px',
              }}
            >
              <div>
                <input type="range" min="0" max="1000000" value={priceValue} onChange={(e) => { handlePriceFilter(e) }} />
                <div id="price-category">
                  <div><input type="number" placeholder="Rs 0" value="0" style={{ borderRadius: '20px' }} /></div>
                  <div>to</div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <input type="number" placeholder="Rs 0" style={{ borderRadius: '20px' }} onChange={(e) => { handlePriceFilter(e) }} value={priceValue} />
                  </div>
                </div>
                <div className="price-category-btn"><button onClick={apply}>Apply</button></div>
              </div>
            </div>
          </div>
        </div>
      ) : 
      

      (
    //  <div >
       
          <div id="eidbundle-options">
            <div id="eidbundle-category" style={{ borderBottom: '1px solid #C7C7C7', marginBottom: '20px' }}>
              <div><h4><b>CATEGORIES</b></h4></div>
              {show ? (
                <FaAngleUp className="up-icon" onClick={showdata} />
              ) : (
                <FaAngleDown onClick={showdata} />
              )}
            </div>

            <div
              style={{
                height: show ? '240px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '40px'
              }}
            >
              <ul id="list-category" style={{ display: show ? 'block' : 'none', margin: 0, padding: 0, listStyleType: 'none', overflow: 'hidden' }}>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop Now</li>
                <li>Eid Bundles</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div id="eidbundle-category">
              <div><h4><b>AVAILABILITY</b></h4></div>
              {show1 ? (
                <FaAngleUp className="up-icon" onClick={showdata1} />
              ) : (
                <FaAngleDown onClick={showdata1} />
              )}
            </div>

            <div
              style={{
                height: show1 ? '70px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '20px'
              }}
            >
              <ul id="list-availability" style={{ display: show1 ? 'block' : 'none', overflow: 'hidden' }}>
                <li>
                  <input type="checkbox" id="inStockCheckbox" name="inStockCheckbox" /> In Stock (38)
                </li>
                <li>
                  <input type="checkbox" id="outStockCheckbox" name="outStockCheckbox" /> Out of Stock
                </li>
              </ul>
            </div>

            <div id="eidbundle-category" style={{ borderBottom: '1px solid #C7C7C7', marginBottom: '20px' }}>
              <div><h4><b>PRICE</b></h4></div>
              {show ? (
                <FaAngleUp className="up-icon" onClick={showdata3} />
              ) : (
                <FaAngleDown onClick={showdata3} />
              )}
            </div>

            <div
              style={{
                height: show3 ? '150px' : '0px',
                overflow: 'hidden',
                transition: 'height 1s ease',
                marginBottom: '40px',
              }}
            >
              <div>
                <input type="range" min="0" max="1000000" value={priceValue} onChange={(e) => { handlePriceFilter(e) }} />
                <div id="price-category">
                  <div><input type="number" placeholder="Rs 0" value="0" style={{ borderRadius: '20px' }} /></div>
                  <div>to</div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <input type="number" placeholder="Rs 0" style={{ borderRadius: '20px' }} onChange={(e) => { handlePriceFilter(e) }} value={priceValue} />
                  </div>
                </div>
                <div className="price-category-btn"><button onClick={apply}>Apply</button></div>
              </div>
            </div>
          </div>
    
      )}








      {/*  */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',maxWidth:'1280px',width:'100%' }}>
        <div id="eidbundle-parentCont" style={{
          width: '100%', height: '100%'
        }} >


          <div id="eidbundle-layout" >
            <div id="filter-icon" onClick={fshowfilter} >
              <CiFilter  className="filter" />
              Filter
            </div>
            <div style={{ display: 'flex', columnGap: '10px' }}>
              VIEW AS
              {Template?.length > 0 && Template.map((item) => (
                <div
                  key={item.name}
                  style={{
                    width: '30px',
                    height: '22px',
                    color: item.name === activeTemplate ? "black" : "lightgray",
                    cursor: 'pointer'
                  }}
                  onClick={() => handleTemplateClick(item.name)}
                >
                  {React.cloneElement(item.icon, { style: { width: '25px', height: '25px' } })}

                </div>
              ))}
            </div>

            <div className="lists" >
              ITEMS PER PAGE
              <select style={{ padding: '15px 30px', border: "1px solid #C7C7C7", outline: 'none', backgroundColor: 'white' }}>
                <option >10</option>
                <option >15</option>
                <option selected>20</option>
                <option >25</option>
                <option >30</option>
                <option >40</option>
                <option >50</option>
              </select>
            </div>
          </div>
          <div>
            {!filteredEidbundle || filteredEidbundle.length === 0 && (
              <p className="message" style={{ textAlign: 'center', marginTop: '20%' }}>
                Product in this price range isn't available
              </p>
            )}

            <div id="eidbundle-columns"
              className={activeTemplate}
            >


              {filteredEidbundle && filteredEidbundle.length > 0 &&
                filteredEidbundle.slice(0, itemsToShow).map((item) => (
                  <Card Data={item} title="EidBundle" template={activeTemplate} key={item.id} />
                ))
              }

            </div>
          </div>

        </div>

        <div id="eidbundle-showmore">
          <div style={{ paddingTop: '10px' }}>Showing 1 - {itemsToShow} of {maxItems} total

          </div>
          <button onClick={showmore}>Show more</button>
        </div>
      </div>
</div>

    </>
  );
};

export default EidBundle