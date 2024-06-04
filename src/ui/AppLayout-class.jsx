import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { sidebarList } from "../data/navLink";
import LogoCard from "./components/LogoCard";
import Hr from "./components/Hr";

const AppLayout = () => {
  const [expanded, setExpanded] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [moblieScreen, setMoblieScreen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (moblieScreen) {
      setExpanded(true);
    }
  }, [moblieScreen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMoblieScreen(true);
        setShowSidebar(false); // 在手機屏幕上，關閉側邊欄
      } else {
        setMoblieScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-[100vh]">
      <header
        className="px-12 py-3 border-b-[1px] border-solid border-gray-100 bg-orange-100"
        style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
      >
        header
      </header>
      <aside
        className="px-8 py-6 border-r-[1px] border-solid row-span-full bg-blue-500"
        style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}
      >
        <LogoCard
          showSidebar={showSidebar}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </aside>
      <main
        className="bg-gray-200 pt-10 px-12 pb-16"
        style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
      >
        <Outlet />
      </main>
    </div>
    // <div className="bg-gray-100 w-full h-screen">
    //   <div>
    //     {/* 遮罩*/}
    //     {showSidebar && (
    //       <div
    //         className="fixed top-0 right-0 left-0 z-30 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
    //         onClick={() => {
    //           setShowSidebar((prev) => !prev);
    //         }}
    //       ></div>
    //     )}
    //     {/* 遮罩*/}

    //     {/* sm 模式下才有的 burger 按鈕*/}
    //     <div className="flex justify-end relative h-14 ">
    //       <div className="p-2 hidden sm:block">Header justify-end {/* <SearchBar /> */}</div>
    //       <button
    //         type="button"
    //         className="h-10 top-3 right-3 aspect-square sm:hidden  relative flex items-center justify-center text-2xl text-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-0 "
    //         onClick={() => setShowSidebar((prev) => !prev)}
    //       >
    //         <FaBars />
    //       </button>
    //     </div>
    //     {/* sm 模式下才有的 burger 按鈕*/}

    //     <aside
    //       className={`fixed z-40 h-screen transition-all  flex flex-col
    //     ${
    //       showSidebar
    //         ? "max-w-[220px] top-0 right-0 bg-gray-100 border-left border-l-2 border-gray-200 shadow-slate-800 shadow-md"
    //         : expanded
    //         ? "sm:w-60 w-0 top-0 left-0  overflow-hidden"
    //         : "sm:w-16 w-0 top-0 left-0  overflow-hidden"
    //     }
    //     `}
    //     >
    //       {/* UserCard 使用者卡片 Start*/}
    //       <LogoCard
    //         showSidebar={showSidebar}
    //         expanded={expanded}
    //         setExpanded={setExpanded}
    //       />

    //       {/* UserCard 使用者卡片 End*/}

    //       <Hr />

    //       {/* List Start */}
    //       <div className="h-full px-3 overflow-y-auto bg-gray-10 dark:bg-gray-800">
    //         <ul className="space-y-2 font-medium">
    //           {sidebarList.map(({ icon: Icon, text, path }, index) => {
    //             const active = location.pathname === path;

    //             return (
    //               <li key={index}>
    //                 <a
    //                   href={path}
    //                   className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-sm cursor-pointer transition-colors group ${
    //                     active
    //                       ? "bg-gray-800 text-gray-100"
    //                       : "hover:bg-gray-300 text-gray-800"
    //                   }
    //           `}
    //                 >
    //                   <span
    //                     className={`overflow-hidden flex items-center transition-all w-10 h-6`}
    //                   >
    //                     <Icon />
    //                   </span>

    //                   <span
    //                     className={`overflow-hidden transition-all ${
    //                       expanded ? "w-52 ml-3" : "w-0"
    //                     }`}
    //                   >
    //                     {text}
    //                   </span>
    //                 </a>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //       {/* List End */}
    //     </aside>

    //     {/* 主內容 */}
    //     <div
    //       className={`transition-all bg-slate-300 flex-1 px-2 ${
    //         showSidebar
    //           ? "overflow-y-hidden"
    //           : expanded
    //           ? "sm:ml-60"
    //           : "sm:ml-16"
    //       }`}
    //     >
    //       <Outlet />
    //     </div>
    //     {/* 主內容 */}
    //   </div>
    // </div>
  );
};

export default AppLayout;
