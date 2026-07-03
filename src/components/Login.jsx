import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
   <div className="w-90 h-195 bg-[#F7F8F9] shadow-md p-6">

     <h1 className="text-[36px] font-bold text-[#1D2226] leading-tight mt-6">
       Signin to your
       <br />
       PopX account
     </h1>

     <p className="text-gray-500 text-xl mt-4 leading-relaxed">
       Lorem ipsum dolor sit amet,
       <br />
       consectetur adipiscing elit.
     </p>

     <form className="mt-10 space-y-6">

       <div className="relative">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Email Address
         </label>

         <input
           type="email"
           placeholder="Enter email address"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="relative">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Password
         </label>

         <input
           type="password"
           placeholder="Enter password"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

      <Link to="/profile">
      <button
         type="submit"
         className="w-full bg-gray-300 text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-gray-400 transition"
       >
         Login
       </button>
      </Link>

     </form>

   </div>
 </div>
  )
}

export default Login
