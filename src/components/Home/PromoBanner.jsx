import React from 'react'

const PromoBanner = () => {
  return (
    <div className="px-10 md:px-20 mt-8 md:mt-14">
      <div className="flex flex-col gap-4 md:flex-row  justify-between">
        <div className="flex items-center justify-center  flex-col">
          <h1 className="text-3xl font-bold text-[#ff8200] mt-10">BIG DEAL</h1>
          <p className="mt-3 text-lg text-gray-700">Up to 50% OFF</p>
          <p className="text-center text-gray-500 mt-2">Get your favorite products up to 50% off and enjoy your shopping </p>
          <div>
            <button className="bg-[#ff8200] px-4 py-1 rounded-xl text-white font-bold hover:border hover:border-[#ff8200] hover:bg-white hover:text-[#ff8200] mt-10">SHOP NOW</button>
          </div>
        </div>

        <div className="w-100 md:w-225 rounded-xl">
          <img src="https://images.openai.com/static-rsc-4/2zccoALJum_OqQ72d8lgW7W7gGe-DGOTlC59DFcNRIwXjm0C1r0Y6G6ld0p6-GeG1G3vIUxqnI-D7TIJa-AUnV1rQH4mZSYruJEUg9M1EE9sc4m1Ncn1IaX2tG-EXegIrIr6M2MeAEHiSdHdZoQGyI2z1HsBdA_h9oPHqCAJuf3NwroHfT_ZQ9aJ7dzdwlaK?purpose=fullsize" className="rounded-xl w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
