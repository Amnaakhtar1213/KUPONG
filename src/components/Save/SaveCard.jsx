import React from 'react'
import { Link } from "react-router-dom";

const SaveCard = ({product, removeFromSave, setCart}) => {

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
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain"
        />
        <i onClick={() => removeFromSave(product.id)} className="absolute bottom-2 right-2 fa-solid fa-heart text-red-700"></i>
      </div>

      <div className="mt-3">
        <h2 className="font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          ⭐ {product.rating}
        </p>

        <p className="mt-2 text-lg font-bold text-[#ff6a00]">
          ₩{product.price.toLocaleString()}
        </p>
<div className="mt-2 text-center">
       <Link to="/cart">
        <button onClick={handleAddToCart} className="bg-orange-600 hover:bg-orange-500 px-4 py-1 rounded-xl text-white text-center">Add to Cart</button>
       </Link>
       
</div>
      </div>
    </div>
  )
}

export default SaveCard
