import React from 'react'

const NewCard = ({product}) => {
  return (
    <div className=" rounded-xl h-90">
    <div className="w-77 md:w-60">
      <img src={product.image} className=" object-contain"/>
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

export default NewCard
