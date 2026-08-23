import React from 'react'
import ProductCards from './ProductCards'

const ProCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 md:p-20">
      <ProductCards />
       <ProductCards />
        <ProductCards />
         <ProductCards />
          <ProductCards />
    </div>
  )
}

export default ProCardGrid
