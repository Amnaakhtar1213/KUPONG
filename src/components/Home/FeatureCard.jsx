import React from 'react'

const FeatureCard = ({product}) => {
  return (
    <div className="w-60 shadow-lg shadow-gray-500 rounded-xl">
      <div className="h-56">
        <img src={product.image} className="w-full h-full object-cover rounded-t-xl"/>
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-semibold text-center">{product.category}</h1>
        <p className="text-gray-600">{product.title}</p>
        <span className="text-gray-600"> ⭐ {product.rating}</span>
         <span className="text-orange-600"> ({product.reviews})</span>
        <p className="text-orange-700 font-semibold mt-2 text-lg">{product.price} won</p>
      </div>
    </div>
  )
}

export default FeatureCard
