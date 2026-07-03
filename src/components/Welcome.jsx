import { Link } from 'react-router-dom';
import React from 'react'

const Welcome = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
   <div className="w-90 h-195 bg-white rounded-lg shadow-md flex flex-col justify-end p-6">

     <div>
       <h1 className="text-4xl font-bold text-black">
         Welcome to PopX
       </h1>
       <p className="text-gray-500 text-lg mt-4 leading-relaxed">
         Lorem ipsum dolor sit amet,
         <br />
         consectetur adipiscing elit,
       </p>
       <div className="mt-8 flex flex-col gap-2">
         <Link to="/signup">
         <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-3 rounded-md transition">
           Create Account
         </button>
         </Link>

         <Link to="/login">
         <button className="w-full bg-violet-200 hover:bg-violet-300 text-black font-semibold py-3 rounded-md transition">
           Already Registered? Login
         </button>
         </Link>
       </div>
     </div>

   </div>
 </div>
);
};

export default Welcome
