import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { removeItem, updateLayout } from "@/app/_lib/redux/features/dashboard/dragable_surface_slice";

const ReactGridLayout = WidthProvider(RGL);

function DragableSurface() {
  const layout = useSelector((state) => state.dragableSurface.layout);
  const dispatch = useDispatch();

  const handleLayoutChange = (newLayout) => {
    const updatedLayout = layout.map(item => {
      const newItem = newLayout.find(nItem => nItem.i === item.i.toString());
      return newItem
        ? { ...item, x: newItem.x, y: newItem.y, w: newItem.w, h: newItem.h }
        : item;
    });
    console.log("New Layout: ", newLayout);
    console.log("Updated Layout: ", updatedLayout);
    dispatch(updateLayout(updatedLayout));
  };

  const handleRemoveItem = (itemKey) => {
    dispatch(removeItem(itemKey));
  };

  return (
    <>
      <ReactGridLayout
        isDraggable={true}
        isResizable={true}
        rowHeight={30}
        preventCollision={false}
        cols={12}
        onLayoutChange={handleLayoutChange}
        style={{ border: '1px solid transparent' }}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            className="border-gray-300 border-[0.1px] rounded-sm bg-white"
          >
            <button
              onClick={() => handleRemoveItem(item.i)}
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                textAlign: 'center',
                lineHeight: '20px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <div dangerouslySetInnerHTML={{ __html: item.style }} />
          </div>
        ))}
      </ReactGridLayout>
    </>
  );
}

export default DragableSurface;
