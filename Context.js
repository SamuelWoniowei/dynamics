"use client";
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLeadsOpen, setIsLeadsOpen] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const [actionsModalOpen, setActionsModalOpen] = useState(false);
  return (
    <MyContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        isLeadsOpen,
        setIsLeadsOpen,
        showChart,
        setShowChart,
        actionsModalOpen,
        setActionsModalOpen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
