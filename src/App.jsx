import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  

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
           <Route path="/cart" element={<Cart />}/>
            <Route path="/save" element={<Save />}/>
      
     </Routes>
   </BrowserRouter>
  )
}

export default App
