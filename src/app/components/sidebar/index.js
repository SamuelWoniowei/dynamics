"use cliemt";
import React, { useContext, useEffect, useState } from "react";
import categories from "./utils/sidebarCategories";
import Link from "next/link";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MyContext } from "../../../../Context";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(MyContext);
  const handleClose = () => {
    if (sidebarOpen) {
      setSidebarOpen(!sidebarOpen);
    }
  };
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);
  return (
    <div
      className={`
      } relative bg-grey-300 border-r px-4 w-48  h-screen text-xs ${
        sidebarOpen ? "block pt-7" : "hidden"
      } lg:block`}
    >
      <button onClick={handleClose}>
        <IoReorderThreeOutline className="text-2xl" />
      </button>

      {categories.map((category, index) => (
        <div key={index}>
          <h1 className="font-bold mt-4 mb-3">{category.title}</h1>
          {category.name && (
            <div className="flex gap-2 items-start ">
              {category.icon}
              <Link href="/" className="hover:text-sm ">
                {category.name}
              </Link>
            </div>
          )}
          <div className="flex flex-col">
            {category?.details?.map((detail, index) => {
              return (
                <Link
                  href="#"
                  key={index}
                  className="flex gap-2 items-center text-gray-500 mb-3 hover:text-sm "
                >
                  {detail.icon}

                  {detail.name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
