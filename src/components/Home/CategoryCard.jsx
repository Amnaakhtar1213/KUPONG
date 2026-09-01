import React from 'react'

const CategoryCard = ({product}) => {
  return (
    // <div>
       
    //    <div className="border border-[#ffd1a3] rounded-2xl pb-24 w-68 shadow-lg shadow-[rgb(255,130,0)] hover:-translate-y-2 transition-all duration-300">
    //  <div className="bg-white rounded-xl h-36 flex items-center justify-center">
    //    <img src={product.image} className="w-full h-full object-contain rounded-t-2xl"/>
    //  </div>
    //  <div className="p-4">
        
    //     <h2 className="text-xl text-[#1f2937] font-semibold text-center ">{product.name}</h2>
    //     <h1 className=" font-semibold mt-2 text-gray-500">{product.items}</h1>

    //  </div>
    //  <div className="text-center">
    //    <button className="bg-[#ff8200] text-white px-4 py-1 rounded-xl mt-4 hover:shadow-lg hover:shadow-orange-300">Explore</button>
    //  </div>
    //  </div>
     
    // </div>

    <div>
  <div className="w-68 rounded-2xl border border-[#ffd1a3] bg-white pb-5 shadow-lg shadow-[rgb(255,130,0)] transition-all duration-300 hover:-translate-y-2">

    {/* Image */}
    <div className="h-36 overflow-hidden rounded-t-2xl bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Category Info */}
    <div className="p-4">

      {/* Category Name */}
      <h2 className="text-center text-xl font-semibold text-[#1f2937]">
        {product.name}
      </h2>

      {/* Description */}
      <p className="mt-2 text-center text-sm leading-5 text-gray-500">
        {product.description}
      </p>

      {/* Products Count */}
      <p className="mt-3 text-sm font-semibold text-gray-700">
        {product.items}+ Products
      </p>

      {/* Discount */}
      <div className="mt-3 inline-block rounded-lg bg-orange-100 px-3 py-1">
        <p className="text-sm font-semibold text-[#ff6a00]">
          {product.discount}
        </p>
      </div>

      {/* Popular Categories */}
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-800">
          Popular
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {product.popular.map((item, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Explore Button */}
    <div className="px-4 text-center">
      <button className="mt-2 w-full rounded-xl bg-[#ff8200] px-4 py-2 font-semibold text-white transition hover:bg-[#e86f00] hover:shadow-lg hover:shadow-orange-300">
        Explore
      </button>
    </div>

  </div>
</div>


  )
}

export default CategoryCard
