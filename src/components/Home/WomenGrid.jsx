import React from 'react'
import WomenCard from './WomenCard'
import womensCollectionData from '../../Data/WomenData'

const WomenGrid = () => {
  return (
    <div className="mt-10 px-10 md:px-30 flex flex-col md:flex-row bg-red-400]">

      <div className="flex flex-col ">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600 text-center">WOMEN FASHION</h1>
      </div>
      <div className="hidden md:flex flex-col gap-4 items-center mt-70">
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 hover:bg-indigo-400 hover:text-white w-30 text-sm"># Women suit</span>
        <span className="text-center border border-gray-400 text-indigo-400 px-3 hover:bg-indigo-400 hover:text-white  text-sm w-30"># Track suit</span>
        <span className="text-center border border-gray-400 text-indigo-400 px-3 py-1 w-30 hover:bg-indigo-400 hover:text-white  text-sm"># Hoodies</span>
        <span className="text-center border border-gray-400 text-indigo-400 px-3 py-1 w-30 hover:bg-indigo-400 hover:text-white  text-sm"># Jackets</span>
        <span className=" text-center border border-gray-400 text-indigo-400 px-3 py-1 w-30 hover:bg-indigo-400 hover:text-white  text-sm"># Shirts</span>
      </div>
      </div>


      <div className="h-140 w-96">
        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_983849e3-8934-4df7-ab4b-18922ef22461.png" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center ml-6">
        {
          womensCollectionData.map((product) => {
            return <WomenCard key={product.id} product={product} />
          })
        }
         
        
      </div>
    </div>
  )
}

export default WomenGrid
