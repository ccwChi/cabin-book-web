import React from "react";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import logo from "../../data/image/cubone.webp";

const LogoCard = ({ showSidebar, expanded, setExpanded }) => {
  return (
    <div className="relative w-full h-[230px] pt-6  flex items-center flex-col dark:border-gray-600 dark:bg-gray-800">
      <div
        className={`absolute top-2 right-4 rounded-xl text-gray-500 hover:bg-slate-200 p-2 ${
          showSidebar && "hidden"
        }`}
        onClick={() => setExpanded((curr) => !curr)}
      >
        {expanded ? <FaAnglesLeft /> : <FaAnglesRight />}
      </div>
      <div className="w-full h-24 flex justify-center items-center">
        <img
          className={`rounded-full ring-2 ring-white  dark:ring-2 shadow-[0_2px_6px_0px_rgba(99,99,99,1)]
    p-1 m-1 ${expanded ? "w-20 h-20 " : "w-8 h-8"}`}
          src={logo}
          alt="avatar"
        />
      </div>
      <p
        className={`h-6 font-mono mt-2 font-bold  dark:text-white ${
          expanded ? "" : "bg-sky-100 px-2 rounded-lg dark:bg-sky-800"
        }`}
      >
        {expanded ? "Cubone" : "C"}
      </p>
      <p className="h-4 font-mono text-sm dark:text-white">
        {" "}
        {expanded && "Discipline Equals Freedom"}
      </p>
      <ThemeSwitcher />
    </div>
  );
};

export default LogoCard;
