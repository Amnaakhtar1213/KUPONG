import React from 'react'

const CategoryCard = () => {
  return (
    <div>
       
       <div className="border border-[#ffd1a3] rounded-2xl pb-4 w-68 shadow-lg shadow-[rgb(255,130,0)] hover:-translate-y-2 transition-all duration-300">
     <div className="bg-white rounded-xl h-36 flex items-center justify-center">
       <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" className="w-full h-full object-contain rounded-t-2xl"/>
     </div>
     <div className="p-4">
        
        <h2 className="text-xl text-[#1f2937] font-semibold text-center ">Electronics</h2>
        <h1 className=" font-semibold mt-2 text-gray-500">1.234 items</h1>

     </div>
     <div className="text-center">
       <button className="bg-[#ff8200] text-white px-4 py-1 rounded-xl mt-4 hover:shadow-lg hover:shadow-orange-300">Explore</button>
     </div>
     </div>
     
    </div>
  )
}

export default CategoryCard
