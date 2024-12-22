"use client";
import React, { useContext, useState } from "react";
import data from "./utils/recordsData";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import Image from "next/image";
import { MyContext } from "../../../../Context";

const Records = () => {
  const [checkedRecords, setCheckedRecords] = useState([]);
  const [filteredList, setFilteredList] = useState(data);
  const [filterColumn, setFilterColumn] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  const { actionsModalOpen, setActionsModalOpen } = useContext(MyContext);
  const [sortOrder, setSortOrder] = useState({
    name: "asc",
    topic: "asc",
    status: "asc",
    createdOn: "asc",
  });

  const checkedUser = (e, record) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedRecords((prev) => [...prev, record]);
    } else {
      setCheckedRecords((prev) => prev.filter((item) => item !== record));
    }
  };

  const handleColumnFilter = (columnName) => {
    let newSortOrder = sortOrder[columnName] === "asc" ? "desc" : "asc";
    if (sortOrder[columnName] === "asc") {
      newSortOrder = "desc";
    }
    setSortOrder({ ...sortOrder, [columnName]: newSortOrder });
    setFilterColumn(columnName);

    const sortedData = [...filteredList].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a[columnName] > b[columnName] ? 1 : -1;
      } else {
        return a[columnName] < b[columnName] ? 1 : -1;
      }
    });
    setFilteredList(sortedData);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setFilterValue(value);

    const filtered = data.filter((record) => {
      return (
        record.name.toLowerCase().includes(value.toLowerCase()) ||
        record.topic.toLowerCase().includes(value.toLowerCase()) ||
        record.status.toLowerCase().includes(value.toLowerCase()) ||
        record.createdOn.toLowerCase().includes(value.toLowerCase())
      );
    });
    setFilteredList(filtered);
  };

  return (
    <div className="overflow-x-auto w-full bg-white shadow-lg shadow-grey-400 border border-gray-200 rounded-md py-2 px-4 text-xs">
      <div className="relative flex animate-gradient w-80 rounded-md bg-gradient-to-tr from-[#4F87D1] to-[#58C4D9] via-[#9E6EE1] p-0.5 shadow-lg mb-5">
        <input
          type="text"
          placeholder="Search by name, topic, or status"
          className="w-full p-2 border-0 outline-none rounded-sm text-gray-700 px-2"
          value={filterValue}
          onChange={handleSearch}
        />
        <div className="bg-white pt-2 pr-2">
          <Image
            src={"/icons/copilot.svg"}
            alt="Search Icon"
            width={20}
            height={20}
          />
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300 text-gray-500 text-left">
            <th
              className="pb-2 pl-6 cursor-pointer w-4/12 flex items-center"
              onClick={() => handleColumnFilter("name")}
            >
              Name{" "}
              {sortOrder["name"] === "asc" ? <RxCaretUp /> : <RxCaretDown />}
            </th>
            <th
              className="pb-2 cursor-pointer w-3/12 "
              onClick={() => handleColumnFilter("topic")}
            >
              <p className="flex items-center">
                Topic{" "}
                {sortOrder["topic"] === "asc" ? <RxCaretUp /> : <RxCaretDown />}
              </p>
            </th>
            <th
              className="pb-2 cursor-pointer w-3/12"
              onClick={() => handleColumnFilter("status")}
            >
              <p className="flex items-center">
                Status reason{" "}
                {sortOrder["status"] === "asc" ? (
                  <RxCaretUp />
                ) : (
                  <RxCaretDown />
                )}
              </p>
            </th>
            <th
              className="pb-2 cursor-pointer w-2/12"
              onClick={() => handleColumnFilter("createdOn")}
            >
              <p className="flex items-center">
                Created On{" "}
                {sortOrder["createdOn"] === "asc" ? (
                  <RxCaretUp />
                ) : (
                  <RxCaretDown />
                )}
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((record, index) => (
            <tr key={index} className="border-t border-gray-300 text-gray-500">
              <td className="py-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  className="align-middle"
                  onChange={(e) => checkedUser(e, record)}
                />
                <span className="text-blue-700 hover:cursor-pointer" onClick={() => setActionsModalOpen(true)}>{record.name}</span>
              </td>
              <td className="py-3">{record.topic}</td>
              <td className="py-3">{record.status}</td>
              <td className="py-3">{record.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
