import React from 'react'

const WomenCard = ({product}) => {
  return (
    <div className=" w-60">
   <div className="w-60 md:w-40">
    <img src={product.image} className="w-full "/>
   </div>
   <h1 className="mt-2 px-2 text-sm">{product.title}</h1>
   <p className="text-green-600 px-2">Delivery Tomorrow</p>
   <p><i className="fa-solid fa-star text-orange-500"></i> {product.rating}</p>
   <h3 className="text-red-800 px-2 pb-2 font-bold">{product.price} won</h3>
    </div>
  )
}

export default WomenCard
