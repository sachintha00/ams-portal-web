"use client";
import React, { useContext, useState } from "react";

import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import WidgetDrawer from "./_components/widget_drawer_components/widget_drawer/widget_drawer";
import DragableSurface from "./_components/dragable_layout_component/dragable_surface/dragable_surface";
import { FileAddOutlined, MoonOutlined, CloseOutlined, PlusOutlined, SunOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import { BiSolidWidget } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";

function page() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [isOpenWidgetBar, setWidgetBar] = useState(false);
  const isSidebarOpen = useContext(NavBarToggle);

  return (
    <div
      className={` ${isSidebarOpen ? "ml-[250px]" : "ml-[60px]"
        } overflow-hidden px-15 py-5 h-screen`}
    >
      <div className="container-fluid px-[1rem] pt-[3.5rem] bg-background">
        <div className="grid grid-cols-1 pb-6">
          <h4 className="text-[18px] font-medium mb-sm-0 grow mb-2 md:mb-0">
            Dashboard
          </h4>
        </div>

        <div>
          <DragableSurface />
        </div>
        <FloatButton.Group
          trigger="click"
          style={{ right: 24, color: "white" }}
          icon={<PlusOutlined style={{ color: "#3399ff" }} />}
          closeIcon={<CloseOutlined style={{ color: "#3399ff" }} />}
        >
          <FloatButton
            onClick={toggleTheme}
            icon={
              theme === "light" ? (
                <MoonOutlined style={{ color: "#3399ff" }} />
              ) : (
                <SunOutlined style={{ color: "#3399ff" }} />
              )
            }
          />
          <FloatButton
            onClick={(e) => setWidgetBar(!isOpenWidgetBar)}
            icon={<FileAddOutlined style={{ color: "#3399ff" }} />}
          />
        </FloatButton.Group>
        <WidgetDrawer
          isOpenWidgetBar={isOpenWidgetBar}
          setWidgetBar={setWidgetBar}
        />
      </div>
    </div>
  );
}

export default page;
