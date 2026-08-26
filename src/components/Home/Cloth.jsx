import React from 'react'

const Cloth = ({product}) => {
  return (
       <div>
       
       <div className=" rounded-2xl hover:shadow-lg hover:shadow-gray-400">
     <div className="bg-white rounded-xl flex items-center justify-center w-68 md:w-59">
       <img src={product.image} className="w-full h-full object-contain rounded-t-2xl"/>
     </div>
     <div className="p-4">
        
        <h2 className="text-xl text-[#1f2937] font-semibold text-center ">{product.title}</h2>
        <h1 className=" font-semibold mt-2 text-gray-500"><i className="fa-solid fa-star text-yellow-400"></i> {product.rating}</h1>
        <p className="text-[#ff8200]">{product.category}</p>
        <p className="text-green-700">Gurantee arrival tomorrow</p>
        <h2 className="text-red-600 font-semibold text-lg">{product.price} WON</h2>

     </div>
     </div>
     
    </div>
  )
}

export default Cloth
