import React from 'react'

const BestCard = ({product}) => {
  return (
        <div>
          <div className="flex flex-row md:flex-col w-120 md:w-70 ">
      <div className="w-60">
        <img src={product.image} className="w-full h-full object-cover"/>
      </div>
      <div className="pl-2">
        <h1 className="">{product.title}</h1>
        <p className="text-green-600">Gurantee arrival tomorrow</p>
        <p className="text-[#ff8200]">New Items</p>
        <p className="text-gray-500"><i className="text-yellow-400 fa-solid fa-star"></i> {product.rating}</p>
         <span className="font-bold text-red-600 text-lg">9,400</span>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
    </div>
  )
}

export default BestCard
