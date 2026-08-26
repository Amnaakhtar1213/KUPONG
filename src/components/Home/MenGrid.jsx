import React from 'react'
import MenCard from './MenCard'
import mensCollectionData from '../../Data/MenData'

const MenGrid = () => {
  return (
       <div className="mt-10 px-10 md:px-30 flex flex-col md:flex-row bg-red-400]">

       <div className="flex flex-col ">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600 text-center">MENS FASHION</h1>
      </div>
      <div className="hidden md:flex flex-col gap-1 items-center mt-90">
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-sm text-csnter hover:bg-indigo-400 hover:text-white w-30"># Mens Suit</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># pants</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># jackets</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Coats</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Tracksuit</span>
      </div>
      </div>


      <div className="h-140 w-96">
        <img src="https://thumbnail3.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_11cd8eb3-0a31-4da0-abac-f3cc47e99c35.png" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center ml-6">
       {
        mensCollectionData.map((product) => {
          return <MenCard key={product.id} product={product} />
        })
       }
        
      </div>
    </div>
  )
}

export default MenGrid
