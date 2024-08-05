"use client";
import React, { useContext, useState } from "react";

import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import WidgetDrawer from "./_components/widget_drawer_components/widget_drawer/widget_drawer";
import DragableSurface from "./_components/dragable_layout_component/dragable_surface/dragable_surface";
import { FileAddOutlined, MoonOutlined, CloseOutlined, PlusOutlined, SunOutlined, BellOutlined } from '@ant-design/icons';
import { FloatButton, Drawer } from 'antd';

import { BiSolidWidget } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";

function page() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [isOpenWidgetBar, setWidgetBar] = useState(false);
  const isSidebarOpen = useContext(NavBarToggle);


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={` ${isSidebarOpen ? "ml-[250px]" : "ml-[60px]"
        } px-15 h-screen`}
    >
      <div className="container-fluid px-[1rem] bg-background">
        <div className="grid grid-cols-1 pb-6">
          <h4 className="text-[18px] font-medium mb-sm-0 grow mb-2 md:mb-0">
            Dashboard
          </h4>
        </div>

        <div>
          <DragableSurface />
        </div>
        <Drawer title="Notifications" onClose={onClose} open={open}>
          <div className="relative border-border border-[1px] p-3 rounded-md mb-4">
            <button
              className="absolute top-2 right-2 text-gray-medium hover:text-secondary-foreground"
              onClick={() => console.log('Close button clicked')}
            >
              <CloseOutlined />
            </button>
            <div className="flex items-center ">
              <div className="mr-2">
                <BellOutlined style={{ color: "var(--secondary-foreground)", fontSize: "16px" }} />
              </div>
              <h1 className="text-[16px] font-bold text-secondary-foreground mb-1">Notification Title</h1>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-gray-dark">3:23 PM</p>
              <p className="text-gray-dark">Asset Requestion</p>
            </div>
            <div>
              <p className="text-gray-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
              </p>
              <div className="flex mt-3">
                <button className="mr-2 text-secondary-foreground">
                  Mark as Read
                </button>
              </div>
            </div>
          </div>

          <div className="relative border-border border-[1px] p-3 rounded-md mb-4">
            <button
              className="absolute top-2 right-2 text-gray-medium hover:text-secondary-foreground"
              onClick={() => console.log('Close button clicked')}
            >
              <CloseOutlined />
            </button>
            <div className="flex items-center ">
              <div className="mr-2">
                <BellOutlined style={{ color: "var(--secondary-foreground)", fontSize: "16px" }} />
              </div>
              <h1 className="text-[16px] font-bold text-secondary-foreground mb-1">Notification Title</h1>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-gray-dark">3:23 PM</p>
              <p className="text-gray-dark">Asset Requestion</p>
            </div>
            <div>
              <p className="text-gray-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry....
              </p>
              <div className="flex mt-3">
                <button className="mr-2 text-secondary-foreground border-[1px] border-border px-4 py-2 rounded-md">
                  Reject
                </button>
                <button className="mr-2 text-secondary-foreground border-[1px] border-border px-4 py-2 bg-secondary rounded-md">
                  Approved
                </button>
              </div>
            </div>
          </div>

          <div className="relative border-border border-[1px] p-3 rounded-md mb-4">
            <button
              className="absolute top-2 right-2 text-gray-medium hover:text-secondary-foreground"
              onClick={() => console.log('Close button clicked')}
            >
              <CloseOutlined />
            </button>
            <div className="flex items-center">
              <div className="mr-2">
                <BellOutlined style={{ color: "var(--secondary-foreground)", fontSize: "16px" }} />
              </div>
              <h1 className="text-[16px] font-bold text-secondary-foreground mb-1">Notification Title</h1>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-gray-dark">3:23 PM</p>
              <p className="text-gray-dark">Asset Requestion</p>
            </div>
            <div>
              <blockquote className="text-gray-dark border-l-4 border-secondary-foreground pl-4 italic">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
              </blockquote>
              <div className="flex mt-3">
                <button
                  className="mr-2 text-secondary-foreground border-[1px] border-border px-4 py-2 bg-secondary rounded-md"
                  onClick={() => setIsReplying(!isReplying)}
                >
                  Reply
                </button>
              </div>
              {isReplying && (
                <div className="mt-3">
                  <textarea
                    className="w-full p-2 border border-secondary rounded-md bg-background focus:border-secondary focus:ring-secondary focus:ring-1 focus:outline-none"
                    rows="4"
                    placeholder="Write your reply here..."
                  ></textarea>

                  <button
                    className="mt-2 text-secondary-foreground border-[1px] border-border px-4 py-2 rounded-md"
                    onClick={() => {
                      console.log('Send reply');
                      setIsReplying(false);
                    }}
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>

        </Drawer>
        <FloatButton
          onClick={showDrawer}
          icon={<BellOutlined style={{ color: "#3399ff" }} />}
          style={{ position: 'fixed', right: 24, bottom: 100 }}
          badge={{ count: 12 }}
        />
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
