import React from 'react'

const BeautyCard = () => {
  return (
      <div className="mt-50 md:mt-30 px-10 md:px-20">
          <div className="p-4 flex flex-row md:flex-col w-120 md:w-60 ">
      <div className="w-50">
        <img src="https://thumbnail.coupangcdn.com/thumbnails/remote/657x657q90trim/image/vendor_inventory/cf02/5bf5353bd578cd7b04eb7aa0bbb36f67fc8d868e38c3eb71a7ab0421b6d0.jpg" className="w-full h-full object-cover"/>
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

export default BeautyCard
