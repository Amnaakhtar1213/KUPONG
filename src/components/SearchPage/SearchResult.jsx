import React from 'react'
import SearchGrid from './MainContent/SearchGrid'

const SearchResult = ({search,setCart, filteredProducts}) => {
  return (
    <div className="mt-34">
         <SearchGrid filteredProducts={filteredProducts} search={search} setCart={setCart}/>
    </div>
  )
}

export default SearchResult
