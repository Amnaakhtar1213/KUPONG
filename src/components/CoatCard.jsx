import React from 'react'
import { useState, useEffect } from 'react';


const CoatCard = ({product}) => {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
         const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []

        const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
        setSaved(alreadySaved)
        }, [product.id]);
  
        
        const handleSaved = () => { 
          const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []

          const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)

          if(alreadySaved){
            const updatedSavedProducts = kupongSavedProducts.filter((savedProduct) => savedProduct.id !== product.id)
            localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedSavedProducts))
            setSaved(fasle)
          } else {
            kupongSavedProducts.push(product)
            localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts))
            setSaved(true)
          }
        }


  return (
    <div className=" bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition">

      {/* Product Image */}
      <div className="relative w-full h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      <button  onClick={handleSaved}>
         <i className={`absolute bottom-0 right-2 fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
      </button>
      </div>

      {/* Product Information */}
      <div className="p-3">

        {product.badge && (
          <span className="inline-block text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded mb-2">
            {product.badge}
          </span>
        )}

        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
         <i className="fa-solid fa-star text-yellow-300"></i>

          <span className="text-sm text-gray-700">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₩{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₩{product.oldPrice}
            </span>
          )}
        </div>

        {/* Points */}
        {product.points && (
          <p className="text-xs text-green-600 mt-1">
            +{product.points} points
          </p>
        )}

        {/* Delivery */}
        {product.delivery && (
          <p className="text-xs text-gray-500 mt-1">
            {product.delivery}
          </p>
        )}

        {/* Cart Button */}
        <button
       
          className="w-full mt-3 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};


export default CoatCard
