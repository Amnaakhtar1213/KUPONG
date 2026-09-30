import React from 'react'
import RocketDeliveryData from '../../Data/RocketData'
import RoaketCard from './RoaketCard'

const RocketGrid = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-5 justify-items-center gap-4">
        {
          RocketDeliveryData.map((product) => {
            return <RoaketCard key={product.id} product={product} />
          })
        }
         
        
      </div>
    </div>
  )
}

export default RocketGrid
