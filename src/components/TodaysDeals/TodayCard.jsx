import React from 'react'

const TodayCard = ({product}) => {
  return (
    <div className=" rounded-xl h-90">
    <div className="relative w-67 md:w-60 md:h-60">
      <img src={product.image} className="w-full h-full object-contain"/>
      <i className="absolute bottom-2 right-2 text-gray-300 fa-solid fa-heart"></i>
    </div>
    <div className="">
      <h1 className="text-xl font-semibold text-center">{product.title}</h1>
      <p className="text-[#ff8200]">up to 30% off</p>
      <p className="text-green-700">Gurantee arrival tomorrow</p>
      <h2 className="text-red-700 font-bold text-xl text-center">{product.price} won</h2>
    </div>
    </div>
  )
}

export default TodayCard
