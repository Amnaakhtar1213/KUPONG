import React from 'react'

const FashionBaner = () => {
  return (
    <div className="mt-50 md:mt-30">
        <h1 className="flex items-center justify-center text-2xl font-bold px-60 py-4 ">FASHION/Clothing</h1>
      
      <div className="flex flex-row gap-10">
         <div className="hidden md:flex flex-col mt-8 gap-4 ml-30">
          <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Womens Cloth</span>
           <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Mens Cloth</span>
            <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># kids Cloth</span>
             <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Accessories</span>
              <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Jackets/Hoodies</span>
              <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Shoes/Boots</span>
               <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Jeans</span>
                <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># t-shirts</span>
                 <span className="bg-orange-200 px-4  rounded-xl text-white hover:text-orange-500"># Hanbok</span>
        </div>

         <div className="md:ml-20 bg-red-500 md:h-100 rounded-xl">
          <img src="https://static.coupangcdn.com/image/bannerunit/bannerunit_6b9a174b-cc77-43c3-ba16-b9fb0291401a.png" className="rounded-xl w-full h-full object-contain"/>
        </div>
      </div>

    </div>
  )
}

export default FashionBaner
