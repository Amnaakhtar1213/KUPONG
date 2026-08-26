import React from 'react'
import FeatureCard from './FeatureCard'
import featuredDealsData from '../../Data/FeatureData'

const FeatureGrid = () => {
  return (
    <div>
       <div className="flex justify-between mt-10 px-10 md:px-30">
         <div className="w-fit px-4 py-1 rounded-lg flex items-center gap-2 bg-[#ff8200]">
        <i className="text-yellow-300 fa-solid fa-fire text-xl"></i>
        <h2 className="text-lg font-semibold ">Featured Deals</h2>
      </div>
      <button className=" bg-white border border-[#ff8200] px-4 rounded-xl text-[#ff8200] hover:shadow-lg hover:shadow-[#ff8200]">View All <i className="fa-solid fa-arrow-right ml-2"></i></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-8 mt-10 justify-items-center px-28">
   {
    featuredDealsData.map((product) => {
      return <FeatureCard key={product.id} product={product} />
    })
   }
      </div>
    </div>
  )
}

export default FeatureGrid
