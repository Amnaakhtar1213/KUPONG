import React from 'react'
import KitchenSec from './KitchenSec'

const KitchenGrid = () => {
  return (
    <div className="px-10 md:px-40 mt-10">
       <div className="flex items-center">
        <h1 className="text-black text-2xl font-bold">BEST KITCHEN DEALS</h1>
        <p className="text-gray-500 ml-4 text-lg">Up to 30% off on every product you buy today!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 mt-10 justify-items-center">
    <KitchenSec />
     <KitchenSec />
      <KitchenSec />
       <KitchenSec />
      </div>
    </div>
  )
}

export default KitchenGrid
