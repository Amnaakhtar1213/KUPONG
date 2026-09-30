import React from 'react'
import RocketBanner from '../Rocket/RocketBanner'
import RocketGrid from '../Rocket/RocketGrid'

const RocketPage = () => {
  return (
    <div className="mt-55 md:mt-35 px-10 md:px-20">
      <div className="items-center justify-center flex flex-col">
        <h1 className="text-orange-600 font-bold text-2xl md:text-3xl">🚀 ROCKET DELIVERY</h1>
        <p className="text-gray-400 md:mt-1 md:text-xl">Fast delivery. Easy shopping. Delivered to you.</p>
      </div>

      <div>
        <RocketBanner />
      </div>

      <div>
        <RocketGrid />
      </div>
    </div>
  )
}

export default RocketPage
