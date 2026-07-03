import { Camera } from 'lucide-react'
import React from 'react'

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
   <div className="w-90 h-195 bg-[#F7F8F9] shadow-md">

     <div className="bg-white border-b border-gray-200 px-6 py-5">
       <h2 className="text-xl font-medium text-black">
         Account Settings
       </h2>
     </div>

     <div className="px-6 py-6">

       <div className="flex items-start gap-4">

         <div className="relative">

           <img
             src="https://i.pravatar.cc/100?img=5"
             alt="profile"
             className="w-20 h-20 rounded-full object-cover"
           />

           <div className="absolute bottom-0 right-0 w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center border-2 border-white">
             <Camera size={14} className="text-white" />
           </div>

         </div>

         <div>
           <h3 className="text-lg font-bold text-[#1D2226]">
             {user.fullName}
           </h3>

           <p className="text-gray-700">
             {user.email}
           </p>
         </div>

       </div>

       <p className="mt-6 text-[15px] text-[#3A3A3A] leading-7">
         Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
         Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
         Dolore Magna Aliquyam Erat, Sed Diam
       </p>

       <div className="border-t border-dashed border-gray-300 mt-6"></div>

     </div>

     <div className="flex-1 h-full"></div>

     <div className="border-t border-dashed border-gray-300"></div>

   </div>
 </div>
  )
}

export default Profile
