import React from 'react'

const OrderSummary = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-6 ml-auto font-semibold shadow-sm">
        <h1 className="text-lg font-bold text-gray-900 text-center">Order Summary</h1>
        <p className="text-gray-600 text-center font-normal">View your recent orders and track their delivery status.</p>
        
        <div className="flex flex-row gap-4 items-center mt-10">
          <i className="fa-solid fa-box text-yellow-500 text-lg"></i>
          <p className="text-gray-700 font-bold">Total Order </p>
          <h2 className="mx-auto text-gray-500">5</h2>
        </div>

         <div className="flex flex-row gap-4 items-center mt-6">
         <i className="fa-regular fa-clock text-blue-500 text-lg"></i>
          <p className="text-gray-700 font-bold">Processing </p>
          <h2 className="mx-auto text-gray-500">5</h2>
        </div>

         <div className="flex flex-row gap-4 items-center mt-6">
          <i className="fa-solid fa-check text-green-500 text-lg"></i>
          <p className="text-gray-700 font-bold">Delivered </p>
          <h2 className="mx-auto text-gray-500">5</h2>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
