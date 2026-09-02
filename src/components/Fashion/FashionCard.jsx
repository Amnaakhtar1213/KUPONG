import React from 'react'

const FashionCard = ({product}) => {
  return (
    <div>
          <div className="p-4 flex flex-row md:flex-col w-120 md:w-70 ">
      <div className="relative w-60">
        <img src={product.image} className="w-full h-full object-cover"/>
        <i className="absolute bottom-2 right-2 text-gray-300 fa-solid fa-heart"></i>
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

export default FashionCard
