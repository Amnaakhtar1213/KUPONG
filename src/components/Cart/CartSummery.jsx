import React from 'react'

const CartSummery = ({cart}) => {
  const subTotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  const shipping = 5;
  const total = subTotal + shipping;

  return (
    
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      
      <h2 className="text-lg font-bold text-gray-900">
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Subtotal
        </p>

        <p className="font-medium text-gray-900">
          ${subTotal.toFixed(2)}
        </p>
      </div>

      {/* Shipping */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Shipping
        </p>

        <p className="font-medium text-gray-900">
          $5.00
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200"></div>

      {/* Total */}
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-gray-900">
          Total
        </p>

        <p className="text-xl font-bold text-[#ff6a00]">
          ${total.toFixed(2)}
        </p>
      </div>

      {/* Checkout Button */}
      <button className="mt-6 w-full rounded-md bg-[#ff6a00] py-3 font-semibold text-white transition hover:bg-[#e85f00]">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default CartSummery
