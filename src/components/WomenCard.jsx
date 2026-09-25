import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const WomenCard = ({product}) => {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  useEffect(() => {
      const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || []
  
      const alreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id)
      setSaved(alreadySaved)
    }, [product.id])

    const handleSaved = () => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProduct")) || []
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
<div onClick={() => navigate(`/products/${product.id}`)} className="relative w-full h-[420px] bg-gray-100 overflow-hidden">

  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover object-center"
  />

  {/* Tag */}
  {product.tag && (
    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      {product.tag}
    </span>
  )}

  {/* Save Button */}
     <button onClick={(e) => {
          e.stopPropagation()   //heart click should stay on the heart the card cant trigger when we click
          handleSaved()
        }} 
        className="absolute bottom-3 right-3  flex">
          <i className={`fa-solid fa-heart ${saved ? "text-red-700" : "text-gray-300"}`}></i>
        </button>

</div>
  )
}

export default WomenCard
