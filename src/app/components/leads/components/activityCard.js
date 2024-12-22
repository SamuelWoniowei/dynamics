import Image from "next/image";
import React from "react";
import { RiBardFill } from "react-icons/ri";

const ActivityCard = ({
  title,
  client,
  amount,
  timeline,
  action,
  icon,
  image,
}) => {
  return (
    <div className="border text-sm px-3 py-2 rounded-lg shadow-md hover:shadow-sm cursor-pointer">
      <div className="flex items-center gap-2">
        <span className="bg-gray-100 p-1 rounded-full">

        {image}
        </span>
        <div className="mt-2">
          <p className="font-semibold flex items-center gap-2">{title}</p>
          <p className="flex gap-2 text-xs text-gray-500 mb-1">
            {client} <span>•</span> {amount} <span>•</span>
            {timeline}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded py-1 px-2 relative flex gap-2 items-center text-xs">
        {icon}
        <p>{action}</p>
        <div className="absolute -top-2 right-0 bg-white rounded">
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
      </div>
    </div>
  );
};

export default ActivityCard;
