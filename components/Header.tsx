"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-500/10">
        <div
          className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        "
        />
        <Image
          alt="Logo"
          src="https://links.papareact.com/c2cdd5"
          width={210}
          height={70}
          className="w-44 pb-5 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-1"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <UserCircleIcon className="w-10 h-10" />
        </div>
      </div>
    </header>
  );
}

export default Header;
