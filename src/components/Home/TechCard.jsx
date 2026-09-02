import React from 'react'

const TechCard = ({product}) => {
  return (
    <div className=" w-60 hover:shadow-lg hover:shadow-gray-300">
   <div className="relative w-60 md:w-40">
    <img src={product.image} className="w-full "/>
    <i className="absolute bottom-2 right-2 text-gray-300 fa-solid fa-heart"></i>
   </div>
   <h1 className=" px-2">{product.title}</h1>
   <p className="text-green-600 px-2 ">Delivery Tomorrow</p>
   <h3 className="text-red-800 px-2 pb-2">{product.price} won</h3>
    </div>
  )
}

export default TechCard
