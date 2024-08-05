"use client";
import React, { useState } from "react";
import Sidebar from "./_components/sidebar_component/sidebar/sidebar";
import TopNavbar from "./_components/topnav_component/top_navbar/top_navbar";
import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import Protected from "../_lib/hooks/useProtected";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsedSidebar } from "../_lib/redux/features/dashboard/sidebar_slice";

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.sidebar.collapsed)
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    // setIsSidebarOpen(!isSidebarOpen);
    dispatch(toggleCollapsedSidebar());
  };

  return (
    <NavBarToggle.Provider value={isSidebarOpen}>
      <Protected>
        <div className="flex bg-background">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex w-full ">
            <div className="flex-grow p-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </Protected>
    </NavBarToggle.Provider>
  );
};

export default AuthLayout;
