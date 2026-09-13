import MainCardGrid from "./MainCardGrid"

const RightProduct = ({ filteredProducts }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 pb-4 px-6">
        
        <div>
          <p className="text-gray-700 font-medium">
            Search results for "cloth"
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {filteredProducts.length} products found.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-600 text-sm">
            Sort by:
          </label>

          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Newest</option>
          </select>
        </div>

      </div>
      <MainCardGrid filteredProducts={filteredProducts}/>
    </div>
  )
}

export default RightProduct
