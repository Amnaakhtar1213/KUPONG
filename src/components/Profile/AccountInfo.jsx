import React from 'react'

const AccountInfo = () => {
  return (
    <div>
      <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Account Information</h2>
        <p className="text-gray-600 text-center">Manage your account details and preferences.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10">
        <div className="">
          <h1 className="text-gray-600 font-bold">Full Name</h1>
          <h3 className="text-gray-500">Jogn Doe</h3>
        </div>
         <div>
          <h1 className="text-gray-600 font-bold">Email</h1>
          <h3 className="text-gray-500">johndoe@example.com</h3>
        </div>
         <div>
          <h1 className="text-gray-600 font-bold">Phone Number</h1>
          <h3 className="text-gray-500">(123) 456-7890</h3>
        </div>
         <div>
          <h1 className="text-gray-600 font-bold">Address</h1>
          <p className="text-gray-500">Islamabad, Pakistan</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
