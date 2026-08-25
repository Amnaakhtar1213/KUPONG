import React from 'react'

import BeautyCard from './BeautyCard'

const BeautyGrid = () => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5  mt-2 justify-items-center px-30">
    <BeautyCard  />
     <BeautyCard  />
      <BeautyCard  />
       <BeautyCard  />
        <BeautyCard  />
   
      </div>
    </div>
  )
}

export default BeautyGrid
