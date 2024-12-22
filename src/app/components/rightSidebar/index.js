import Link from "next/link";
import React from "react";
import { TiMessages } from "react-icons/ti";
import { LuMessageSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

const RightSidebar = () => {
  return (
    <div className=" flex-grow hidden xl:flex flex-col items-center gap-5 mt-3">
      <div className="relative group text-xl  hover:text-gray-300">
        <HiOutlineSquare2Stack  />
        <span className="absolute right-6 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          message
        </span>
      </div>
      <Link href="#" className="text-xl  hover:text-gray-300">
        <TiMessages  />
      </Link>
      <Link href="#" className="text-xl  hover:text-gray-300">
        <IoCallOutline  />
      </Link>
      <Link href="#" className="text-xl  hover:text-gray-300">
        <LuMessageSquare  />
      </Link>
    </div>
  );
};

export default RightSidebar;
