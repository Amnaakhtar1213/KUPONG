import React from 'react'

const SearchResult = ({filteredProducts}) => {
  return (
    <div>
      <div>
        <p>{filteredProducts.length} products found.</p>
      </div>
    </div>
  )
}

export default SearchResult
