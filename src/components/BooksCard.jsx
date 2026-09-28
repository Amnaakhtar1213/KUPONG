import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BooksCard = ({product, setCart}) => {
  const navigate = useNavigate()
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
    } else {
      kupongSavedProducts.push(product)
      localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts))
      setSaved(true)
    }
  }

   const handleAddToCart = () => {
  const kupongCart =
    JSON.parse(localStorage.getItem("kupongCart")) || [];

  const alreadyInCart = kupongCart.some(
    (cartItem) => cartItem.id === product.id
  );

  if (!alreadyInCart) {
    const updatedCart = [
      ...kupongCart,
      {
        ...product,
        quantity: 1,
      },
    ];

    localStorage.setItem(
      "kupongCart",
      JSON.stringify(updatedCart)
    );

    setCart(updatedCart);
  }
}; 

  return (
    <div>
      <div onClick={() => navigate(`/products/${product.id}`)} className="w-full max-w-[240px] bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">

      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Heart */}
        <button onClick={(e) => {
          e.stopPropagation()   //heart click should stay on the heart the card cant trigger when we click
          handleSaved()
        }} 
        className="absolute bottom-3 right-3  flex">
          <i className={`fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">

        {/* Brand */}
        <p className="text-sm text-gray-500 mb-1">
          {product.brand}
        </p>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-10">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-sm text-gray-600">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">
            Rs. {product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            Rs. {product.oldPrice}
          </span>
        </div>

        {/* Age */}
        <p className="text-xs text-gray-500 mt-2">
          Age: {product.age}
        </p>

        {/* Add to Cart */}
        <button  onClick={(e) => {
    e.stopPropagation();
    handleAddToCart();
    navigate("/cart");
  }} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition">
          Add to Cart
        </button>

      </div>
    </div>
    </div>
  )
}

export default BooksCard
