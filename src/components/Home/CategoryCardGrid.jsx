import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryCardGrid = () => {
  return (
  <div>
    <div className="px-10 md:px-40 mt-16">

      <div className="flex justify-between">
           <h2 className="text-lg font-semibold w-fit px-4 py-1 rounded-lg flex items-center gap-2 bg-[#ff8200] text-white">Shop by Category</h2>
      
           <button className=" bg-white border border-[#ff8200] px-4 rounded-xl text-[#ff8200] hover:shadow-lg hover:shadow-[#ff8200]">View All <i className="fa-solid fa-arrow-right ml-2"></i></button>
      </div>

        <p className="text-gray-600 mt-2 text-lg">Explore Products for every part of your life</p>

       <div  className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 mt-10 justify-items-center">
        <CategoryCard/>
         <CategoryCard/>
          <CategoryCard/>
           <CategoryCard/>
       </div>

       <div className="flex items-center justify-center gap-8 mt-10">
        <button className=" bg-white text-xl font-bold border border-[#ff8200] px-4 py-1 rounded-xl text-[#ff8200] hover:shadow-lg hover:shadow-[#ff8200]">Grocery</button>
        <button className=" bg-white border border-[#ff8200] px-4 py-1 text-lg font-bold rounded-xl text-[#ff8200] hover:shadow-lg hover:shadow-[#ff8200]">Sports</button>
       </div>
        
      </div>
    </div>
  )
}

export default CategoryCardGrid
