import React from 'react'


const PantsCard = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">

      {/* Image */}
      <div className="relative bg-gray-100 h-64">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Tag */}
        {product.tag && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}

        {/* Heart */}
        <button className="absolute top-2 right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">
          <i className="fa-regular fa-heart text-gray-500"></i>
        </button>
      </div>

      {/* Details */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {product.type} • {product.gender}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="text-sm font-medium">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            Rs. {product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            Rs. {product.oldPrice}
          </span>
        </div>

        {/* Extra info */}
        <p className="text-xs text-gray-500 mt-1">
          Earn {product.points} points
        </p>

        {/* Delivery */}
        <p className="text-xs text-green-600 mt-2">
          🚚 Delivery in {product.arrival}
        </p>

        {/* Button */}
        <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition">
          Add to Cart
        </button>

      </div>
    </div>

  )
}

export default PantsCard
