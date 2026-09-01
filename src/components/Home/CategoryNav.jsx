import { useState } from "react";
import {Link} from "react-router-dom";

const CategoryNav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0  left-0 right-0 mt-36 w-full border-b-2 border-gray-300 bg-white px-4 py-2 md:mt-16 md:px-8 lg:mt-16 lg:px-18">
      <div className="relative flex flex-row justify-between py-1 gap-10">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex shrink-0 items-center gap-2 rounded-lg bg-[#ff6a00] px-3 py-1 text-white md:gap-4 md:px-4">
        <i className="fa-solid fa-bars"></i>
        <h1>All Categories</h1>
      </button>
      {isMenuOpen && (

  <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg bg-white shadow-lg text-gray-500">
      <Link to="/electronics">
          <div className="px-4 hover:text-[#ff8200]">
            Electronics
          </div>
      </Link>
     
   <Link to="/fashion">
     <div className=" hover:text-[#ff8200] px-4 py-1">
        Fashion
      </div>
      </Link>
    

<Link to="/">
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Jackets/Coats/Sweaters
      </div>
      </Link>
     

<Link to="/food">
<div className=" hover:text-[#ff8200] px-4 py-1 ">
        Food & Grocery
      </div>
      </Link>

<Link to="/food">
<div className="hover:text-[#ff8200] px-4 py-1 ">
        Shoes/Boots/sneakers
      </div>
      </Link>
      

<Link to="/electronics">
 <div className="hover:text-[#ff8200] px-4 py-1  ">
        Home Appliances
      </div>
      </Link>
     

<Link to="/beauty">
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Beauty
      </div>
      </Link>
     

<Link to="/">
  <div className="hover:text-[#ff8200] px-4 py-1 ">
        Accessories
      </div>
      </Link>
    

<Link to="/">
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Kids Clothes
      </div>
      </Link>
     

<Link>
 <div className="hover:text-[#ff8200] px-4 py-1">
        Hanbok  
      </div>
      </Link>
     

<Link to="/">
<div className="px-4 py-1 hover:bg-[#ff8200]">
        Pants/Jeans
      </div>
      </Link>
      

<Link>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Toys
      </div>
      </Link>
       

<Link to="/electronics">
    <div className="px-4 py-1 hover:text-[#ff8200]">
        Kitchen
      </div>

</Link>
      
<Link>
 <div className="px-4 py-1 hover:text-[#ff8200]">
        Music/Books
      </div>
      </Link>
      

<Link>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Home Interior
      </div>
      </Link>
      

<Link to="/arrivals">
 <div className="px-4 py-1 hover:text-[#ff8200]">
        Sports/Hobbies
      </div>

</Link>
     
<Link>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Stationary
      </div>
      </Link>      
      

      <Link to="/todays">
       <div className="px-4 py-1 hover:text-[#ff8200] ">
        Health/Food
      </div>
      </Link>
     

    </div>
      )}
      <div className="hide-scrollbar flex min-w-0 flex-1 gap-5 overflow-x-auto whitespace-nowrap text-[#1F1F1F] md:justify-between md:gap-6 lg:gap-10">
        <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline font-semibold">Home</Link>
        <Link to="/todays" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Today's Deal</Link>
        <Link to="/best" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Best Sellers</Link>
        <Link to="/arrivals" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">new Arrivals</Link>
        <Link to="/electronics" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Electronics</Link>
        <Link to="/fashion" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Fashion</Link>
        <Link to="/beauty" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Beauty</Link>
        <Link to="/food" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Food</Link>
        <Link className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">More</Link>
      </div>
      </div>
    </div>
  )
}

export default CategoryNav
