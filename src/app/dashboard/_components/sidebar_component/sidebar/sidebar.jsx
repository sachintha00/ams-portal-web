import React, { useEffect, useState } from "react";
import DashboardMenuItem from "../dashboard_menu_item/dashboard_menu_item";
import { useGetDashboardSidebarMenuItemsQuery } from "@/app/_lib/redux/features/dashboard/sidebar_api";

function Sidebar({ isSidebarOpen }) {
  const [menuItemObjectArray, setMenuItemObjectArray] = useState([]);
  const {
    data: dashboardSidebarItems,
    isLoading,
    isError,
    error,
  } = useGetDashboardSidebarMenuItemsQuery();

  useEffect(() => {
    if (isError) {
      console.log(`Error: ${error}`);
    }
    if (dashboardSidebarItems && dashboardSidebarItems.length > 0) {
      setMenuItemObjectArray(dashboardSidebarItems[0]);
    }
  }, [dashboardSidebarItems, isLoading, isError, error]);
  return (
    <DashboardMenuItem
      isSidebarOpen={isSidebarOpen}
      menuItem={menuItemObjectArray}
    />
  );
}

export default Sidebar;
