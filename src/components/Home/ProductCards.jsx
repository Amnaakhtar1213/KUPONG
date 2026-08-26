import React from 'react'

const ProductCards = ({product}) => {
  return (
    <div className="">
      <div className="bg-orange-100 rounded-2xl w-75">
     <div className="bg-white rounded-xl h-50 flex items-center justify-center">
       <img src={product.image} className="w-full h-full object-contain rounded-t-2xl"/>
     </div>
     <div className=" pr-4 py-2">
      <div className="flex justify-between">
         <div className="w-fit px-4 py-1 rounded-r-xl flex items-center gap-2 bg-[#ff8200]">
        <i className="text-yellow-300 fa-solid fa-fire text-xl"></i>
        <h2 className="text-lg font-semibold ">Discount</h2>
      </div>
      <h1 className=" mt-2 text-orange-700 text-center">{product.discount} %</h1>
      </div>
       
      <div className="px-6">
        <h1 className="text-xl font-semibold mt-2">{product.name}</h1>
        <p className="text-green-600 mt-2">Gurantee arrival tomorrow</p>
      <p className="mt-3">⭐ {product.rating} ({product.reviews} review)</p>
      
      <p className="text-red-600">Free Shipping</p>
      <h2 className="text-xl font-semibold  text-black mt-2">{product.price} won</h2>
      </div>
     <div className="text-center">
       <button className="bg-[#ff8200] px-4 py-1 rounded-xl mt-4 hover:shadow-lg hover:shadow-orange-300">Add to Cart </button>
     </div>
     </div>
     
    </div>
    </div>
  )
}

export default ProductCards
