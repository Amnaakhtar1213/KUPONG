import React from 'react'

const FashionCard = () => {
  return (
    <div>
          <div className="p-4 flex flex-row md:flex-col w-120 md:w-70 ">
      <div className="w-60">
        <img src="https://thumbnail.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a89d/c3b55cbd06f17e573d69db6bfffeee38dbd8a0a5a0e8292faf29b17bdcd2.jpeg" className="w-full h-full object-cover"/>
      </div>
      <div className="pl-2">
        <h1 className="">KOREAN low noice high volume mini air cooler for office/home</h1>
        <span className="font-bold text-red-600 text-lg">9,400</span>
        <p className="text-green-600">Gurantee arrival tomorrow</p>
        <p className="text-[#ff8200]">New Items</p>
        <p className="text-gray-500">lowest 7,430</p>
        <span className="bg-gray-200 px-4  text-gray-600 rounded-xl">Earn upto 560 points</span>
      </div>
    </div>
    </div>
  )
}

export default FashionCard
