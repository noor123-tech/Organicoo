import React, { createContext ,useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Home from './Home';
import Contactus from './components/Contactus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EidBundle from './components/EidBundle';
// import { organicskincare } from '../Constant/Product';

import Productview from "./components/Productview"; 
import EidBundleCard from './components/Eidbundle-Card';
export const contextState = createContext();
function App() {
const [cartdata,setCartdata]=useState([]);
const [totalquantity,setTotalquantity]=useState([]);
useEffect(()=>{
console.log(cartdata,"cartdata");
},[cartdata])
  return (
    <main>
      <contextState.Provider value={{cartdata,setCartdata,totalquantity,setTotalquantity}}> 
        <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/product" element={<Productview/>}/>
          <Route path="/eidbundle" element={<EidBundle/>}/>
          <Route path="/eidbundlecard" element={<EidBundleCard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </contextState.Provider>


      {/* <RouterProvider router={router} /> */}



      {/* <Card Product={Product}/> */}
    </main>
  );
}

export default App;