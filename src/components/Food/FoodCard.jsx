import React from 'react'
import { useState } from 'react'

const FoodCard = ({product}) => {
  // here we chech that if there is any already favorite product in localStorage or empty array .
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
  <div className="w-full">
    <div className="relative w-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <i
        onClick={handleSave}
        className={`absolute bottom-2 right-2 cursor-pointer ${
          isFavorite ? "text-red-500" : "text-gray-300"
        } fa-solid fa-heart`}
      ></i>
    </div>

    <div className="pl-2 mt-2">
      <h1 className="font-semibold">{product.title}</h1>

      <p className="text-green-600">
        Guarantee arrival tomorrow
      </p>

      <p className="text-[#ff8200]">
        New Items
      </p>

      <p className="text-gray-500">
        <i className="text-yellow-400 fa-solid fa-star"></i>{" "}
        {product.rating}
      </p>

      <span className="font-bold text-red-600 text-lg">
        9,400
      </span>

      <span className="bg-gray-200 px-4 text-gray-600 rounded-xl ml-2">
        Earn upto 560 points
      </span>
    </div>
  </div>
</div>


  )
}  

export default FoodCard
