import React from 'react'
import { useNavigate } from 'react-router-dom';

const CartSummery = ({cart, onPaymentSuccess}) => {

  const navigate = useNavigate()

  const subTotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  const shipping = 500;
  const total = subTotal + shipping;

  const handleCheckout = () => {
    const logginUser = localStorage.getItem("logginUser")

    if(!logginUser){
      navigate("/login")
    } else {
      onPaymentSuccess()
    }
  }

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
          {subTotal.toFixed(2)}won
        </p>
      </div>

      {/* Shipping */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Shipping
        </p>

        <p className="font-medium text-gray-900">
          {shipping.toFixed(2)} won
        </p>
      </div>

      <div>
        <h1 className="text-lg font-bold text-gray-900 mt-4">Payement Method</h1>
        <div className="flex gap-4 mt-5 border border-gray-300 px-2 py-2 rounded-full">
           <input type="radio" name="paymentMethod"/>
           <label className="text-gray-600 text-sm">Cash on Delivery</label>
        </div>
         <div className="flex gap-4 mt-3 border border-gray-300 px-2 py-2 rounded-full">
           <input type="radio" name="paymentMethod"/>
           <label className="text-gray-600 text-sm">Credit / Debit Card</label>
        </div>
         <div className="flex gap-4 mt-3 border border-gray-300 px-2 py-2 rounded-full">
           <input type="radio" name="paymentMethod"/>
           <label className="text-gray-600 text-sm">PayPal</label>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200"></div>

      {/* Total */}
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-gray-900">
          Total
        </p>

        <p className="text-xl font-bold text-[#ff6a00]">
          {total.toFixed(2)} won
        </p>
      </div>

      {/* Checkout Button */}
      <button onClick={handleCheckout} className="mt-6 w-full rounded-md bg-[#ff6a00] py-3 font-semibold text-white transition hover:bg-[#e85f00]">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default CartSummery
