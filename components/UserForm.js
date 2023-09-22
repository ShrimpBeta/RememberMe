"use client";
import React, { useState } from "react";
import Link from "next/link";

const UserForm = (props) => {
   const [values, setValues] = useState();
   const onChange = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.values,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <form
         className="w-form flex flex-col gap-3 rounded-xl bg-white shadow-md"
         onSubmit={handleSubmit}
      >
         <div className="mx-auto mb-2 mt-8 text-center font-mono text-3xl font-bold">
            {props.formType === "signin" && (
               <React.Fragment>
                  <label>Sign In</label>
               </React.Fragment>
            )}
            {props.formType === "signup" && (
               <React.Fragment>
                  <label>Sign Up</label>
               </React.Fragment>
            )}
         </div>
         <div className="flex flex-col gap-1 px-8">
            <label className="my-auto text-sm" htmlFor="email">
               Email
            </label>
            <input
               id="email"
               className=" mr-7 h-10 w-full rounded-md  border-2 pl-3 text-gray-500 selection:bg-pink-300
                focus:border-blue-400 focus:outline-none focus:invalid:border-pink-500"
               type="email"
               placeholder="you@example.com"
               onChange={onChange}
               required
            />
         </div>
         <div className="flex flex-col gap-1 px-8">
            <label className="my-auto text-sm" htmlFor="password">
               Password
            </label>
            <input
               id="password"
               className=" mr-7 h-10 w-full rounded-md  border-2 pl-3 text-gray-500 selection:bg-pink-300
                focus:border-blue-400 focus:outline-none"
               type="password"
               placeholder="Password"
               onChange={onChange}
               required
            />
         </div>
         {props.formType === "signup" && (
            <React.Fragment>
               <div className="flex flex-col gap-1 px-8">
                  <label className="my-auto text-sm" htmlFor="passwordrepeat">
                     Password Repeat
                  </label>
                  <input
                     id="passwordrepeat"
                     className=" mr-7 h-10 w-full rounded-md  border-2 pl-3 text-gray-500 selection:bg-pink-300
                focus:border-blue-400 focus:outline-none"
                     type="password"
                     placeholder="Password Repeat"
                     onChange={onChange}
                     required
                  />
               </div>
               <div className="flex flex-col gap-1 px-8">
                  <label className="my-auto text-sm" htmlFor="username">
                     User Name
                  </label>
                  <input
                     id="username"
                     className=" mr-7 h-10 w-full rounded-md  border-2 pl-3 text-gray-500 selection:bg-pink-300
                focus:border-blue-400 focus:outline-none"
                     type="text"
                     placeholder="User Name"
                     onChange={onChange}
                     required
                  />
               </div>
               <button className="mx-auto mb-8 mt-3 h-10 w-20 rounded-lg bg-blue-300 text-lg font-medium shadow-md hover:bg-blue-400">
                  Sign Up
               </button>
            </React.Fragment>
         )}
         {props.formType === "signin" && (
            <React.Fragment>
               <Link
                  href="/passwordreset"
                  className="mr-8 flex items-end justify-end text-sm hover:text-blue-400 hover:underline"
               >
                  forget password?
               </Link>
               <button className="mx-auto my-auto h-10 w-20 rounded-lg bg-blue-300 text-lg font-medium shadow-md hover:bg-blue-400">
                  Sign In
               </button>
               <Link
                  href="/signup"
                  className="mb-2 mr-4 mt-1 flex items-end justify-end text-sm hover:text-blue-400 hover:underline"
               >
                  no account? go to Sign up
               </Link>
            </React.Fragment>
         )}
      </form>
   );
};

export default UserForm;
