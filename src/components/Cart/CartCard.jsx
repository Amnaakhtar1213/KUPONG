import React from 'react'

const CartCard = ({product, setCart, cart}) => {

  function increase(productId){
  setCart(cart.map((product) => {
    return product.id === productId ? {...product, quantity: product.quantity +1} : product
  }))
  }

  function decrease(productId){
    setCart(cart.map((product) => {
      return product.id === productId ? {...product, quantity : product.quantity - 1} : product
    }))
  }

  function remove(productId){
    setCart(cart.filter((product) => product.id !== productId))
  }
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4">

        {/* Product Image */}
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-between">

          <div>
            <h2 className="text-base font-semibold text-gray-900">
              {product.title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {product.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-3 flex items-center gap-4">

            {/* Quantity */}
            <div className="flex items-center rounded-md border border-gray-300">
              <button onClick={() => decrease(product.id)} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                −
              </button>

              <span className="px-3 py-1 text-sm">
                {product.quantity}
              </span>

              <button onClick={() => increase(product.id)} className="px-3 py-1 text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>

            {/* Remove */}
            <button onClick={() => remove(product.id)} className="text-sm text-red-500 hover:text-red-600">
              Remove
            </button>

          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-bold text-red-500">
            {product.price} won
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {product.originalPrice} each
          </p>
        </div>

      </div>
    </div>

  )
}

export default CartCard
