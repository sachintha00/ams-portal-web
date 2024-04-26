"use client";
import React, { useState } from "react";
import Sidebar from "./_components/sidebar_component/sidebar/sidebar";
import TopNavbar from "./_components/topnav_component/top_navbar/top_navbar";
import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import Protected from "../_lib/hooks/useProtected";

const AuthLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavBarToggle.Provider value={isSidebarOpen}>
      <Protected>
        <div className="flex">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex flex-col w-full ">
            <TopNavbar
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <div className="flex-grow p-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </Protected>
    </NavBarToggle.Provider>
  );
};

export default AuthLayout;
