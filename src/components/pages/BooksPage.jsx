import React from 'react'
import KidsBooksData from '../../Data/BooksData'
import BooksCard from '../BooksCard'

const BooksPage = ({setCart}) => {
  return (
<div className="w-full px-4 md:px-8 lg:px-12 py-6 mt-30">
                  
                  {/* Heading */}
    <div className="mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      Books
       </h1>
            
    <p className="text-sm text-gray-500 mt-1">
                      Discover Story books for kids.
      </p>
   </div>
            
                  {/* Product Grid */}
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
       {KidsBooksData.map((product) => (
         <BooksCard
            key={product.id}
             product={product}
             setCart={setCart}
          />
        ))}
 </div>
 </div>
  )
}

export default BooksPage
