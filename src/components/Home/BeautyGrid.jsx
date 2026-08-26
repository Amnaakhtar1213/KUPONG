import React from 'react'
import Beauty from './Beauty'
import beautyProductsData from '../../Data/Beauty'

const BeautyGrid = () => {
  return (
       <div className="px-10 md:px-30 mt-10 flex flex-col md:flex-row">

  <div className="flex flex-col">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600 mt-4 text-center">BEAUTY</h1>
      </div>
      <div className="hidden md:flex flex-col gap-1 items-center mt-90">
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-sm hover:bg-indigo-400 hover:text-white w-30 text-center"># Serum</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Toner</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># cleanser</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center  text-sm hover:bg-indigo-400 hover:text-white w-30"># Moistrioser</span>
        <span className="border border-gray-400 text-indigo-400 px-3 py-1 text-center text-sm hover:bg-indigo-400 hover:text-white w-30"># Sun screen</span>
      </div>
      </div>


      <div className="h-140 w-96 mt-4">
        <img src="https://static.coupangcdn.com/ia/cmg_paperboy/image/1783323256580/C3-PC.png" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 mt-10 justify-items-center">
       {
         beautyProductsData.map((product) => {
          return <Beauty key={product.id} product={product}/>})
       }
         
        
      </div>
    </div>
  )
}

export default BeautyGrid
