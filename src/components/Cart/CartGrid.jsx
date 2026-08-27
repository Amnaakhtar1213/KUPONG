import React from 'react'
import CartCard from './CartCard'
import CartSummery from './CartSummery'

const CartGrid = () => {
  return (
  <div className="mx-auto min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-40 mt-50 md:mt-20">

     <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-10">

          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Saved Items
          </h1>

          <p className="text-sm text-gray-500 md:text-base">
            6 items
          </p>

        </div>
      </div>

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-10">

    {/* Cart Items */}
    <div className="space-y-4 lg:col-span-2">
      <CartCard />
      <CartCard />
    </div>

    {/* Order Summary */}
    <div>
      <CartSummery />
    </div>

  </div>

</div>
  )
}

export default CartGrid
