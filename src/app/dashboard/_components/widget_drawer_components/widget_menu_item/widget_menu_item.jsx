import React from "react";

function WidgetMenuItem({ menuName, onClick }) {
  return (
    <p
      onClick={onClick}
      className="cursor-pointer w-full hover:bg-background-transparent p-2 rounded-sm"
    >
      {menuName}
    </p>
  );
}

export default WidgetMenuItem;
