import React from 'react'

const LeftFilter = () => {
  return (
    <div className="px-6 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-14">
      <h1 className="font-bold text-orange-600 text-xl">FILTERS</h1>

      <div className="mt-4">
        <h3 className="text-gray-600 text-lg ">Categories</h3>
        <label className="flex items-center gap-2">
          <input  type="checkbox"/>
          <span className="text-gray-500">Electronics</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Fashion</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Beauty</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Food</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Home</span>
        </label>
      </div>

       <div className="mt-4 ">
        <h3 className="text-gray-600 text-lg ">Prices</h3>
        <label className="flex items-center gap-2">
          <input  type="radio" name="price"/>
          <span className="text-gray-500">under 10,000 won</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="radio" name="price"/>
          <span className="text-gray-500">10,000 won - 30,000</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="radio" name="price"/>
          <span className="text-gray-500">30,000 won - 50,000 won</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="radio" name="price"/>
          <span className="text-gray-500">50,000 won - 70,000 won</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="radio" name="price"/>
          <span className="text-gray-500">70,000 won - 100,000 won</span>
        </label>
        
      </div>

      <div className="mt-4">
        <h3 className="text-gray-600 text-lg ">Rating</h3>
        <h3 className="text-gray-500">5 <i className="fa-solid fa-star text-yellow-400 text-sm"></i> & up</h3>
         <h3 className="text-gray-500">4 <i className="fa-solid fa-star text-yellow-400 text-sm"></i> & up</h3>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-600 text-lg ">Discount</h3>
        <label className="flex items-center gap-2">
          <input  type="checkbox"/>
          <span className="text-gray-500">10% or more</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">20% or more</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">30% or more</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">40% or more</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">50% or more</span>
        </label>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-600 text-lg ">Availibility</h3>
        <label className="flex items-center gap-2">
          <input  type="checkbox"/>
          <span className="text-gray-500">In Stock</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Out of Stock</span>
        </label>
       </div>

        <div className="mt-4">
        <h3 className="text-gray-600 text-lg ">Delivery</h3>
        <label className="flex items-center gap-2">
          <input  type="checkbox"/>
          <span className="text-gray-500">Free Deivery</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Tomorrow</span>
        </label>
         <label className="flex items-center gap-2">
          <input  type="checkbox" />
          <span className="text-gray-500">Same Day</span>
        </label>
       </div>
    </div>
  )
}

export default LeftFilter
