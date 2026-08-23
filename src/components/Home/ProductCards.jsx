import React from 'react'

const ProductCards = () => {
  return (
    <div className="bg-[#FFD1A3] rounded-2xl pb-4">
     <div className="bg-white rounded-xl h-52 flex items-center justify-center">
       <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" className="w-full h-full onject-contain rounded-t-2xl"/>
     </div>
     <div className="px-4">
       <h1 className="text-xl mt-2 text-grar-500 text-center">🔥 30% OFF</h1>
      <h1 className="text-xl font-semibold mt-2">Wireless Headset</h1>
      <p className="mt-3">⭐ 4.8 (245 review)</p>
      <p className="text-gray-600 mt-2">Gurantee arrival tomorrow</p>
      <p className="text-gray-600">Free Shipping</p>
      <h2 className="text-xl font-bold  text-black mt-2">price</h2>
     <div className="text-center">
       <button className="bg-[#ff8200] px-4 py-1 rounded-xl mt-4">Add to Cart </button>
     </div>
     </div>
     
    </div>
  )
}

export default ProductCards
