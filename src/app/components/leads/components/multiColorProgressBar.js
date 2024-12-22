import React from "react";
import { CiClock2 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
const MultiColorProgressBar = () => {
  const progressSegments = [
    { color: "bg-green-500", percentage: 32 },
    { color: "bg-blue-500", percentage: 20 },
    { color: "bg-pink-500", percentage: 8 },
    { color: "bg-yellow-500", percentage: 8 },
  ];

  const guideTexts = [
    { text: "Won 18m", color: "text-green-500" },
    { text: "Committed $8m", color: "text-blue-500" },
    { text: "Qualified $3m", color: "text-pink-500" },
    { text: "Best case $7m", color: "text-yellow-500" },
    { text: "Leads $75m", color: "text-gray-500" },
  ];

  const renderDot = (text, color) => {
    return (
      <div className="flex gap-1 text-xs mt-2 items-center">
        <GoDotFill className={color} />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <section className="w-full lg:w-8/12 2xl:flex-1 lg:pr-3">
      <div className="flex flex-col md:flex-row justify-between text-xs">
        <p className="flex items-center">
          <CiClock2 /> 1 month until Q4 ends
        </p>
        <div className="flex gap-2">
          <p>
            Target <strong>$45 million</strong>
          </p>
          <p>68% percent of target achieved</p>
        </div>
      </div>
      <div className=" bg-gray-200 rounded-full h-2 overflow-hidden flex my-2 md:my-0">
        {progressSegments.map((segment, index) => (
          <div
            key={index}
            className={`h-full ${segment.color}`}
            style={{ width: `${segment.percentage}%` }}
          ></div>
        ))}
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-1 md:gap-3">
        {guideTexts.map((item, index) => (
          <div key={index}>{renderDot(item.text, item.color)}</div>
        ))}
      </div>
    </section>
  );
};

export default MultiColorProgressBar;
