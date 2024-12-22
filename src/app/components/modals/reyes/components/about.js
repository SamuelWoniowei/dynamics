import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const About = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="bg-white p-4 mt-2 rounded-lg ">
      <div
        className="flex justify-between items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold">About Jane</h3>
        {isOpen ? <RxCaretUp className="text-2xl" /> : <RxCaretDown className="text-2xl" />}
      </div>
      <p
        className={`text-sm text-gray-500 max-h-20 overflow-y-auto ${isOpen ? "block mt-2" : "hidden"} leading-5`}
      >
        Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
        dynamic leader with a proven trakc record in optimizing operations and
        enhancing customer experiences. Under her guidance, Northwind Traders'
        in-store coffee ships have flourished, becoming a hallmark of quality
        and innovation. Jane's commitment to excellence makes her an ideal
        partner for First Coffee. She is always seeking top-tier equipment to
        elevate her coffee shop's offerings, ensuring consistent, high-quality
        service.
      </p>
    </section>
  );
};

export default About;
