import React from 'react'
import MenCard from './MenCard'

const MenGrid = () => {
  return (
       <div className="px-10 md:px-30 mt-6 flex flex-col md:flex-row bg-red-400]">

       <div className="flex flex-col ">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600 text-center">MENS FASHION</h1>
      </div>
      <div className="hidden md:flex flex-col gap-1 items-center mt-90">
        <span className="border border-gray-400 text-indigo-400 px-4 hover:bg-indigo-400 hover:text-white w-24"># Tablet</span>
        <span className="border border-gray-400 text-indigo-400 px-4 hover:bg-indigo-400 hover:text-white w-24"># Tablet</span>
        <span className="border border-gray-400 text-indigo-400 px-4 hover:bg-indigo-400 hover:text-white w-24"># Tablet</span>
        <span className="border border-gray-400 text-indigo-400 px-4 hover:bg-indigo-400 hover:text-white w-24"># Tablet</span>
        <span className="border border-gray-400 text-indigo-400 px-4 hover:bg-indigo-400 hover:text-white w-24"># Tablet</span>
      </div>
      </div>


      <div className="h-140 w-96">
        <img src="https://thumbnail3.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_11cd8eb3-0a31-4da0-abac-f3cc47e99c35.png" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10 justify-items-center">
        <MenCard />
          <MenCard />
            <MenCard />
              <MenCard />
                <MenCard />
                  <MenCard />
        
      </div>
    </div>
  )
}

export default MenGrid
