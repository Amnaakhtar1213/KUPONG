import React from 'react'
const MainCard = ({product}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition">
      
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-full object-contain"
        />

        <i className="absolute bottom-3 right-3 fa-solid fa-heart text-gray-400 text-xl cursor-pointer hover:text-red-500"></i>
      </div>

      {/* Product Information */}
      <div className="mt-3">
        <h1 className="font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h1>

        <p className="mt-1 text-sm text-green-600">
          Guaranteed arrival tomorrow
        </p>

        <p className="mt-1 text-sm text-[#ff8200]">
          New Item
        </p>

        <p className="mt-1 text-sm text-gray-500">
          <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
          {product.rating}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-red-600 text-lg">
            {product.price}
          </span>

          <span className="bg-gray-200 px-3 py-1 text-xs text-gray-600 rounded-xl">
            Earn upto 560 points
          </span>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button className="bg-orange-500 text-white px-4 py-1 rounded-xl hover:bg-orange-400">Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default MainCard
