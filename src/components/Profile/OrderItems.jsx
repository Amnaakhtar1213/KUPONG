import React from 'react'

const OrderItems = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-10 mx-10 px-6 py-10 bg-gray-100 shadow-xl rounded-xl hover:-translate-y-2 transition-all duration-300">
        <i className="fa-solid fa-box-open text-2xl text-orange-500"></i>
        <div>
          <h1 className="text-xl font-bold mt-5">Order: <span className="text-orange-500 ml-4 font-medium text-lg">#KUPO001</span></h1>
          <p className="text-gray-600 text-center mt-2">Aug 31, 2026</p>
        </div>
        <h1 className="text-lg font-semibold">2 Items</h1>
        <h1 className="text-lg font-semibold text-green-500">Delivered</h1>
          <h2 className="text-2xl font-bold text-red-700"> ₩21,400 </h2>
      </div>
    </div>
  )
}

export default OrderItems
