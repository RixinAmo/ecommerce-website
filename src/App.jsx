import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
<<<<<<< HEAD
import { useState, useEffect } from "react";

export const UserContext = React.createContext();

function App() {
=======
// ------------------------------
import { useState, useEffect } from "react";

export const UserContext = React.createContext();
//---------------------------------

function App() {
  //---------------------------
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);
<<<<<<< HEAD
=======
  //---------------------
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a
  
  return (
    
    <div >
<<<<<<< HEAD
      <UserContext.Provider value={{ user, setUser }}>
=======
      {/* ---------------------------- */}
      <UserContext.Provider value={{ user, setUser }}>
        {/* ---------------------------- */}
>>>>>>> 3cd613e60ba8b6b0942f6771ae0061757699b55a

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

      </UserContext.Provider>

    </div>
     
  )
}

export default App
