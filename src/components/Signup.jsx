import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
   <div className="w-90 h-195 bg-white shadow-md p-6 flex flex-col">

     <h1 className="text-4xl font-bold text-black leading-tight">
       Create your
       <br />
       PopX account
     </h1>

     <form className="mt-8 flex-1 flex flex-col">

       <div className="relative mb-6">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Full Name<span className="text-red-500">*</span>
         </label>
         <input
           type="text"
           placeholder="Enter Full Name"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="relative mb-6">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Phone number<span className="text-red-500">*</span>
         </label>
         <input
           type="text"
           placeholder="Enter Mobile Number"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="relative mb-6">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Email address<span className="text-red-500">*</span>
         </label>
         <input
           type="email"
           placeholder="Enter Your Email"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="relative mb-6">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Password<span className="text-red-500">*</span>
         </label>
         <input
           type="password"
           placeholder="Enter Password Here"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="relative mb-6">
         <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm text-violet-600">
           Company name
         </label>
         <input
           type="text"
           placeholder="Enter Company Name"
           className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-violet-600"
         />
       </div>

       <div className="mb-8">
         <p className="text-[#1D2226] mb-3">
           Are you an Agency?<span className="text-red-500">*</span>
         </p>

         <div className="flex items-center gap-6">
           <label className="flex items-center gap-2 cursor-pointer">
             <input
               type="radio"
               name="agency"
               defaultChecked
               className="accent-violet-600 w-5 h-5"
             />
             Yes
           </label>

           <label className="flex items-center gap-2 cursor-pointer">
             <input
               type="radio"
               name="agency"
               className="accent-violet-600 w-5 h-5"
             />
             No
           </label>
         </div>
       </div>

       <div className="grow"></div>

       <Link to="/profile">
       <button
         type="submit"
         className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-3 rounded-md transition"
       >
         Create Account
       </button>
       </Link>

     </form>
   </div>
 </div>
  )
}

export default Signup
