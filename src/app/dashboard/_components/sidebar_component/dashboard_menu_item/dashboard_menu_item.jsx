"use client";
import React, { useState, useEffect } from "react";
import {
  RightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapsedSidebar } from "@/app/_lib/redux/features/dashboard/sidebar_slice";



function DashboardMenuItem({ isSidebarOpen, menuItem }) {
  const dispatch = useDispatch()
  const collapsed = useSelector(state => state.sidebar.collapsed);

  const toggleCollapsed = () => {
    dispatch(toggleCollapsedSidebar());
  };


  const [mainMenuItems, setMainMenuItems] = useState(() => {
    const initialMainMenuItems = {};
    menuItem.forEach((_, mainMenuIndex) => {
      initialMainMenuItems[mainMenuIndex] = false;
    });
    return initialMainMenuItems;
  });

  const [submenus, setSubmenus] = useState(() => {
    const initialSubmenus = {};
    menuItem.forEach((mainMenu, mainMenuIndex) => {
      if (mainMenu.subMenu) {
        mainMenu.subMenu.forEach((_, submenuIndex) => {
          const submenuKey = `submenu${mainMenuIndex}_${submenuIndex}`;
          initialSubmenus[submenuKey] = false;
        });
      }
    });
    return initialSubmenus;
  });

  useEffect(() => {
    if (!isSidebarOpen) {
      setMainMenuItems(() => {
        const resetMainMenuItems = {};
        menuItem.forEach((_, mainMenuIndex) => {
          resetMainMenuItems[mainMenuIndex] = false;
        });
        return resetMainMenuItems;
      });

      setSubmenus(() => {
        const resetSubmenus = {};
        menuItem.forEach((mainMenu, mainMenuIndex) => {
          if (mainMenu.subMenu) {
            mainMenu.subMenu.forEach((_, submenuIndex) => {
              const submenuKey = `submenu${mainMenuIndex}_${submenuIndex}`;
              resetSubmenus[submenuKey] = false;
            });
          }
        });
        return resetSubmenus;
      });
    }
  }, [isSidebarOpen, menuItem]);

  const toggleSubmenu = (dashboardIndex, submenuIndex) => {
    setSubmenus((prevSubmenus) => {
      const submenuKey = `submenu${dashboardIndex}_${submenuIndex}`;
      const updatedSubmenus = {};

      Object.keys(prevSubmenus).forEach((key) => {
        updatedSubmenus[key] = key === submenuKey ? !prevSubmenus[key] : false;
      });

      return updatedSubmenus;
    });
  };

  const toggleMainMenu = (mainMenuIndex) => {
    setMainMenuItems((prevMainMenuItems) => {
      const updatedMainMenuItems = { ...prevMainMenuItems };
      const isExpanded = updatedMainMenuItems[mainMenuIndex];

      Object.keys(updatedMainMenuItems).forEach((index) => {
        updatedMainMenuItems[index] =
          index === `${mainMenuIndex}` && !isExpanded;
      });

      return updatedMainMenuItems;
    });
  };

  return (
    <div
      className={`fixed bottom-0 h-screen border-r bg-background border-border z-40 text-foreground`}
      style={{ width: isSidebarOpen ? "250px" : "65px" }}
    >
      <button
        onClick={toggleCollapsed}
        className="sidbar-hamburg hover:bg-accent-hover hover:duration-500 hover:text-foreground rounded-full"
      >
        <RightOutlined
          className={`transform transition-transform duration-500 ${!collapsed ? "-rotate-45" : "rotate-[135deg]"
            }`}
        />
      </button>
      <nav className="flex-grow mt-2 overflow-y-hidden">
        <ul className="mt-10 ">
          {menuItem.map((mainMenu, mainMenuIndex) => (
            <li key={mainMenuIndex} className="my-6">
              <ul>
                <div
                  className={`${!isSidebarOpen && "justify-center "
                    } cursor-pointer ml-5 mb-2`}
                >
                  <div
                    className="flex items-center "
                    {...(!isSidebarOpen
                      ? {
                        onMouseEnter: () => toggleMainMenu(mainMenuIndex),
                        // onMouseLeave: () => toggleMainMenu(mainMenuIndex),
                      }
                      : { onClick: () => toggleMainMenu(mainMenuIndex) })}
                  >
                    {/* {mainMenu.icon} */}
                    <Image
                      src={mainMenu.icon}
                      className={`mr-2 test`}
                      alt="image"
                      width={25}
                      height={25}
                    />
                    {mainMenu.hasOwnProperty("link") ? (
                      <Link
                        href={mainMenu.link}
                        className={!isSidebarOpen ? "hidden" : ""}
                      >
                        {mainMenu.menu}
                      </Link>
                    ) : (
                      <div className={!isSidebarOpen ? "hidden" : ""}>
                        <div>
                          <span>{mainMenu.menu}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {mainMenuItems[mainMenuIndex] && (
                    <div
                      className={`${!isSidebarOpen
                        ? "absolute bg-background-transparent shadow-lg whitespace-nowrap left-16 "
                        : "ml-2 mt-2"
                        } cursor-pointer`}
                    >
                      {mainMenu.subMenu &&
                        mainMenu.subMenu.map((submenuItem, submenuIndex) => (
                          <React.Fragment key={submenuIndex}>
                            {submenuItem.hasOwnProperty("link") ? (
                              <Link
                                href={submenuItem.link}
                                className="block px-4 cursor-pointer"
                                {...(!isSidebarOpen
                                  ? {
                                    onMouseEnter: () =>
                                      toggleSubmenu(
                                        mainMenuIndex,
                                        submenuIndex
                                      ),
                                    // onMouseLeave: () =>
                                    //   toggleSubmenu(
                                    //     mainMenuIndex,
                                    //     submenuIndex
                                    //   ),
                                  }
                                  : {
                                    onClick: () =>
                                      toggleSubmenu(
                                        mainMenuIndex,
                                        submenuIndex
                                      ),
                                  })}
                              >
                                {submenuItem.subMenuName}
                              </Link>
                            ) : (
                              <li
                                className="flex items-center justify-between px-4 py-2 cursor-pointer"
                                {...(!isSidebarOpen
                                  ? {
                                    onMouseEnter: () =>
                                      toggleSubmenu(
                                        mainMenuIndex,
                                        submenuIndex
                                      ),
                                    // onMouseLeave: () =>
                                    //   toggleSubmenu(
                                    //     mainMenuIndex,
                                    //     submenuIndex
                                    //   ),
                                  }
                                  : {
                                    onClick: () =>
                                      toggleSubmenu(
                                        mainMenuIndex,
                                        submenuIndex
                                      ),
                                  })}
                              >
                                {submenuItem.subMenuName}
                                {submenuItem.submenuItems?.nestedSubMenu && (
                                  <IoIosArrowForward />
                                )}
                              </li>
                            )}
                            {submenuItem.submenuItems?.nestedSubMenu && (
                              <div
                                style={{
                                  display: submenus[
                                    `submenu${mainMenuIndex}_${submenuIndex}`
                                  ]
                                    ? "block"
                                    : "none",
                                }}
                              >
                                <ul
                                  className={`${!isSidebarOpen
                                    ? "ml-[85px] absolute bg-background-transparent shadow-lg "
                                    : "mt-2 ml-6 tree-view"
                                    }`}
                                >
                                  {submenuItem.submenuItems.nestedSubMenu.map(
                                    (nestedItem, nestedIndex) => (
                                      <li
                                        key={nestedIndex}
                                        className="block px-4 py-2 cursor-pointer"
                                      >
                                        <Link href={nestedItem.link}>
                                          {nestedItem.name}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                    </div>
                  )}
                </div>
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardMenuItem;
