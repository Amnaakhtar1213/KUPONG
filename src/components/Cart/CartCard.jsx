import React from 'react'

const CartCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4">

        {/* Product Image */}
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between">

          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Fresh Red Apples
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Fresh and juicy premium quality apples
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-3 flex items-center gap-4">

            {/* Quantity */}
            <div className="flex items-center rounded-md border border-gray-300">
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                −
              </button>

              <span className="px-3 py-1 text-sm">
                1
              </span>

              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>

            {/* Remove */}
            <button className="text-sm text-red-500 hover:text-red-600">
              Remove
            </button>

          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">
            $25.99
          </p>

          <p className="mt-1 text-sm text-gray-400">
            $25.99 each
          </p>
        </div>

      </div>
    </div>

  )
}

export default CartCard
