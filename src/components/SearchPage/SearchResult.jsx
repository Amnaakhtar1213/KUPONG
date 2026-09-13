import React from 'react'
import SearchGrid from './MainContent/SearchGrid'

const SearchResult = ({filteredProducts}) => {
  return (
    <div className="mt-34">
         <SearchGrid filteredProducts={filteredProducts}/>
    </div>
  )
}

export default SearchResult
