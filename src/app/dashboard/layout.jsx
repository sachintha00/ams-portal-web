"use client";
import React from "react";
import Sidebar from "./_components/sidebar_component/sidebar/sidebar";
import { NavBarToggle } from "./_lib/context/navbar_toggle_context";
import Protected from "../_lib/hooks/useProtected";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsedSidebar } from "../_lib/redux/features/dashboard/sidebar_slice";
import Sider from "antd/es/layout/Sider";
import { Layout, Dropdown, message, Button, Space, Avatar } from "antd";
import {
  RightOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { selectCurrentUser } from "../_lib/redux/features/auth/auth_slice";
import { getCapitalizedFirstLetter } from './helpers/getFirstLetterFromName'
import Image from "next/image";

const items = [
  {
    label: 'Sign Out',
    key: '1',
    icon: <PoweroffOutlined />,
  },
];

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};


const menuProps = {
  items,
  onClick: handleMenuClick,
};


const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.collapsed);
  const user = useSelector(selectCurrentUser);

  const toggleSidebar = () => {
    dispatch(toggleCollapsedSidebar());
  };

  return (
    <NavBarToggle.Provider value={isSidebarOpen} className="bg-background">
      <Protected>
        <Layout className="h-screen bg-background">
          <Sider className="sidebar" theme="light" collapsed={isSidebarOpen}>
            <button
              onClick={toggleSidebar}
              className="sidbar-hamburg hover:bg-accent-hover hover:duration-500 hover:text-foreground"
            >
              <RightOutlined
                className={`transform transition-transform duration-500 ${isSidebarOpen ? "-rotate-45" : "rotate-[135deg]"
                  }`}
              />
            </button>
            <div className="flex flex-col items-center bg-background border-r border-border">
              <div className="flex flex-row items-center mb-12 mt-5">
                <Image
                  className="relative bg-background"
                  src="/assets/logo.svg"
                  alt="Next.js Logo"
                  width={40}
                  height={40}
                  priority
                />
                <div className={`flex flex-col ${isSidebarOpen && "hidden"}`}>
                  <span className="ml-2 font-bold text-secondary-foreground text-[16px]">OPTIOMAX</span>
                  <span className="ml-2 font-medium text-gray-medium text-[10px]">Asset Optimization</span>
                </div>
              </div>
            </div>
            <Sidebar />
            <Dropdown menu={menuProps} className="side-bar-profile" placement="topRight">
              <Button>
                <Space>
                  <Avatar
                    src="https://example.com/your-profile-image.jpg"
                    size={40}
                    style={{ backgroundColor: 'var(--secondary)', }}
                  >
                    <span className="text-gray-medium">{getCapitalizedFirstLetter(user?.name)}</span>
                  </Avatar>
                  <span className={`font-bold text-subText text-[16px] ${isSidebarOpen && "hidden"}`}>{user?.name}</span>
                </Space>
              </Button>
            </Dropdown>
          </Sider>
          <Layout>
            <Content
              className={`py-5 px-6 bg-background ${isSidebarOpen ? "content-collapsed" : "content-expanded"
                }`}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Protected>
    </NavBarToggle.Provider>
  );
};

export default AuthLayout;
