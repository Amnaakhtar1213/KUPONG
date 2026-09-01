import React from 'react'

import BeautyCard from './BeautyCard'
import beautyProducts from '../../Data/BeautyPro'

const BeautyGrid = () => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-50 md:mt-30  justify-items-center px-30">
   {
    beautyProducts.map((product) => {
      return <BeautyCard key={product.id} product={product} />
    })
   }
   
      </div>
    </div>
  )
}

export default BeautyGrid
