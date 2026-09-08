import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Electronics from "./components/pages/Electronics"
import Home from "./components/pages/Home"
import Header from "./components/Home/Header";
import CategoryNav from "./components/Home/CategoryNav";
import Fashion from "./components/pages/Fashion";
import Beauty from "./components/pages/Beauty";
import Food from "./components/pages/Food";
import NewArrival from "./components/pages/NewArrival";
import Best from "./components/pages/Best";
import TodayDeals from "./components/pages/TodayDeals";
import Cart from "./components/pages/Cart";
import Save from "./components/pages/Save";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Footer from "./components/pages/Footer";
import Profile from "./components/pages/Profile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("kupongCart")) || [];
  return savedCart;
});

useEffect(() => {
localStorage.setItem("kupongCart", JSON.stringify(cart))
}, [cart])

  return (
   <BrowserRouter>
   <ScrollToTop />
    <Header cart={cart}/>
      <CategoryNav />
     <Routes>
     <Route path="/" element={<Home />}/>
      <Route path="/electronics" element={<Electronics />}/>
       <Route path="/fashion" element={<Fashion />}/>
       <Route path="/beauty" element={<Beauty />}/>
        <Route path="/food" element={<Food />}/>
        <Route path="/arrivals" element={<NewArrival />}/>
         <Route path="/best" element={<Best />}/>
          <Route path="/todays" element={<TodayDeals />}/>
           <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path="/save" element={<Save setCart={setCart}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/profile" element={<Profile />}/>
             
      
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
