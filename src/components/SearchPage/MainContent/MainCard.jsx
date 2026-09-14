import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MainCard = ({product, setCart}) => {
const [isFavorite, setIsFavorite] = useState(() => { 
  const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];
  return kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id);
})

const handleSaved = () => {
  const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []
  const isAlreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)

  if(isAlreadySaved){
    const updatedProducts = kupongSavedProducts.filter((savedProduct) => savedProduct.id !== product.id)
    localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedProducts))
    setIsFavorite(false)
  } else {
    kupongSavedProducts.push(product)
    localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts))
    setIsFavorite(true)
  }
}

const handleAddToCart = () => {
    const kupongCart = JSON.parse(localStorage.getItem("kupongCart")) || []

    const isAlreadyCart = kupongCart.some((cartItem) => cartItem.id === product.id)

    if(isAlreadyCart){
      
    } else {
   kupongCart.push({...product, quantity: 1})
     localStorage.setItem("kupongCart", JSON.stringify(kupongCart))
      setCart(kupongCart)
    }
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition">
      
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-full object-contain"
        />

        <i onClick={handleSaved} className={`absolute bottom-3 right-3 fa-solid fa-heart ${isFavorite ? "text-red-700" : "text-gray-300"}  text-xl cursor-pointer`}></i>
      </div>

      {/* Product Information */}
      <div className="mt-3">
        <h1 className="font-medium text-gray-800 line-clamp-2">
          {product.title}
        </h1>

        <p className="mt-1 text-sm text-green-600">
          Guaranteed arrival tomorrow
        </p>

        <p className="mt-1 text-sm text-[#ff8200]">
          New Item
        </p>

        <p className="mt-1 text-sm text-gray-500">
          <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
          {product.rating}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-red-600 text-lg">
            {product.price}
          </span>

          <span className="bg-gray-200 px-3 py-1 text-xs text-gray-600 rounded-xl">
            Earn upto 560 points
          </span>
        </div>
        <Link to="/cart" className="flex items-center justify-center mt-6">
          <button onClick={handleAddToCart} className="bg-orange-500 text-white px-4 py-1 rounded-xl hover:bg-orange-400">Add to Cart</button>
        </Link>
      </div>

    </div>
  )
}

export default MainCard
