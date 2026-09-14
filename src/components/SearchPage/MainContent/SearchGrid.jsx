import React from 'react'
import LeftFilter from './LeftFilter'
import RightProduct from './RightProduct'

const SearchGrid = ({search,setCart, filteredProducts}) => {
  return (
    <div className="flex flex-row">
      <LeftFilter />
      <RightProduct filteredProducts={filteredProducts} search={search} setCart={setCart}/>
    </div>
  )
}

export default SearchGrid

