"use client";
import React,{ useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [show, setshow] = useState(false);

  const showfun = () => {
    setshow(!show);
  };
  
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white p-8">
        <div class="flex items-center flex-shrink-0 text-black font-bold mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <i class="fa-solid fa-piggy-bank"></i> IPTV
          </span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-black hover:border-white"
            onClick={showfun}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            show
              ? "block w-full flex-grow lg:flex lg:items-center lg:w-auto"
              : "hidden md:block lg:block w-full flex-grow lg:flex lg:items-center lg:w-auto"
          }
        >
          <div class="text-sm lg:flex-grow">
              <a
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
              >
                Home
              </a>
            
              <>
              <a
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
              >
                Account
              </a>
            
              <a
                href="javascript:void(0)"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
              >
                Logout
              </a>
              </>
              <>
                  <a
                    href="javascript:void(0)"
                    class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
                  >
                    Register
                  </a>
                
                  <a
                    href="javascript:void(0)"
                    class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black"
                  >
                    Login
                  </a>
                
              </>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              get started
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
