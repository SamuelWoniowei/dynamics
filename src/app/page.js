"use client";
import { useState } from "react";
import Header from "./components/header";
import Leads from "./components/leads";
import ReyesModal from "./components/modals/reyes";
import Records from "./components/records";
import RightSidebar from "./components/rightSidebar";
import Sidebar from "./components/sidebar";
import SidebarModal from "./components/modals/sidebar";
import ActionsModal from "./components/modals/actions";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Header />
      <div className="flex pt-14">
        <Sidebar />
        <main className="w-full lg:w-10/12 px-4 ">
          <Leads modal={toggleModal} />
          <Records />
        </main>
        <RightSidebar />
      </div>

      {isModalOpen && <ReyesModal modalState={toggleModal} />}
      <SidebarModal />
      <ActionsModal />
    </div>
  );
}
