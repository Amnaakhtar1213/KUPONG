import React from 'react'
import { useState } from 'react';

const TodayCard = ({product}) => {

  const [isFavorite, setIsFavorite] = useState(() => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

    return kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
  })

  const handleSaved = () => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

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
  return (
    <div className=" rounded-xl h-90">
    <div className="relative w-67 md:w-60 md:h-60">
      <img src={product.image} className="w-full h-full object-contain"/>
      <i onClick={handleSaved} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-200"} fa-solid fa-heart`}></i>
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

export default TodayCard
