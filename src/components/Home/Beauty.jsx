import React from 'react'

const Beauty = ({product}) => {
  return (
      <div className="ml-4 w-60 hover:shadow-lg hover:shadow-gray-300">
   <div className="w-60 md:w-40">
    <img src={product.image} className="w-full "/>
   </div>
   <h1 className="mt-2 px-2">{product.title}</h1>
   <p className="text-green-600 px-2">{product.rating}</p>
   <h3 className="text-red-800 px-2 pb-4">{product.price}</h3>
    </div>
  )
}

export default Beauty
