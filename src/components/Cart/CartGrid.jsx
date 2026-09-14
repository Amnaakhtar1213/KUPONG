
import React, { useState } from 'react'
import CartCard from './CartCard'
import CartSummery from './CartSummery'
import PaymentSuccess from './PaymentSuccess'

const CartGrid = ({ cart, setCart }) => {
  const totalItems = cart.reduce((score, product) => {
    return score + product.quantity
  }, 0)

  const [paymentDone, setPaymentDone] = useState(false)

  return (
    <div className="mx-auto min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-40 mt-46 md:mt-24">

      {!paymentDone ? (
        <>
          {/* Cart Header */}
          <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-10">
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                CART Items
              </h1>

              <p className="text-sm text-gray-500 md:text-base">
                {totalItems} items in your cart
              </p>
            </div>
          </div>

          {/* Cart Content */}
          <div className="grid grid-cols-1 gap-6 mt-2 md:mt-12 lg:grid-cols-3">

            <div className="mt-10 flex min-w-0 flex-col gap-4 px-4 lg:col-span-2 lg:mt-0">
              {cart.map((product) => (
                <CartCard
                  key={product.id}
                  product={product}
                  setCart={setCart}
                  cart={cart}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummery
                cart={cart}
                onPaymentSuccess={() => setPaymentDone(true)}
              />
            </div>

          </div>
        </>
      ) : (
        /* Payment Success */
        <div className=" mt-40">
          <PaymentSuccess />
        </div>
      )}

    </div>
  )
}

export default CartGrid


