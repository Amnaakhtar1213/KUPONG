import React from 'react'
import FoodCard from './FoodCard'
import foodData from '../../Data/Food'

const FoodGrid = () => {
  return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-4  mt-40 justify-items-center px-10 md:px-30">
    {
      foodData.map((product) => {
        return <FoodCard key={product.id} product={product} />
      })
    }
      </div>
    </div>
  )
}

export default FoodGrid
