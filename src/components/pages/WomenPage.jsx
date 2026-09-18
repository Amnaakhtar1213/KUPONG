import React from 'react'
import WomenCard from '../Home/WomenCard'
import WomenData from '../../Data/WomenCollData'

const WomenPage = () => {
  return (
    <div>
       <div className="w-full px-4 md:px-8 lg:px-12 py-6 mt-30">
      
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Women's Collection
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Discover trending Women Collection for every season and style
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {WomenData.map((product) => (
          <WomenCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default WomenPage
