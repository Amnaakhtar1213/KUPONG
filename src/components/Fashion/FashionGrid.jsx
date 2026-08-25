import React from 'react'
import FashionBaner from './FashionBaner'
import FashionCard from './FashionCard'

const FashionGrid = () => {
  return (
    <div>
      <FashionBaner />
       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-2 justify-items-center px-30">
    <FashionCard  />
    <FashionCard  />
    <FashionCard  />
    <FashionCard  />
    <FashionCard  />
      </div>
    </div>
  )
}

export default FashionGrid
