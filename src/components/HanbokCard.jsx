import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HanbokCard = ({product}) => {
  const navigate = useNavigate()

  const [saved, setSaved] = useState(false)

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
            setSaved(false)
          } else {
            kupongSavedProducts.push(product)
            localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts))
            setSaved(true)
          }
        }
  return (
    <div>
      <div onClick={() => navigate(`/products/${product.id}`)} className="bg-white rounded-lg shadow-sm overflow-hidden">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />

        {/* Badge */}
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {product.badge}
        </span>

        {/* Save Button */}
        <button onClick={(e) => {
          e.stopPropagation()   //heart click should stay on the heart the card cant trigger when we click
          handleSaved()
        }}  className="absolute bottom-2 right-2 ">
          <i className={`fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4">

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm">{product.rating}</span>
          <span className="text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        </div>

        {/* Points */}
        <p className="text-xs text-orange-600 mt-2">
          Earn {product.points} points
        </p>

        {/* Delivery */}
        <p className="text-xs text-green-600 mt-1">
          {product.delivery}
        </p>

        {/* Button */}
        <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
          Add to Cart
        </button>

      </div>
    </div>
    </div>
  )
}

export default HanbokCard
