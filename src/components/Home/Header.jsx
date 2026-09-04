

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg shadow-gray-200">

      {/* Main Navbar */}
      <nav className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8 lg:px-14">

        {/* Logo + Menu + Location */}
        <div className="flex items-center gap-6 lg:gap-8">

          {/* Mobile Menu */}
          <button onClick={() => setMenu(!menu)}className="text-xl text-[#FF6A00] md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Logo */}
          <Link to="/" className="flex flex-row text-3xl font-bold">
            <h1 className="text-orange-950">k</h1>
            <h1 className="text-orange-950">u</h1>
            <h1 className="text-green-600">p</h1>
            <h1 className="text-blue-500">O</h1>
            <h1 className="text-orange-500">n</h1>
            <h1 className="text-red-500">g</h1>
          </Link>

          {/* Location - Desktop */}
          <div className="hidden items-center gap-2 lg:flex">
            <i className="fa-solid fa-location-dot text-[#FF6A00]"></i>

            <div className="flex flex-col">
              <span className="text-xs text-gray-400">
                Deliver to
              </span>

              <span className="text-sm text-[#1F1F1F]">
                Islamabad, Pakistan
              </span>
            </div>
          </div>

        </div>


        {/* Search */}
        <div className="relative order-3 w-full md:order-0 md:flex-1 md:max-w-2xl lg:mx-6">

          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#FF6A00] px-10 py-2 text-sm outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-orange-100"
            type="text"
            placeholder="Search products, brands, categories..."
          />

        </div>


        {/* Right Actions */}
        <div className="flex items-center gap-5">

          {/* Wishlist */}
          <Link
            to="/save"
            className="text-lg text-[#1F1F1F] transition hover:text-[#FF6A00]"
          >
            <i className="fa-solid fa-heart"></i>
          </Link>


          {/* Account Dropdown */}
          <div className="relative">

            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="hidden items-center gap-2 text-[#1F1F1F] transition hover:text-[#FF6A00] md:flex"
            >
              <i className="fa-solid fa-user text-lg"></i>

              <span className="text-sm font-semibold">
                Account
              </span>

              <i
                className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
                  accountOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>


            {/* Dropdown */}
            {accountOpen && (
              <div className="absolute right-0 top-10 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">

                <Link
                  to="/profile"
                  onClick={() => setAccountOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
                >
                  <i className="fa-solid fa-user"></i>
                  My Profile
                </Link>

                <Link
                  to="/login"
                  onClick={() => setAccountOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setAccountOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
                >
                  <i className="fa-solid fa-user-plus"></i>
                  Signup
                </Link>

              </div>
            )}


            {/* Mobile Account */}
            <Link
              to="/login"
              className="text-lg text-[#1F1F1F] transition hover:text-[#FF6A00] md:hidden"
            >
              <i className="fa-solid fa-user"></i>
            </Link>

          </div>


          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-lg text-[#FF6A00]"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

        </div>

      </nav>

     {menu && (
        <div className="absolute left-0 top-14 w-full rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
          <Link
            to="/profile"
            onClick={() => setMenu(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
          >
            <i className="fa-solid fa-user"></i>
            My Profile
          </Link>

          <Link
            to="/login"
            onClick={() => setMenu(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMenu(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6A00]"
          >
            <i className="fa-solid fa-user-plus"></i>
            Signup
          </Link>
        </div>
      )}

      {/* Mobile Location */}
      <div className="flex items-center gap-2 border-t border-gray-100 px-4 py-2 lg:hidden">

        <i className="fa-solid fa-location-dot text-sm text-[#FF6A00]"></i>

        <span className="text-xs text-gray-400">
          Deliver to
        </span>

        <span className="text-sm font-medium text-[#1F1F1F]">
          Islamabad, Pakistan
        </span>

      </div>

    </header>
  );
};

export default Header;


