import React from 'react'

const ProfileCard = () => {
  return (
    <div className="px-6 md:px-10 w-full max-w-7xl mx-auto">
      <div className="flex flex-row gap-6 md:gap-10 items-center p-4 border-b border-gray-200">
        <div className="border border-orange-500 rounded-full w-12 h-12 flex items-center justify-center bg-gray-200 text-lg">
           <i className="fa-solid fa-user"></i>
        </div>
         <div className="text-gray-600">
          <h2 className="text-xl font-bold">John Doe</h2>
          <h3 className="text-gray-500">john@example.com</h3>
         </div>
         <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 text-lg px-4 rounded ml-auto">
           Edit
         </button>
      </div>
    </div>
  )
}

export default ProfileCard
