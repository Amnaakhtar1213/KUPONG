import { BrowserRouter, Routes, Route } from "react-router-dom";

import Electronics from "./components/pages/Electronics"
import Home from "./components/pages/Home"
import Header from "./components/Home/Header";
import CategoryNav from "./components/Home/CategoryNav";
import Fashion from "./components/pages/Fashion";
import Beauty from "./components/pages/Beauty";

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
       <Route path="/living" element={<Fashion />}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App
