import React from 'react'
import Banner from './Banner'
import NewCard from './NewCard'
import newArrivalData from '../../Data/NewArrival'

const NewGrid = () => {
  return (
    <div>
      <Banner />

        <div className="mt-50 md:mt-40 px-10 md:px-40">
       <div className=" flex flex-col md:flex-row items-center">
        <h1 className="text-black text-2xl font-bold">BEST NEW ARRIVALS DEALS</h1>
        <p className="text-gray-500 ml-4 mt-2 text-lg">Up to 30% off on every product you buy today!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 md:mt-10 justify-items-center">
  {
    newArrivalData.map((product) => {
      return <NewCard key={product.id} product={product} />
    })
  }
      </div>
    </div>
    </div>
  )
}

export default NewGrid
