import React from 'react'
import LeftFilter from './LeftFilter'
import RightProduct from './RightProduct'

const SearchGrid = ({filteredProducts}) => {
  return (
    <div className="flex flex-row">
      <LeftFilter />
      <RightProduct filteredProducts={filteredProducts}/>
    </div>
  )
}

export default SearchGrid

