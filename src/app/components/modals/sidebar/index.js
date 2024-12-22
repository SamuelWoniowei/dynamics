"use client";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../sidebar";
import { MyContext } from "../../../../../Context";

const SidebarModal = () => {
  const { sidebarOpen } = useContext(MyContext);

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
      className={`fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex transition-opacity duration-300 ${
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white h-full shadow-lg flex transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default SidebarModal;
