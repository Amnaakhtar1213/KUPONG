import React from 'react'
import fruitData from '../../Data/Todays'
import TodayCard from './TodayCard'

const TodaysGrid = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-2 mt-60 md:mt-30 justify-items-center px-10 md:px-30">
  {
    fruitData.map((product) => {
      return <TodayCard key={product.id} product={product} />
    })
  }
      </div>
    </div>
  )
}

export default TodaysGrid
