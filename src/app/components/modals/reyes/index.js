"use client";
import React, { useEffect } from "react";
import { FcInvite } from "react-icons/fc";
import { LiaTimesSolid } from "react-icons/lia";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import About from "./components/about";
import Reason from "./components/reason";
import Client from "./components/client";
import Actions from "./components/actions";

const ReyesModal = ({ modalState }) => {
  const handleModalClose = () => {
    document.body.style.overflow = "auto";
    modalState();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-gray-400 bg-opacity-50 z-50">
      <div className="relative animate-gradient md:9/12 lg:w-8/12 rounded-lg bg-white p-0.5">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#1B2A49] to-[#58C4D9] via-[#9E6EE1] rounded-lg p-0.5 animate-gradient"></div>
        <div className="relative z-10 overflow-y-auto max-h-[90vh]">
          <button className="absolute top-1/2 -right-5 border-2 border-gray-400 rounded-full bg-white">
            <RxCaretRight className=" text-4xl text-blue-400" />
          </button>
          <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg w-full">
            <div className="flex justify-between items-start">
              <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <FcInvite /> Engage with Jane Reyes
              </h2>
              <button onClick={handleModalClose}>
                <LiaTimesSolid className="w-5 h-5 font-bold" />
              </button>
            </div>

            <Client />
            <Actions />

            <Reason />

            <About />

            <section className="flex justify-between items-center mt-4 text-gray-500">
              <div className="flex gap-2">
                <p>Showing 1 of 9</p>|<Link href="#">Show all</Link>
              </div>
              <div className="flex gap-2">
                <button>
                  <BsHandThumbsUp className="w-5 h-5 text-gray-500 font-semibold" />
                </button>
                <button>
                  <BsHandThumbsDown className="w-5 h-5 text-gray-500 font-semibold" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReyesModal;
