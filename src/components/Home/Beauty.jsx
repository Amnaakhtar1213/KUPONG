import React from 'react'
import { useNavigate } from 'react-router-dom';


const Beauty = ({product}) => {
  const navigate = useNavigate()


  return (
      <div onClick={() => navigate(`/products/${product.id}`)} className="w-50 ">
   <div className="relative w-full h-50  rounded-xl">
    <img src={product.image} className="w-full h-full object-contain rounded-lg"/>
    
   </div>
   <h1 className="mt-2 px-2 text-xs">{product.title}</h1>
   <p className="text-green-600 px-2 text-xs">{product.rating}</p>
   <h3 className="text-red-800 px-2 text-xs">{product.price}</h3>
    </div>
  )
}

export default Beauty
