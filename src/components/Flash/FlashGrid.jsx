import React from 'react'
import FlashSaleData from '../../Data/FlashData'
import FlashSaleCard from './FlashCard'

const FlashGrid = () => {
  return (
     <div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-40 justify-items-center px-10 md:px-30">
        {
          FlashSaleData.map((product) => {
            return <FlashSaleCard key={product.id} product={product} />
          })
        }
          </div>
        </div>
  )
}

export default FlashGrid
