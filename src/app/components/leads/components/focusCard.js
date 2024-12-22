import Image from "next/image";
import React from "react";
import { RiBardFill } from "react-icons/ri";

const FocusCard = ({
  name,
  position,
  client,
  title,
  message,
  note,
  modal,
  image,
  icon
}) => {
  const notes = Array.isArray(note) ? note.join(" • ") : note;
  const openModal = () => {
    modal();
  };
  return (
    <div
      className="border text-sm p-3 rounded-lg cursor-pointer hover:shadow-md w-full md:w-1/2 flex-shrink-0"
      onClick={openModal}
    >
      <div className="flex gap-2 items-center">
        <Image src={image} className="rounded-full" alt="Client Logo" width={30} height={30} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="flex items-center text-xs gap-2 text-gray-500">
            {position}
            <span>•</span>
            {client}
          </p>
        </div>
      </div>
      <div className="bg-blue-100 rounded-xl p-3 mt-2 mb-2 relative ">
        <p className="absolute -top-2 right-0 bg-white rounded-md p-1">
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
        </p>

        <p className="mb-2 font-semibold flex items-baseline gap-2">{icon} {title}</p>
        <p className="text-gray-600 text-xs">{message}</p>
      </div>
      <p className="text-gray-500 text-xs">{notes}</p>
    </div>
  );
};

export default FocusCard;
