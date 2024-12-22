import React from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import {
  FcElectronics,
  FcPortraitMode,
  FcPositiveDynamic,
  FcStatistics,
} from "react-icons/fc";
import { RiBardFill } from "react-icons/ri";

const Reason = () => {
  return (
    <section className=" bg-white p-2 lg:p-4 mt-2 rounded-lg">
      <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-8 py-4">
        <div className="absolute right-0 -top-1">
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

          <RiBardFill
            className="bg-white w-6 h-6 px-1"
            style={{ fill: "url(#blue-gradient)" }}
          />
        </div>

        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-purple-300 bg-clip-text text-transparent">
          Why I picked this lead
        </h3>
        <div className="pl-6">
          <ul className="list-disc text-lg md:text-sm">
            <li>
              Jane is a key decision maker and was browsing{" "}
              <strong>'expresso machines' </strong>on First Coffee's website.
            </li>
            <li>
              Multiple people at her comapny have reported{" "}
              <strong>'slowness'</strong> during serive requests.
            </li>
            <li>
              Northwind Traders currently see <strong>$200M in revenue</strong>{" "}
              from their in-store coffee shops.
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-4 gap-3">
          <div className="flex gap-2 items-center bg-white w-54 px-4 py-2 rounded-lg shadow-md">
            <FcPortraitMode className="w-11 h-11" />
            <div>
              <p className="font-semibold text-gray-700 md:text-sm lg:text-md">
                Decision maker
              </p>
              <p className="md:text-sm lg:text-lg font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-purple-300 bg-clip-text text-transparent">
                Yes
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center bg-white w-54 px-4 py-2 rounded-lg shadow-md">
            <FcPositiveDynamic className="w-11 h-11" />
            <div>
              <p className="font-semibold text-gray-700 md:text-sm lg:text-md">
                Potential deal value
              </p>
              <p className="md:text-sm lg:text-lg font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-purple-300 bg-clip-text text-transparent">
                $1m
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center bg-white w-48 px-4 py-2 rounded-lg shadow-md">
            <FcStatistics className="w-11 h-11" />
            <div>
              <p className="font-semibold text-gray-700 md:text-sm lg:text-md">
                Intent
              </p>
              <p className="md:text-sm lg:text-lg font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-purple-300 bg-clip-text text-transparent">
                High
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between text-xs mt-4">
        <div className="flex items-center gap-1">
          <span className="bg-gray-100 p-1">
            <FcElectronics className="w-4 h-4" />
          </span>
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded">
            1 | <FaChartPie className="text-blue-600" /> D365 Sales
          </div>
          <span className="bg-gray-100 rounded p-1">+2</span>
        </div>
        <div className="flex items-center gap-3">
          <p className="bg-gray-100 px-3 py-1 rounded-lg text-gray-600">
            AI-generated content may be incorrect
          </p>
          <button>
            <BsHandThumbsUp className="w-3 h-3" />
          </button>
          <button>
            <BsHandThumbsDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reason;
