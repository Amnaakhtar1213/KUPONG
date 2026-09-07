import React, { useState } from 'react'

const BestCard = ({product}) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

    return kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
  })

  const handleSave = () => {
   const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []

  const isAlreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)

  if(isAlreadySaved){
    const updatedProducts = kupongSavedProducts.filter((savedProduct) => savedProduct.id !== product.id)
    localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedProducts))
    setIsFavorite(false)
  } else {
    kupongSavedProducts.push(product)
    localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts));
    setIsFavorite(true);
  }
  }
  return (
        <div>
          <div className="flex flex-row md:flex-col w-120 md:w-70 ">
      <div className="relative w-60">
        <img src={product.image} className="w-full h-full object-cover"/>
        <i onClick={handleSave} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-300"} fa-solid fa-heart`}></i>
      </div>
      <div className="pl-2">
        <h1 className="">{product.title}</h1>
        <p className="text-green-600">Gurantee arrival tomorrow</p>
        <p className="text-[#ff8200]">New Items</p>
        <p className="text-gray-500"><i className="text-yellow-400 fa-solid fa-star"></i> {product.rating}</p>
         <span className="font-bold text-red-600 text-lg">9,400</span>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
    </div>
  )
}

export default BestCard
