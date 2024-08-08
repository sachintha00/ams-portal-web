import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import LineChartComponent from '../../widgets/line_chart'
import BarChartComponent from '../../widgets/bar_chart'
import PieChartComponent from '../../widgets/pie_chart'
import parse from 'html-react-parser';

import { removeItem, updateLayout } from "@/app/_lib/redux/features/dashboard/dragable_surface_slice";
import { useAddOrUpdateMutation, useGetLayoutQuery, useRemoveItemApiMutation } from "@/app/_lib/redux/features/dashboard/layout_api";

const ReactGridLayout = WidthProvider(RGL);

function DragableSurface() {
  const dispatch = useDispatch();
  const { data: fetchedLayout, error, isLoading } = useGetLayoutQuery();
  const layout = useSelector((state) => state.dragableSurface.layout);
  const [addOrUpdate] = useAddOrUpdateMutation();
  const [removeItemApi] = useRemoveItemApiMutation();

  useEffect(() => {
    if (fetchedLayout && !isLoading) {
      const formattedLayout = fetchedLayout.data.map(item => ({
        ...item,
        x: parseInt(item.x),
        y: parseInt(item.y),
        w: parseInt(item.w),
        h: parseFloat(item.h),
        widget_id: parseInt(item.widget_id),
        widget_type: item.widget_type,
        id: parseInt(item.id),
        i: item.widget_id.toString(),
      }));
      dispatch(updateLayout(formattedLayout));
    }
  }, [fetchedLayout, isLoading, dispatch]);

  const handleLayoutChange = async (newLayout) => {
    const updatedItems = layout
      .map(item => {
        const newItem = newLayout.find(nItem => nItem.i === item.id.toString());

        return newItem && (item.x !== newItem.x || item.y !== newItem.y || item.w !== newItem.w || item.h !== newItem.h)
          ? { ...item, x: newItem.x, y: newItem.y, w: newItem.w, h: newItem.h }
          : null;
      })
      .filter(item => item !== null);

    for (const updatedItem of updatedItems) {
      try {
        const response = await addOrUpdate(updatedItem);
      } catch (error) {
        console.error('Failed to update item:', updatedItem, error);
      }
    }
  };

  const handleRemoveItem = async (itemKey, widget_id) => {
    dispatch(removeItem(widget_id));
    await removeItemApi(itemKey);
  };


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading layout</p>;

  return (
    <>
      <ReactGridLayout
        isDraggable={true}
        isResizable={true}
        rowHeight={30}
        preventCollision={false}
        cols={12}
        onLayoutChange={handleLayoutChange}
        style={{ border: '1px solid transparent', backgroundColor: "var(--background)" }}
      >
        {layout.map((item) => (
          <div
            key={item.id}
            data-grid={item}
            className="border-border border-[0.1px] rounded-sm bg-background"
          >
            <button
              onClick={() => handleRemoveItem(item.id, item.widget_id)}
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                color: 'var(--gray-dark)',
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
            {item.widget_type === "" ? <div dangerouslySetInnerHTML={{ __html: item.style }} /> : item.widget_type === "LINE_CHART" ? <LineChartComponent /> : item.widget_type === "BAR_CHART" && <BarChartComponent />}
            {/* <div dangerouslySetInnerHTML={{ __html: item.style }} /> */}
          </div>
        ))}
      </ReactGridLayout>
    </>
  );
}

export default DragableSurface;
