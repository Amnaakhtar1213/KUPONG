import React from 'react'
import { useState } from 'react';

const MenCard = ({product}) => {
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
   <div className=" w-60 hover:shadow-lg hover:shadow-gray-300">
   <div className="relative w-60 md:w-40">
    <img src={product.image} className="w-full "/>
    <i onClick={handleSave} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-200"} fa-solid fa-heart`}></i>
   </div>
   <h1 className="mt-2 px-2">{product.title}</h1>
   <p className="text-green-600 px-2">Delivery Tomorrow</p>
   <h3 className="text-red-800 px-2 pb-2">{product.price} won</h3>
    </div>
  )
}

export default MenCard
