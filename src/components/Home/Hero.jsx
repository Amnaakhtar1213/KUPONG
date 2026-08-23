import React from 'react'

const Hero = () => {
  return (
    <div className="mt-16 flex flex-col">

      <div className="bg-white justify-between gap-10 px-8 py-4">
      <div className="w-fit px-4 py-1 rounded-lg flex items-center gap-2 bg-[#ff8200]">
        <i className="text-yellow-300 fa-solid fa-fire text-xl"></i>
        <h2 className="text-lg font-semibold ">Limited Fire</h2>
      </div>

<div className="flex flex-col md:flex-row mt-4">
    <div className="px-10 py-12 flex flex-col">
          <div className="">
            <h1 className="text-gray-700 text-lg font-bold">SHOP SMARTER</h1>
           <span className="text-[#ff6a00] font-semibold text-xl">SAVE MORE</span>
          </div>
          <p className="text-center text-gray-700 mt-4"> Discover amazing products, exclusive deals, and everyday essentials at great prices. </p> 

          <div className="mt-14 flex flex-row gap-4">
            <button className="border border-[#ff6a00] px-4 py-1 text-[#ff6a00] rounded-lg  hover:shadow-lg hover:shadow-[#ff6a00] text-sm md:text-lg">SHOP NOW</button>
            <button className="bg-[#ff6a00] px-4 py-1 text-white rounded-lg hover:bg-[#ff8800] text-sm md:text-lg">VIEW DEALS</button>
          </div>
        </div>

        <div className="md:w-[700px] h-full">
          <img src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg"/>
        </div>
</div>
       
      </div>
    </div>
  )
}

export default Hero
