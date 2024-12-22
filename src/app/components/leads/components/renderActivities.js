import Link from "next/link";
import React from "react";
import ActivityCard from "./activityCard";
import { activityData } from "../utils/data";

const RenderActivities = () => {
  return (
    <div className="flex-grow space-y-3">
      <h3 className="text-gray-700 font-semibold">Other key activities</h3>
      {activityData.map((data, idx) => (
        <ActivityCard
          key={idx}
          title={data.title}
          client={data.client}
          amount={data.amount}
          action={data.action}
          timeline={data.timeline}
          image={data.image}
          icon={data.icon}
        />
      ))}
      <Link
        className="text-blue-900 block font-semibold mt-4 cursor-pointer text-xs"
        href="/"
      >
        Show all key activities
      </Link>
    </div>
  );
};

export default RenderActivities;
