import React from 'react'
import { useState, useEffect } from 'react';

const KidsCard = ({product}) => {
   const [saved, setSaved] = useState(false);
  
    useEffect(() => {
      const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []
  
      const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
      setSaved(alreadySaved)
    },[product.id])
  
    const handleSaved = () => {
      const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []
      const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
  
      if(alreadySaved){
        const updatedSavedProducts = kupongSavedProducts.filter((savedProduct) => savedProduct.id !== product.id)
        localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedSavedProducts))
        setSaved(false)
      } else{
        kupongSavedProducts.push(product)
        localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts))
        setSaved(true)
      }
    }
  return (
 <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition">

      {/* Image */}
      <div className="relative h-64 bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* New Badge */}
        {product.new && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}

        {/* Arrival */}
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
          {product.arrival}
        </span>

        {/* Save */}
        <button onClick={handleSaved} className="absolute bottom-3 right-3 shadow text-gray-300 ">
          <i className={`fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
        </button>

      </div>


      {/* Product Information */}
      <div className="p-4">

        {/* Gender + Age */}
        <div className="flex items-center justify-between mb-2">

          <span className="text-xs font-medium text-orange-600">
            {product.gender}
          </span>

          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {product.age}
          </span>

        </div>


        {/* Category */}
        <p className="text-xs text-gray-400 mb-1">
          {product.category}
        </p>


        {/* Name */}
        <h2 className="text-base font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h2>


        {/* Title */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.title}
        </p>


        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">

          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-sm font-medium">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>

        </div>


        {/* Price */}
        <div className="flex items-center gap-2 mt-3">

          <span className="text-lg font-bold text-gray-900">
            ₩{product.price.toLocaleString()}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₩{product.oldPrice.toLocaleString()}
          </span>

        </div>


        {/* Points */}
        <p className="text-xs text-orange-600 mt-1">
          +{product.points} points
        </p>


        {/* Add To Cart */}
        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-medium transition">
          Add to Cart
        </button>

      </div>

    </div>
          

           
             
  )
}

export default KidsCard
