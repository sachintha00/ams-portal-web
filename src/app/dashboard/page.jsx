"use client";
import React, { useContext, useState } from "react";

import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import WidgetDrawer from "./_components/widget_drawer_components/widget_drawer/widget_drawer";
import DragableSurface from "./_components/dragable_layout_component/dragable_surface/dragable_surface";

import { BiSolidWidget } from "react-icons/bi";

function page() {
  const [isOpenWidgetBar, setWidgetBar] = useState(false);
  const isSidebarOpen = useContext(NavBarToggle);

  return (
    <div
      className={` ${isSidebarOpen ? "ml-[250px]" : "ml-[60px]"
        } overflow-hidden px-15 py-5 h-screen`}
    >
      <div className="container-fluid px-[1rem] pt-[3.5rem]">
        <div className="grid grid-cols-1 pb-6">
          <h4 className="text-[18px] font-medium mb-sm-0 grow mb-2 md:mb-0">
            Dashboard
          </h4>
        </div>

        <div>
          <DragableSurface />
        </div>

        <div className="text-center fixed bottom-0 right-0 m-10">
          <button
            className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2 mb-2 focus:outline-none w-[50px] h-[50px] flex items-center justify-center"
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
            onClick={(e) => setWidgetBar(!isOpenWidgetBar)}
          >
            <BiSolidWidget style={{ fontSize: "20px" }} />
          </button>
        </div>
        <WidgetDrawer
          isOpenWidgetBar={isOpenWidgetBar}
          setWidgetBar={setWidgetBar}
        />
      </div>
    </div>
  );
}

export default page;
