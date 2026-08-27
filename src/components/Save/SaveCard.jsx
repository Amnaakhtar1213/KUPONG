import React from 'react'

const SaveCard = () => {
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

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">

          {/* Product Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="h-48 overflow-hidden rounded-md bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
                alt="Fresh Red Apples"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <h2 className="font-semibold text-gray-900">
                Fresh Red Apples
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                ⭐ 4.8
              </p>

              <p className="mt-2 text-lg font-bold text-[#ff6a00]">
                $25.99
              </p>
            </div>
          </div>

          {/* Product Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="h-48 overflow-hidden rounded-md bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea"
                alt="Fresh Mango"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <h2 className="font-semibold text-gray-900">
                Fresh Mango
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                ⭐ 4.7
              </p>

              <p className="mt-2 text-lg font-bold text-[#ff6a00]">
                $18.99
              </p>
            </div>
          </div>

          {/* Product Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="h-48 overflow-hidden rounded-md bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1585059895524-72359e06133a"
                alt="Fresh Peaches"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <h2 className="font-semibold text-gray-900">
                Fresh Peaches
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                ⭐ 4.6
              </p>

              <p className="mt-2 text-lg font-bold text-[#ff6a00]">
                $16.99
              </p>
            </div>
          </div>

          {/* Product Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="h-48 overflow-hidden rounded-md bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919"
                alt="Fresh Bananas"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <h2 className="font-semibold text-gray-900">
                Fresh Bananas
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                ⭐ 4.9
              </p>

              <p className="mt-2 text-lg font-bold text-[#ff6a00]">
                $12.99
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SaveCard
