import React from 'react'

const SaveCard = ({product}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="h-48 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-3">
        <h2 className="font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          ⭐ {product.rating}
        </p>

        <p className="mt-2 text-lg font-bold text-[#ff6a00]">
          ₩{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default SaveCard
