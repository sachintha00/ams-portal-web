import React from "react";

import WidgetComponent from "../widget_component/widget_component";
import WidgetSearchBox from "../widget_searchbox/widget_searchbox";

function WidgetDrawer({ isOpenWidgetBar, setWidgetBar }) {
  return (
    <div>
      <div
        id="drawer-right-example"
        className={`fixed top-0 ${
          isOpenWidgetBar ? "right-[600px]" : "right-[0px]"
        } z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-[600px] border-l-[.1px] border-black-800`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 "
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Widgets drawer
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-black-800 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center "
          onClick={(e) => setWidgetBar(!isOpenWidgetBar)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <WidgetSearchBox />
        <WidgetComponent />
      </div>
    </div>
  );
}

export default WidgetDrawer;
