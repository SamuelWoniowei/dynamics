"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  LightBulbIcon,
  Cog8ToothIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { CgMenuGridO } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { MyContext } from "../../../../Context";

const Header = () => {
  const icons = [
    { name: "Lightbulb", component: LightBulbIcon, href: "/" },
    { name: "Add", component: PlusIcon, href: "/" },
    { name: "Settings", component: Cog8ToothIcon, href: "/" },
    { name: "Help", component: QuestionMarkCircleIcon, href: "/" },
    { name: "Users", component: UsersIcon, href: "/" },
  ];
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useContext(MyContext);
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-blue-950 fixed w-full flex flex-col md:flex-row py-3 justify-between items-start md:items-center px-3 z-50 ">
      <div className="text-white flex items-center gap-5">
        <button
          onClick={handleClick}
          className="lg:hidden"
        >
          <CgMenuGridO size={22} />
        </button>
        <span className="hidden lg:block">
          <CgMenuGridO size={22}  />
        </span>
        <div className="flex gap-2">
          <span className="font-bold">Dynamics 365</span> |{" "}
          <span className="text-gray-300 font-light">Sales hub</span>
        </div>
      </div>

      <div className="relative flex gap-5 items-center self-center ">
        {icons.map(({ name, component: IconComponent, href }) => (
          <Link
            key={name}
            href={href}
            aria-label={name}
            title={name}
            className="hover:text-gray-400"
          >
            <IconComponent className="w-4 h-4 text-gray-300 hover:text-gray-600 hover:cursor-pointer" />
          </Link>
        ))}
        <div
          className="  relative hover:cursor-pointer"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <Image
            src={"/images/person.png"}
            className="rounded-full"
            alt="User Icon"
            width={20}
            height={20}
          />
          <GoDotFill
            size={14}
            className="absolute top-2 left-3 text-green-500"
          />
        </div>

        <div
          className={`${
            showProfileMenu ? "absolute" : "hidden"
          }  top-9 -right-3 p-4 text-xs w-28 bg-white text-black`}
        >
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Profile</li>
            <li className="hover:cursor-pointer">Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
