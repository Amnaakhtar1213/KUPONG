import React from 'react'

const FeatureCard = () => {
  return (
    <div className="w-60 shadow-lg shadow-gray-500 rounded-xl">
      <div className="h-56">
        <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-t-xl"/>
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-semibold text-center">Wireless Headset</h1>
        <span className="text-gray-600"> ⭐ 4.8 (245)</span>
        <p className="text-orange-700 font-semibold mt-2 text-lg">₩25,900</p>
      </div>
    </div>
  )
}

export default FeatureCard
