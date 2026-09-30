import React from 'react'

const RoaketCard = ({product}) => {
  return (
    <div className="w-62 hover:shadow-lg shadow-gray-200 border-2 border-gray-100 hover:border-2 hover:border-orange-100 rounded-xl">
      <div className="h-64 w-full rounded-t-xl overflow-hidden">
        <img src={product.images} className="w-full h-full object-contain rounded-t-xl" />
      </div>

      <div className=" py-4">
        <h1 className="rounded-r-2xl font-bold text-xl py-1 px-2 w-50 bg-orange-500 text-white">🚀 Rocket Delivery</h1>
        <p className="mt-2 px-2 text-orange-400">{product.title}</p>
        <h3 className="px-2 mt-1 text-gray-700"><i className="fa-solid fa-star text-yellow-500"></i> {product.rating} ({product.reviews})</h3>
        <h2 className="px-2 text-gray-400 line-through">₩{product.oldPrice}</h2>
        <h1 className="px-2 text-lg font-bold ">₩{product.price}  <span className="text-red-700 text-xs ml-2 font-normal">{product.discount}% OFF</span></h1>
        <h1 className="px-2">🚀 Arrives tomorrow</h1>
        <p className="px-2 text-green-700"> Free delivery</p>
      </div>

      <div className="text-center pb-4">
        <button className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full hover:bg-orange-400">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  )
}

export default RoaketCard
