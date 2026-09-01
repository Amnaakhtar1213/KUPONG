import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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

function App() {
  
const [cart, setCart] = useState([ {
    id: 6,
    title: "Nourishing Shampoo for Smooth and Healthy-Looking Hair",
    category: "Hair Care",
    image:
      "https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/retail/images/44694679345788-54680a62-260b-4f17-bf4c-263f6ed3ef6f.jpg",
    rating: 4.7,
    reviews: 312,
    price: 14900,
    oldPrice: 19900,
    discount: 25,
    description:
      "A nourishing everyday shampoo designed to gently cleanse hair while helping it feel soft, smooth, and manageable.",
    size: "400ml",
    hairType: ["Normal", "Dry", "Damaged"],
    features: [
      "Gentle Cleansing",
      "Nourishing Formula",
      "Daily Use",
      
    ],
    quantity:1,
  },
 {
    id: 30,
    title: "Anseongtangman",
    image: "https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/66263343501995-05c20a04-6773-4225-b5a3-9871bbeaeec1.jpg",
    delivery: "Delivery Tomorrow",
    price: 6500,
    category: "Food & Grocery",
     quantity:1,
  },]);

  return (
   <BrowserRouter>
    <Header />
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
            <Route path="/save" element={<Save />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/profile" element={<Profile />}/>
             
      
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
