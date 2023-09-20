"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";

const UserForm = (props) => {
   const [showPassword, setShowPassword] = useState(false);
   return (
      <form className=" grid grid-cols-1 gap-8 rounded-xl bg-white px-14 py-8 shadow-md">
         <div className="mx-auto my-auto text-center font-mono text-3xl font-bold">
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
         <div className="grid grid-cols-4 gap-3">
            <label className="mx-auto my-auto" htmlFor="email">
               Email
            </label>
            <TextField
               id="email"
               className="col-span-3"
               label="email"
               required
               type="email"
            />
         </div>
         <div className="grid grid-cols-4 gap-3">
            <label className="mx-auto my-auto" htmlFor="password">
               Password
            </label>
            <TextField
               id="password"
               className="col-span-3"
               label="password"
               required
               type="password"
            />
         </div>
         {props.formType === "signup" && (
            <React.Fragment>
               <div className="grid grid-cols-4 gap-3">
                  <label className="mx-auto my-auto" htmlFor="passwordRepeat">
                     Password Repeat
                  </label>
                  <TextField
                     id="passwordRepeat"
                     className="col-span-3"
                     label="password"
                     required
                     type="password"
                  />
               </div>
               <div className="grid grid-cols-4 gap-3">
                  <label className="mx-auto my-auto" htmlFor="userName">
                     User Name
                  </label>
                  <TextField
                     id="userName"
                     className="col-span-3"
                     label="user name"
                     required
                     type="text"
                  />
               </div>
            </React.Fragment>
         )}
         {props.formType === "signin" && (
            <React.Fragment>
               <button className="mx-auto my-auto h-12 w-24 rounded-xl bg-blue-300 text-lg font-medium shadow-md hover:bg-blue-400">
                  Sign In
               </button>
            </React.Fragment>
         )}
         {props.formType === "signin" && (
            <React.Fragment>
               <Link
                  href="/signup"
                  className="flex items-end justify-end text-sm hover:text-blue-400 hover:underline"
               >
                  no account? go to Sign up
               </Link>
            </React.Fragment>
         )}
         {props.formType === "signup" && (
            <React.Fragment>
               <button className="mx-auto my-auto h-12 w-24 rounded-xl bg-blue-300 text-lg font-medium shadow-md hover:bg-blue-400">
                  Sign Up
               </button>
            </React.Fragment>
         )}
      </form>
   );
};

export default UserForm;
