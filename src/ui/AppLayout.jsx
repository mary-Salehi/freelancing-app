import { Outlet } from "react-router-dom";
import Header from "./Header";
import React, { useState } from "react";

function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]  md:grid-cols-[15rem_1fr] ">
      {isSidebarOpen && <div className="backdrop-blur-sm  h-full w-full fixed top-0 left-0"></div>}
      <Header handleClick={() => setIsSidebarOpen(true)}/>
      {/* {children} */}
      {React.cloneElement(children, {
        isSidebarOpen,
        setIsSidebarOpen
      })}
      <div className="bg-secondary-100 p-8 overflow-y-auto col-span-2 md:col-span-1
      ">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
