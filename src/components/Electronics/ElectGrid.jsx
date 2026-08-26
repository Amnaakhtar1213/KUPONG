import React from 'react'
import ElectronicsSec from './ElectronicsSec'
import electronicsData from '../../Data/ElectronicsData'

const ElectGrid = () => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-10 justify-items-center px-30 gap-4">
    {
      electronicsData.map((product) => {
        return <ElectronicsSec key={product.id} product={product} />
      })
    }
      </div>
    </div>
  )
}

export default ElectGrid
