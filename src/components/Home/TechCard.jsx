import React from 'react'

const TechCard = () => {
  return (
    <div className="ml-4 w-60 hover:shadow-lg hover:shadow-gray-300">
   <div className="w-60 md:w-40">
    <img src="https://thumbnail.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/bdad/0c99fdb3d1816e03572a9dfea637963a73419c5ac7e26b120bc57a32f3c8.png" className="w-full "/>
   </div>
   <h1 className=" px-2">Wireless Noise Cancelling Bluetooth Headphones</h1>
   <p className="text-green-600 px-2 ">Delivery Tomorrow</p>
   <h3 className="text-red-800 px-2 pb-2">13,500 won</h3>
    </div>
  )
}

export default TechCard
