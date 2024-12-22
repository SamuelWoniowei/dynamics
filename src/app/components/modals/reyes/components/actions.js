import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineSend } from "react-icons/md";
import { RiBardFill } from "react-icons/ri";

const Actions = () => {
  return (
    <section className="bg-white p-4 mt-4">
      <div className=" flex flex-col md:flex-row gap-2 md:gap-0 p-2 bg-gradient-to-r from-blue-100  to-pink-100 justify-between md:items-center rounded-lg ">
        <div className="flex gap-2 ">
          <div>
            <svg width="0" height="0">
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#7a6ded" offset="0%" />
                <stop stopColor="#591885" offset="100%" />
              </linearGradient>
            </svg>

            <RiBardFill style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <p className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Jane may be interested in upgrading expresso machines for her
            in-store coffee shops.
          </p>
        </div>

        <div className="flex gap-2 text-xs">
          <button className="flex gap-1 items-center bg-white px-2 py-1 rounded border border-gray-200">
            <FiEdit2 className="w-3 h-3" />
            <span className=" font-semibold  ">Edit</span>
          </button>
          <button className="flex gap-1 items-center bg-gradient-to-r text-white from-blue-700  to-purple-600 px-2 py-1 rounded border border-gray-200">
            <MdOutlineSend className="w-3 h-3" />
            <span className=" font-semibold">Approve and send</span>
          </button>
        </div>
      </div>
      <div className="flex gap-3 mt-4 pb-3 shadow-md shadow-gray-100 px-2 text-gray-600 font-bold text-sm">
        <span className="cursor-pointer hover:border-b-4 border-b-blue-600">
          Engage
        </span>
        <span className="cursor-pointer hover:border-b-4 border-b-blue-600">
          Research
        </span>
      </div>
    </section>
  );
};

export default Actions;
