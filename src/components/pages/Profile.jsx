import React from 'react'
import ProfileCard from '../Profile/ProfileCard'
import Grid from '../Profile/Grid'
import MyOrder from '../Profile/MyOrder'

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-50 md:mt-30">
     <div className="bg-white border-b border-gray-200 px-4 py-6 md:px-8 lg:px-10">
           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">MY ACCOUNT</h1>
     </div>
     <ProfileCard />
     <Grid />
     <MyOrder />
    </div>
  )
}

export default Profile
