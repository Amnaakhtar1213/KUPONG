

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg shadow-gray-200">

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8 lg:px-14">

        {/* Logo + Menu + Location */}
        <div className="flex items-center gap-8">

          {/* Mobile Menu */}
          <button className="text-xl text-[#FF6A00] md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Logo */}
        <div className="flex flex-row font-bold text-3xl">
          <h1 className="text-orange-950">k</h1>
           <h1 className="text-orange-950">u</h1>
            <h1 className="text-green-600">p</h1>
             <h1 className="text-blue-500">O</h1>
              <h1 className="text-orange-500">n</h1>
               <h1 className="text-red-500">g</h1>
        </div>

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
            className="w-full rounded-xl border border-[#FF6A00] px-10 py-2 text-sm outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-orange-100"
            type="text"
            placeholder="Search products, brands, categories..."
          />

        </div>


        {/* Right Actions */}
        <div className="flex items-center gap-10">

          {/* Wishlist - Desktop */}
          <button className="hidden text-lg text-[#1F1F1F] hover:text-[#FF6A00] md:block">
            <i className="fa-solid fa-heart"></i>
          </button>

          {/* Account - Desktop */}
          <button className="hidden items-center gap-2 text-[#1F1F1F] hover:text-[#FF6A00] md:flex">
            <i className="fa-solid fa-user text-gray-500"></i>
            <span className="font-semibold">
              Account
            </span>
          </button>

          {/* Cart */}
          <button className="text-lg text-[#FF6A00]">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

        </div>

      </div>


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
  )
}

export default Header
