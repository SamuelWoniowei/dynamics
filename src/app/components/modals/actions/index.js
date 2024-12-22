"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import actions from "./utils/actions";
import ActionForm from "./components/form";
import { MyContext } from "../../../../../Context";

const ActionsModal = () => {
  const { actionsModalOpen, setActionsModalOpen } = useContext(MyContext);

  const handleModalClose = () => {
    setActionsModalOpen(false);
  };


  const [selectedOptions, setSelectedOptions] = useState({
    any_vendor: "",
    confirmed_purchase_orders: "",
    on_hand_inventory: "",
  });

  const handleOptionChange = (action, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [action]: value,
    }));
  };

  return (
    <div
      className={`${
        actionsModalOpen ? "fixed" : "hidden"
      } inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center `}
    >
      <div className="relative bg-white mx-2 md:mx-0 md:w-10/12 lg:w-8/12 p-6 rounded-lg shadow-lg max-h-[90vh] flex flex-col">
        <h2 className="text-center text-xl flex gap-2">
          <Image
            src="/icons/copilot.svg"
            width={20}
            height={20}
            alt="copilot icon"
          />{" "}
          Agent skill
        </h2>

        <div className="overflow-y-auto flex-1  no-scrollbar">
          <div className="text-center mt-4 border px-4 py-6 border-gray-100 rounded-lg shadow-md shadow-gray-300">
            <h5 className="text-center text-lg mb-4 flex gap-2">
              Check if on-hand inventory will allow all sales orders to ship
              without delay
            </h5>
            <div className="flex flex-wrap text-sm gap-1 items-center ">
              {actions.map((actionGroup, idx) => (
                <div key={idx} className="my-1">
                  <div className="flex flex-wrap gap-1 items-center">
                    <span>{actionGroup.instruction}</span>

                    <div className="flex items-center gap-1 bg-blue-100 rounded-lg text-blue-500 px-2 py-1">
                      {actionGroup.action.icon}

                      <select
                        className="border-0 focus:ring-0 outline-0 appearance-none bg-transparent p-0 w-auto min-w-max hover:cursor-pointer"
                        value={selectedOptions[actionGroup.action.label]}
                        onChange={(e) =>
                          handleOptionChange(
                            actionGroup.action.label,
                            e.target.value
                          )
                        }
                      >
                        {actionGroup.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
              <span>to reflect changes</span>
            </div>
          </div>

          <div className="text-md space-y-3 mt-8">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/microsoft.svg"
                width={20}
                height={20}
                alt="copilot icon"
              />
              <p className="font-semibold text-gray-600">Enable email access</p>
            </div>

            <p className="text-gray-500 text-sm">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <ActionForm />

            <div className="flex gap-3 justify-end text-sm ">
              <button
                disabled
                className="bg-gray-300 text-gray-400 rounded-md py-1 px-3 mt-20"
              >
                Activate
              </button>
              <button
                onClick={handleModalClose}
                className="bg-white-500 text-black border border-gray-300 rounded-md py-1 px-3 mt-20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsModal;
