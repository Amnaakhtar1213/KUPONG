import React from 'react'

const ElectronicsSec = ({product}) => {
  return (
    <div className="p-4 flex flex-row md:flex-col w-120 md:w-70 hover:shadow-xl hover:shadow-gray-300">
      <div className="relative w-60">
        <img src={product.image} className="w-full h-full object-cover"/>
        <i className="absolute bottom-2 right-2 text-gray-300 fa-solid fa-heart"></i>
      </div>
      <div className="pl-2 mt-4">
        <h1 className="">{product.title}</h1>
        <span className="font-bold text-red-600 text-lg">9,400</span>
        <p className="text-green-600">Gurantee arrival tomorrow</p>
        <p className="text-[#ff8200]">{product.warranty}</p>
        <p className="text-gray-500">lowest {product.price}</p>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
  )
}

export default ElectronicsSec
