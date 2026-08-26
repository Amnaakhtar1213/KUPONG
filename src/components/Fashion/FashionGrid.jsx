import React from 'react'
import FashionBaner from './FashionBaner'
import FashionCard from './FashionCard'
import fashionProducts from '../../Data/Fashion'

const FashionGrid = () => {
  return (
    <div>
      <FashionBaner />
       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-10 justify-items-center px-30">
    {
      fashionProducts.map((product) => {
        return <FashionCard key={product.id} product={product} />
      })
    }
      </div>
    </div>
  )
}

export default FashionGrid
