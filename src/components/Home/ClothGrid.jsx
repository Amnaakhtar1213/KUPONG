import React from 'react'
import Cloth from './Cloth'
import kidsClothingData from '../../Data/KidsCloth'

const ClothGrid = () => {
  return (
        <div className="flex flex-col">
       <div className=" mt-10 px-10 md:px-40">
         <div className="w-fit px-4 py-1 rounded-lg flex flex-col md:flex-row items-center gap-2 ">
        <i className="text-orange-600 fa-solid fa-fire text-xl"></i>
        <h2 className="text-2xl font-semibold mr-4">KIDS CLOTH ON SALE</h2>
        <p className="text-gray-500">Best Kids wear cloth on sale now </p>
      </div>
  
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-8 mt-6 justify-items-center px-40">
   {
    kidsClothingData.map((product) => {
      return <Cloth key={product.id} product={product} />
    })
   }
      </div>
    </div>
  )
}

export default ClothGrid
