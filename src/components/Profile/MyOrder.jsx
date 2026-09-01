import React from 'react'
import OrderItems from './OrderItems'

const MyOrder = () => {
  return (
    <div className="px-10 md:px-40">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl mt-10 p-6">
        <h1 className="text-2xl font-bold text-gray-900">MY ORDERS</h1>
        <p className="text-gray-600">View and manage your recent orders.</p>

        <OrderItems />
      </div>
    </div>
  )
}

export default MyOrder
