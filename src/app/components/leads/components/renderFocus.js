import React, { useRef, useState } from "react";
import FocusCard from "./focusCard";
import { focusData } from "../utils/data";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const RenderFocus = ({ modal }) => {
  const containerRef = useRef();
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const progress = (currentScroll / maxScroll) * 100;
      setScrollProgress(progress);
      setShowBackButton(currentScroll > 0);
      setShowNextButton(currentScroll < maxScroll - 1);
    }
  };

  const scrollToNext = () => {
    const container = containerRef.current;
    if (container) {
      const currentScroll = container.scrollLeft;
      const cardWidth = container.firstChild.offsetWidth;
      container.scrollTo({
        left: currentScroll + cardWidth + 16,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrevious = () => {
    const container = containerRef.current;
    if (container) {
      const currentScroll = container.scrollLeft;
      const cardWidth = container.firstChild.offsetWidth;
      container.scrollTo({
        left: currentScroll - cardWidth - 16,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-5">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-3 md:pr-5 overflow-x-auto no-scrollbar"
      >
        {focusData.map((data, idx) => (
          <FocusCard
            modal={modal}
            key={idx}
            name={data.name}
            position={data.position}
            client={data.client}
            title={data.title}
            message={data.message}
            note={data.note}
            image={data.image}
            icon={data.icon}
          />
        ))}
      </div>

      {showBackButton && (
        <button
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 border border-gray-400 shadow-md p-1 rounded-full hover:shadow-lg"
          onClick={scrollToPrevious}
          aria-label="Previous"
        >
          <RiArrowLeftSLine size={24} className="text-gray-400" />
        </button>
      )}

      {showNextButton && (
        <button
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 border border-gray-400 shadow-md p-1 rounded-full hover:shadow-lg"
          onClick={scrollToNext}
          aria-label="Next"
        >
          <RiArrowRightSLine size={24} className="text-gray-400" />
        </button>
      )}

      <div className="relative h-1 bg-gray-200 rounded w-2/12 mx-auto mt-3">
        <div
          className="absolute top-0 left-0 h-1 bg-blue-500 rounded"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RenderFocus;