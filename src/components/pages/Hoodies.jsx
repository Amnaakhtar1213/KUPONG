import React from 'react'
import HoodiesData from '../../Data/HoodieData'
import HoodiesCard from '../HoodiesCard'

const Hoodies = () => {
  return (
   <div>
      <div>
        <div className="w-full px-4 md:px-8 lg:px-12 py-6 mt-30">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Hoodies
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Discover trending Hoodies for every season and style
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {HoodiesData.map((product) => (
              <HoodiesCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hoodies
