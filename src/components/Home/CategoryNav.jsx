import {Link} from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="fixed top-0  left-0 right-0 mt-36 w-full border-b-2 border-gray-300 bg-white px-4 py-2 md:mt-16 md:px-8 lg:mt-16 lg:px-18">
      <div className="flex flex-row justify-between py-1 gap-10">
      <button className="flex shrink-0 items-center gap-2 rounded-lg bg-[#ff6a00] px-3 py-1 text-white md:gap-4 md:px-4">
        <i className="fa-solid fa-bars"></i>
        <h1>All Categories</h1>
      </button>
      <div className="hide-scrollbar flex min-w-0 flex-1 gap-5 overflow-x-auto whitespace-nowrap text-[#1F1F1F] md:justify-between md:gap-6 lg:gap-10">
        <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline font-semibold">Home</Link>
        <Link className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Today's Deal</Link>
        <Link className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Best Sellers</Link>
        <Link className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">new Arrivals</Link>
        <Link to="/electronics" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Electronics</Link>
        <Link to="/fashion" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Fashion</Link>
        <Link to="/beauty" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Beauty</Link>
        <Link to="living" className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">Home & Living</Link>
        <Link className="hover:text-[#ff6a00] transition-all duration-300 hover:underline font-semibold">More</Link>
      </div>
      </div>
    </div>
  )
}

export default CategoryNav
