import React from 'react'
import { useState } from 'react';

const Cloth = ({product}) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];
  
    return kupongSavedProducts.some(
      (savedProduct) => savedProduct.id === product.id
    );
  }); 
  
    const handleSave= () => {
      //chk whether the product is already saved or not 
      const kupongSavedProducts = JSON.parse(localStorage.getItem("kupongSavedProducts")) || [];
      // check if the product is already saved
      const isAlreadySaved = kupongSavedProducts.some((savedProduct) => savedProduct.id === product.id);
     //if its saved already then what we do ...we have to remove it from the savedProducts array and update the local storage
     if(isAlreadySaved){
      const updatedProducts = kupongSavedProducts.filter((savedProduct) => savedProduct.id !== product.id)
      localStorage.setItem("kupongSavedProducts", JSON.stringify(updatedProducts))
      setIsFavorite(false)
     } else {
      //if its not saved already then we have to add it to the savedProducts array and update the local storage
      kupongSavedProducts.push(product);
      localStorage.setItem("kupongSavedProducts", JSON.stringify(kupongSavedProducts));
      setIsFavorite(true)
     }
    }
  return (
       <div>
       
       <div className=" rounded-2xl hover:shadow-lg hover:shadow-gray-400">
     <div className="relative bg-white rounded-xl flex items-center justify-center w-68 md:w-59">
       <img src={product.image} className="w-full h-full object-contain rounded-t-2xl"/>
       <i onClick={handleSave} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-200"} fa-solid fa-heart`}></i>
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
