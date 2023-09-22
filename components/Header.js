"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
   const pathname = usePathname();
   return (
      // 置顶栏
      <div className=" sticky top-0 z-40 w-full bg-white/60 backdrop-blur">
         <div className=" flex h-16 flex-row items-center px-6 text-gray-400">
            {/* Menu键 */}
            <button className="rounded-md p-1 shadow-md hover:bg-blue-50">
               <MenuIcon
                  className=" hover:text-blue-400"
                  sx={{ fontSize: 32 }}
               />
            </button>
            <div className="mx-3 p-1">
               <Link href="/">
                  <HomeIcon
                     className="stroke-blue-100 hover:fill-blue-400"
                     sx={{ fontSize: 36 }}
                  />
               </Link>
            </div>
            {/* 搜索栏 */}
            <div className=" flex-1 ">
               <div className=" flex  flex-row items-center justify-end">
                  <div className="group flex flex-row rounded-full ">
                     <div
                        className="flex h-10 w-10 items-center justify-center rounded-l-full
                     bg-gray-100 group-hover:bg-blue-100"
                     >
                        <Link href="/search">
                           <SearchIcon />
                        </Link>
                     </div>
                     <input
                        className=" h-10 w-72 rounded-r-full  bg-gray-100 text-start
                     font-medium  text-blue-400  selection:bg-pink-200 
                     focus:outline-none group-hover:bg-blue-100"
                        placeholder="Search"
                        type="text"
                     />
                  </div>
               </div>
            </div>
            {/* 用户注册和登录 */}
            <div className="ml-10 flex flex-row items-center gap-3">
               <div className=" rounded-md px-2 py-2 hover:bg-blue-50 hover:shadow-lg">
                  <Link href="/signin">
                     <label className="text-center font-bold hover:text-blue-400">
                        Sign In
                     </label>
                  </Link>
               </div>
               <div className=" rounded-md px-2 py-2 hover:bg-blue-50 hover:shadow-lg">
                  <Link href="/signup">
                     <label className="text-center font-bold hover:text-blue-400">
                        Sign Up
                     </label>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
