import React from 'react'
import TechCard from './TechCard'
import techProductsData from '../../Data/Tech'

const TechGrid = () => {
  return (
    <div className="mt-10 px-10 md:px-30 flex flex-col md:flex-row bg-red-400]">

      <div className="flex flex-col justify-between">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600">HOME APPLIANCE DIGITAL</h1>
      </div>
      <div className="hidden md:flex flex-col gap-1 items-center mb-8">
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Tablet</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Phones</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Accessories</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># laptops</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># computers</span>
      </div>
      </div>

      <div className="h-140 w-96">
        <img src="https://static.coupangcdn.com/ba/cmg_paperboy/image/1787108899265/C3_PC.jpg" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ml-6 justify-items-center">
      {
        techProductsData.map((product) => {
          return <TechCard key={product.id} product={product} />
        })
      }
      </div>
    </div>
  )
}

export default TechGrid
