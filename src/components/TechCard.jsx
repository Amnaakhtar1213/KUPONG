import React from 'react'
import { useState, useEffect } from 'react';

const TechCard = ({product}) => {
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
    <div>
      <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="relative bg-gray-100 h-72 overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Tag */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}

        {/* Save */}
        <button onClick={handleSaved} className="absolute bottom-3 right-3  flex">
          <i className={`fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
        </button>
      </div>

      {/* Information */}
      <div className="p-4">

        {/* Type */}
        <p className="text-xs text-gray-500 mb-1">
          {product.type}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-10">
          {product.title}
        </h3>

        {/* Skin Type */}
        <p className="text-xs text-gray-500 mt-2">
          {product.skinType}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500 text-sm">★</span>

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
            ${product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}

        </div>

        {/* Points */}
        <p className="text-xs text-green-600 mt-1">
          +{product.points} points
        </p>

        {/* Size */}
        <p className="text-xs text-gray-500 mt-2">
          {product.size}
        </p>

      </div>
    </div>
    </div>
  )
}

export default TechCard
