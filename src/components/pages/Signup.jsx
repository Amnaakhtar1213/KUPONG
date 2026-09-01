import React from 'react'

const Signup = () => {
  return (
    <div>
      
       <div className=" flex flex-col items-center justify-center">
      <div className="">
           <div className="flex flex-row items-center justify-center font-bold text-5xl mt-60 md:mt-40">
          <h1 className="text-orange-950">k</h1>
           <h1 className="text-orange-950">u</h1>
            <h1 className="text-green-600">p</h1>
             <h1 className="text-blue-500">O</h1>
              <h1 className="text-orange-500">n</h1>
               <h1 className="text-red-500">g</h1>
        </div>
            <p className="text-gray-500 mt-2 text-center">Creat Account</p>
      </div>
      <div className="flex flex-col items-center justify-between gap-6 mt-8 border border-gray-300 bg-white rounded-2xl shadow-3xl p-8  shadow-orange-200 hover:shadow-xl hover:shadow-orange-200">
        <div className="flex flex-col gap-2">
           <label className="text-xl text-[#ff8200]">Email</label>
          <input type="email" 
          placeholder="Write your email here"
          className="outline-none rounded-2xl border border-gray-300 cursor-pointer shadow shadow-[#ff8200] shadow-[placeholder:text-sm placeholder:text-gray-300 px-2 py-1 "/>   
        </div>

 <div className="flex flex-col gap-2">
           <label className="text-xl text-[#ff8200]">Password</label>
          <input type="password" placeholder="Enter password"
          className="outline-none rounded-2xl  border border-[#ff8200] shadow shadow-[#ff8200] cursor-pointer placeholder:text-sm placeholder:text-gray-300 px-2 py-1"/>
         
        </div>

         <div className="flex flex-col gap-2">
           <label className="text-xl text-[#ff8200]">Confirm Password</label>
          <input type="password" placeholder="Enter your confirm password"
          className="outline-none rounded-2xl  border border-[#ff8200] shadow shadow-[#ff8200] cursor-pointer placeholder:text-sm placeholder:text-gray-300 px-2 py-1"/>
         
        </div>

        <div className="flex flex-col gap-2">

          <button className="bg-white text-[#ff8200] border border-[#ff8200] font-bold px-4 py-1 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-orange-300 text-center">Sign Up</button>
        </div>
         <p className="text-gray-400">
              Already have an account? 
          </p>
      </div>
     
    </div>

    </div>
  )
}

export default Signup
