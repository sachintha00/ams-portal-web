"use client";
import React, { useEffect, useState } from "react";

import WidgetIconGrid from "../widget_icon_grid/widget_icon_grid";
import WidgetMenuGrid from "../widget_menu_grid/widget_menu_grid";
import WidgetMenuItem from "../widget_menu_item/widget_menu_item";
import WidgetDrawerIconComponent from "../widget_drawer_icon_component/widget_drawer_icon_component";

import { useDispatch, useSelector } from "react-redux";
import { useGetDrawerItemListQuery } from "@/app/_lib/redux/features/dashboard/drawer_item_api";
import { addItem } from "@/app/_lib/redux/features/dashboard/dragable_surface_slice";
import { useAddOrUpdateMutation, useGetLayoutQuery } from "@/app/_lib/redux/features/dashboard/layout_api";

function WidgetComponent() {
  const dispatch = useDispatch();
  const [widgets, setWidgets] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [addOrUpdate] = useAddOrUpdateMutation();

  const { data: fetchedLayout } = useGetLayoutQuery();
  const widgetListInLayout = useSelector((state) => state.dragableSurface.layout);

  const {
    data: drawerItemList,
    isLoading,
    isError,
    error,
  } = useGetDrawerItemListQuery();

  useEffect(() => {
    if (isError) {
      console.log(`Error: ${error}`);
    }

    if (drawerItemList && drawerItemList.items.length > 0) {
      setWidgets(drawerItemList.items);
      setSelectedMenu(drawerItemList.items[0]?.category_name || null);
    }
  }, [drawerItemList, isLoading, isError, error]);

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
  };

  const handleDrawerIconClick = async (designObject, index) => {
    console.log(designObject);

    const existWidget = widgetListInLayout.some((item) => item.widget_id === index);

    if (!existWidget) {
      const newItemX = 0;
      let newItemY = 0;

      if (widgetListInLayout.length > 0) {
        const maxY = Math.max(...widgetListInLayout.map(item => item.y + item.h));
        newItemY = maxY;
      }

      const newItem = {
        x: newItemX,
        y: newItemY,
        w: designObject.width,
        h: designObject.height,
        widget_id: index,
        style: designObject.style,
      };

      dispatch(addItem(newItem));
      const response = await addOrUpdate(newItem);
      console.log(response);

      console.log(widgetListInLayout);
    }
  };

  return (
    <div className="flex flex-1">
      <div className="mt-10 mr-4 w-52">
        <WidgetMenuGrid>
          {widgets?.map((widget, index) => (
            <WidgetMenuItem
              key={index}
              menuName={widget.category_name}
              onClick={() => handleMenuClick(widget.category_name)}
            />
          ))}
        </WidgetMenuGrid>
      </div>
      <div className="h-[700px] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 mt-6" />
      <div className="my-10 mx-8">
        <WidgetIconGrid>
          {widgets?.map((widget) =>
            selectedMenu === widget.category_name
              ? widget.category_related_all_object.map((widgetComponent) => (
                <WidgetDrawerIconComponent
                  key={widgetComponent.id}
                  widgetIcon={widgetComponent.image_path}
                  onClick={() =>
                    handleDrawerIconClick(
                      widgetComponent.design_obj,
                      widgetComponent.id
                    )
                  }
                />
              ))
              : null
          )}
        </WidgetIconGrid>
      </div>
    </div>
  );
}

export default WidgetComponent;
