import React from 'react'
import ElectronicsSec from './ElectronicsSec'

const ElectGrid = () => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-2 justify-items-center px-30">
    <ElectronicsSec />
     <ElectronicsSec />
      <ElectronicsSec />
        <ElectronicsSec />
          <ElectronicsSec />
      </div>
    </div>
  )
}

export default ElectGrid
