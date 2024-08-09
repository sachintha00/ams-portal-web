import React from "react";

function WidgetMenuGrid({ children }) {
  return <div className="grid grid-cols-1 gap-4 text-gray-medium">{children}</div>;
}

export default WidgetMenuGrid;
