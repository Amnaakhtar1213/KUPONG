import React, { useState } from 'react'

const ElectronicsSec = ({product}) => {

  const [isFavorite, setIsFavorite] = useState(() => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];

    return kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
  })

  const handleSave = () => {
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
    <div className="p-4 flex flex-row md:flex-col w-120 md:w-70 hover:shadow-xl hover:shadow-gray-300">
      <div className="relative w-60">
        <img src={product.image} className="w-full h-full object-cover"/>
        <i onClick={handleSave} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-300"} fa-solid fa-heart`}></i>
      </div>
      <div className="pl-2 mt-4">
        <h1 className="">{product.title}</h1>
        <span className="font-bold text-red-600 text-lg">9,400</span>
        <p className="text-green-600">Gurantee arrival tomorrow</p>
        <p className="text-[#ff8200]">{product.warranty}</p>
        <p className="text-gray-500">lowest {product.price}</p>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
  )
}

export default ElectronicsSec
