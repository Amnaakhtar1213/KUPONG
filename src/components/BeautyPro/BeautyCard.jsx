import React from 'react'

const BeautyCard = ({product}) => {
  return (
      <div className="hover:shadow-lg hover:shadow-gray-300 h-120">
          <div className="p-4 flex flex-row md:flex-col w-120 md:w-60 ">
      <div className="w-50 h-60">
        <img src={product.image} className="w-full h-full object-contain"/>
      </div>
      <div className="pl-2">
        <h1 className="">{product.title}</h1>
       
        <p className="text-green-600">Gurantee arrival tomorrow</p>
         <p className="text-red-600">{product.skinType}</p>
          <p className="text-orange-600 font-bold">{product.brand}</p>
        <p className="text-[#ff8200]">New Items</p>
         <h3 className="font-bold text-red-600 text-lg">{product.price} won</h3>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
    </div>
  )
}

export default BeautyCard
