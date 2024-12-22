import React, { useContext, useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import { PiCaretCircleRightThin } from "react-icons/pi";
import RenderFocus from "./components/renderFocus";
import RenderActivities from "./components/renderActivities";
import MultiColorProgressBar from "./components/multiColorProgressBar";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { MyContext } from "../../../../Context";
import Chart from "./components/chart";

const Leads = ({ modal }) => {
  const handleModalClose = () => {
    modal();
  };

  const [isOpen, setIsOpen] = useState(true);
  const { isLeadsOpen, showChart } = useContext(MyContext);

  return (
    <>
      <Header />
      <div
        className={`${
          isLeadsOpen
            ? "max-h-[1000px] opacity-100 transition-all duration-500 ease-in-out mt-8 relative"
            : "max-h-0 opacity-0 transition-all duration-500 ease-out"
        } mx-auto animate-gradient w-full rounded-lg bg-gradient-to-tr from-[#1B2A49] to-[#58C4D9] via-[#9E6EE1] shadow-lg shadow-gray-400 mb-3 mt-5 p-0.5`}
      >
        <div className="bg-white p-5 rounded-md">
          <section className="relative flex flex-col lg:flex-row items-center gap-5">
            <div className="font-semibold flex lg:items-start gap-2 text-sm ">
              <Image
                src="/icons/copilot.svg"
                alt="Custom Icon"
                width={20}
                height={20}
              />
              <p className="w-full">
                Hi Mona, <span className="text-purple-900 font-bold">68%</span>{" "}
                of goals achieved and the rest can be achieved by focusing on 20
                top leads.
              </p>
            </div>
            {showChart ? <Chart /> : <MultiColorProgressBar />}
          </section>

          <button
            className="absolute top-1 right-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCaretUp className="text-2xl" />
            ) : (
              <RxCaretDown className="text-2xl" />
            )}
          </button>

          <section
            className={`${
              isOpen
                ? "max-h-[1000px] opacity-100 transition-all duration-500 ease-in-out mt-8"
                : "max-h-0 opacity-0 transition-all duration-500 ease-out"
            } flex flex-col lg:flex-row gap-4  overflow-hidden`}
          >
            <div className="w-full lg:w-8/12 border-r border-gray-100 pr-3">
              <p className="text-xs ">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need to focus{" "}
              </p>
              <RenderFocus modal={modal} />
            </div>
            <RenderActivities />
          </section>
        </div>
      </div>
    </>
  );
};

export default Leads;
