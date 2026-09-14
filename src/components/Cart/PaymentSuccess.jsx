import React from 'react'

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center bg-white">
    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
  <i className="fa-solid fa-check text-green-500 text-2xl"></i>
</div>
      <h1 className="text-gray-600 font-bold text-lg mt-2">Payment Done</h1>
      <p className="text-gray-400 mt-4">Your payment was successfully completed.</p>
    </div>
      </div>
  )
}

export default PaymentSuccess
