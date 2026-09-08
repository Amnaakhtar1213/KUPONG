
import { useState } from "react";
const KitchenSec = ({product}) => {
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
    <div className=" hover:shadow hover:shadow-gray-400 rounded-lg">
    <div className="relative w-97 md:w-69">
      <img src={product.image} className="w-full h-full rounded-t-xl"/>
      <i onClick={handleSave} className={`absolute bottom-2 right-2 ${isFavorite ? "text-red-700" : "text-gray-200"} fa-solid fa-heart`}></i>
    </div>
    <div className="p-2">
      <h1 className="text-xl font-semibold text-center">{product.title}</h1>
      <p className="text-[#ff8200] mt-2">up to 30% off</p>
      <p className="text-green-700 mt-2">Gurantee arrival tomorrow</p>
      <h2 className="text-red-700 font-bold text-xl text-center">{product.price} won</h2>
    </div>
    </div>
  )
}

export default KitchenSec
