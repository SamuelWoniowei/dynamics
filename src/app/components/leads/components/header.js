import React, { useContext } from "react";
import { TfiPieChart } from "react-icons/tfi";
import { FaTasks } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { VscRefresh } from "react-icons/vsc";
import { FcCollaboration } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeVertical } from "react-icons/pi";
import { GrPieChart } from "react-icons/gr";
import { IoFilterOutline } from "react-icons/io5";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { MyContext } from "../../../../../Context";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Header = () => {
  const { isLeadsOpen, setIsLeadsOpen, showChart, setShowChart } =
    useContext(MyContext);

  const MenuItem = ({
    children,
    border = false,
    customStyle = "",
    onClick,
  }) => {
    return (
      <span
        className={`flex items-center gap-2 ${
          border ? "border px-2 py-1 rounded-sm" : ""
        } ${customStyle} hover:cursor-pointer hover:text-gray-400`}
        onClick={onClick}
      >
        {children}
      </span>
    );
  };

  return (
    <div className="flex flex-wrap gap-2 lg:gap-0 lg:flex-nowrap lg:justify-between items-center mb-4 bg-white shadow-lg p-2 mt-3 border border-gray-100 rounded-md text-xs">
      <span className="flex gap-1 items-center">
        My open leads{" "}
        {isLeadsOpen ? (
          <button onClick={() => setIsLeadsOpen(!isLeadsOpen)}>
            <RxCaretUp className="text-xl" />
          </button>
        ) : (
          <button onClick={() => setIsLeadsOpen(!isLeadsOpen)}>
            <RxCaretDown className="text-xl" />
          </button>
        )}
      </span>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap items-center">
        <MenuItem
          customStyle={`${showChart ? "text-blue-500" : ""}`}
          onClick={() => setShowChart(true)}
        >
          <TfiPieChart /> Show chart
        </MenuItem>
        <MenuItem
          customStyle={`${!showChart ? "text-blue-500" : ""}`}
          onClick={() => setShowChart(false)}
        >
          <FaTasks /> Focused view
        </MenuItem>
        <MenuItem>
          <FaPlus className="text-green-700" /> New
        </MenuItem>
        <MenuItem>
          <VscRefresh /> Refresh
        </MenuItem>
        <MenuItem>
          <FcCollaboration /> Collaborate
        </MenuItem>
        <MenuItem>
          <RiDeleteBin6Line />
          Delete
        </MenuItem>
        <PiDotsThreeVertical />
        <MenuItem border>
          {" "}
          <GrPieChart /> Smart data
        </MenuItem>
        <MenuItem border>
          <IoFilterOutline /> Edit filters
        </MenuItem>
        <MenuItem border>
          <BsLayoutThreeColumns />
          Edit columns
        </MenuItem>
        <MenuItem border customStyle="bg-blue-700 text-white gap-1 rounded-md">
          <BiSolidEdit />|
          <select className="bg-blue-700 text-white w-4">
            <option disabled defaultValue={true}>
              {" "}
              ▼
            </option>
            <option value="1">Edit</option>
            <option value="2">Edit</option>
            <option value="3">Edit</option>
          </select>
        </MenuItem>
      </div>
    </div>
  );
};

export default Header;
