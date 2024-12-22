import Image from "next/image";
import React from "react";

const Client = () => {
  return (
    <section className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
      <Image
        src={"/images/person2.png"}
        alt="Jane Reyes"
        width={40}
        height={20}
        className="rounded-full"
      />
      <div className="">
        <p className="font-semibold text-lg">Jane Reyes</p>
        <p className="text-gray-500 font-semibold text-xs ">
          COO, Northwind Traders
        </p>
      </div>
    </section>
  );
};

export default Client;
