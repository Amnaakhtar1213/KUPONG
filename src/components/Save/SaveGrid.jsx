import React from 'react'
import SaveCard from './SaveCard'

const SaveGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Save Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8 lg:px-10">

          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Saved Items
          </h1>

          <p className="text-sm text-gray-500 md:text-base">
            6 items
          </p>

        </div>
      </div>

      {/* Main Save Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">

        {/* Saved Product Grid will come here */}
<SaveCard />
      </div>

    </div>
  )
}

export default SaveGrid
