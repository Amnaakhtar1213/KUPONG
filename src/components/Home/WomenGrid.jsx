import React from 'react'
import WomenCard from './WomenCard'

const WomenGrid = () => {
  return (
    <div className="px-10 md:px-30 mt-6 flex flex-col md:flex-row bg-red-400]">

      <div className="flex flex-col ">
        <div className=" w-60">
        <h1 className="text-3xl font-bold text-blue-600 text-center">WOMEN FASHION</h1>
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
        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_983849e3-8934-4df7-ab4b-18922ef22461.png" className=" h-full w-full object-contain "/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-10 justify-items-center">
        <WomenCard />
          <WomenCard />
            <WomenCard />
              <WomenCard />
                <WomenCard />
                  <WomenCard />
         
        
      </div>
    </div>
  )
}

export default WomenGrid
