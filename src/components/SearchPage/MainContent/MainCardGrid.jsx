import React from 'react'
import MainCard from './MainCard'

const MainCardGrid = ({filteredProducts}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
      {filteredProducts.map((product) => (
        <MainCard key={product.id} product={product} filteredProducts={filteredProducts} />
      ))}
    </div>
  )
}

export default MainCardGrid
