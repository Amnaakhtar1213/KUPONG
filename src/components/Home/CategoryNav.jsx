import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CategoryNav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [moreMenu, setMoreMenu] = useState(false)

const closeMenus = () => {
  setIsMenuOpen(false);
  setMoreMenu(false);
};

  return (
    <div className="fixed top-0 z-50  left-0 right-0 mt-36 w-full border-b-2 border-gray-300 bg-white px-4 py-2 md:mt-16 md:px-8 lg:mt-15 lg:px-18">
      <div className="relative flex flex-row justify-between py-1 gap-10">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex shrink-0 items-center gap-2 rounded-lg bg-[#ff6a00] px-3 py-1 text-white md:gap-4 md:px-4">
        <i className="fa-solid fa-bars"></i>
        <h1>All Categories</h1>
      </button>
      {isMenuOpen && (

  <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg bg-white shadow-lg text-gray-500">
      <Link to="/electronics" onClick={closeMenus}>
          <div className="px-4 hover:text-[#ff8200]">
            Electronics
          </div>
      </Link>
     
   <Link to="/fashion" onClick={closeMenus}>
     <div className=" hover:text-[#ff8200] px-4 py-1">
        Fashion
      </div>
      </Link>
    

<Link to="/" onClick={closeMenus}>
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Jackets/Coats/Sweaters
      </div>
      </Link>
     

<Link to="/food" onClick={closeMenus}>
<div className=" hover:text-[#ff8200] px-4 py-1 ">
        Food & Grocery
      </div>
      </Link>

<Link to="/shoes" onClick={closeMenus}>
<div className="hover:text-[#ff8200] px-4 py-1 ">
        Shoes/Boots/sneakers
      </div>
      </Link>
      

<Link to="/electronics" onClick={closeMenus}>
 <div className="hover:text-[#ff8200] px-4 py-1  ">
        Home Appliances
      </div>
      </Link>
     

<Link to="/beauty" onClick={closeMenus}>
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Beauty
      </div>
      </Link>
     

<Link to="/" onClick={closeMenus}>
  <div className="hover:text-[#ff8200] px-4 py-1 ">
        Accessories
      </div>
      </Link>
    

<Link to="/kids" onClick={closeMenus}>
 <div className="hover:text-[#ff8200] px-4 py-1 ">
        Kids Clothes
      </div>
      </Link>
     

<Link to="/hanbok" onClick={closeMenus}>
 <div className="hover:text-[#ff8200] px-4 py-1">
        Hanbok  
      </div>
      </Link>
     

<Link to="/pant" onClick={closeMenus}>
<div className="px-4 py-1 hover:bg-[#ff8200]">
        Pants/Jeans
      </div>
      </Link>
      

<Link to="/toys" onClick={closeMenus}>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Toys
      </div>
      </Link>
       

<Link to="/electronics" onClick={closeMenus}>
    <div className="px-4 py-1 hover:text-[#ff8200]">
        Kitchen
      </div>

</Link>
      
<Link to="/book" onClick={closeMenus}>
 <div className="px-4 py-1 hover:text-[#ff8200]">
        Music/Books
      </div>
      </Link>
      

<Link to="/" onClick={closeMenus}>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Home Interior
      </div>
      </Link>
      

<Link to="/arrivals" onClick={closeMenus}>
 <div className="px-4 py-1 hover:text-[#ff8200]">
        Sports/Hobbies
      </div>

</Link>
     
<Link to="/stationary" onClick={closeMenus}>
<div className="px-4 py-1 hover:text-[#ff8200]">
        Stationary
      </div>
      </Link>      
      

      <Link to="/todays" onClick={closeMenus}>
       <div className="px-4 py-1 hover:text-[#ff8200] ">
        Health/Food
      </div>
      </Link>
     

    </div>
      )}
      <div className="hide-scrollbar flex min-w-0 flex-1 gap-5 overflow-x-auto whitespace-nowrap md:justify-between md:gap-6 lg:gap-10">

       <NavLink to="/" className={({ isActive }) => `transition-all duration-300 font-bold ${isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Home
  </NavLink>

<NavLink
  to="/flash"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Flash Sale 🔥
</NavLink>

<NavLink
  to="/rocket"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  🚀 Rocket Delivery
</NavLink>

        <NavLink
  to="/best"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Best Sellers 🛍️
</NavLink>
        <NavLink
  to="/todays"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Today's Deal
</NavLink>
       <NavLink
  to="/arrivals"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  New Arrivals
</NavLink>
        <NavLink
  to="/electronics"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Electronics
</NavLink>
        <NavLink
  to="/fashion"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Fashion
</NavLink>
        <NavLink
  to="/beauty"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Beauty
</NavLink>
        <NavLink
  to="/food"
  className={({ isActive }) =>
    `transition-all duration-300 font-bold ${
      isActive
        ? "text-[#ff6a00] underline"
        : "hover:text-[#ff6a00] hover:underline"
    }`
  }
>
  Food
</NavLink>

        <Link onClick={() => setMoreMenu(!moreMenu)} className="relative hover:text-[#ff6a00] transition-all duration-300 hover:underline font-bold">More</Link>
        {moreMenu && (
          <div className="absolute -right-18 top-full z-50 mt-2 w-40 rounded-lg bg-white shadow-lg text-gray-400">
            <Link to="/all">
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                All
            </div>
        </Link>
          <Link to="/womens" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                womens cloths
            </div>
        </Link>
        <Link to="/mens" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Mens cloths
            </div>
        </Link>
        <Link to="/tech" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Phones / computers
            </div>
        </Link>
        <Link to="/hoodies" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Hoodies
            </div>
        </Link>
        <Link to="/care" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Skin Care
            </div>
        </Link>
        <Link to="/sweater" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Sweaters
            </div>
        </Link>
        <Link to="/coat" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Coats
            </div>
        </Link>
        <Link to="/tech" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                Tablets
            </div>
        </Link>
        <Link to="/shoes" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
               Fur shoes / Boots
            </div>
        </Link>
        <Link to="/kids" onClick={closeMenus}>
            <div className="hover:text-[#ff8200] px-4 py-1 ">
                kids cloth
            </div>
        </Link>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default CategoryNav
