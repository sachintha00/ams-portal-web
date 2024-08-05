import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import LogoOptioMax from "../../../../_assets/images/logo-sm.svg";
import ProfileComponent from "../profile_component/profile_component";

function TopNavbar({ toggleSidebar, isSidebarOpen }) {
  const sidebarWidth = isSidebarOpen ? "250px" : "65px";
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center bg-background text-foreground border-border ">
      <div className="flex justify-between w-full">
        <div className="flex items-center topbar-brand">
          <div
            className={`${!isSidebarOpen ? "pl-4" : "px-6"
              } lg:flex items-center shrink  h-[70px] border-r bg-background border-border `}
            style={{ width: `${sidebarWidth}` }}
          >
            <Image
              src={LogoOptioMax}
              width={30}
              height={30}
              alt="Picture of the author"
              className="mr-2"
            />
            <div
              className={`${!isSidebarOpen ? "hidden" : ""} text-xl font-based`}
            >
              Optiomax
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b border-border ">
          <div className="flex items-center ml-5">
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <GiHamburgerMenu />
            </div>
            <div className="relative hidden p-0 ml-2 xl:block">
              <input
                type="text"
                className="z-0 h-[50px] pl-5 pr-5 rounded-lg focus:shadow focus:outline-gray-200 "
                placeholder="Search anything..."
              />
              <div className="absolute top-2 right-2 ">
                <button
                  className="py-1.5 px-2.5 w-9 h-[34px] text-white bg-violet-500 inline-block top-1 rounded shadow shadow-violet-100"
                  type="button"
                >
                  <BiSearchAlt />
                </button>
              </div>
            </div>
          </div>
          <div className="z-50 flex mx-12">
            <ProfileComponent />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
