import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useGetSidebarMenusQuery } from '../../../../_lib/redux/features/dashboard/sidebar_api';

const icons = {
  HomeOutlined: <HomeOutlined />,
  AppstoreOutlined: <AppstoreOutlined />,
  AreaChartOutlined: <AreaChartOutlined />,
  PayCircleOutlined: <PayCircleOutlined />,
  SettingOutlined: <SettingOutlined />,
  BarsOutlined: <BarsOutlined />,
};

const buildTree = (data) => {
  const map = new Map();

  data.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  const result = [];

  data.forEach(item => {
    if (item.parent_id === null) {
      result.push(map.get(item.id));
    } else {
      const parent = map.get(item.parent_id);
      if (parent) {
        parent.children.push(map.get(item.id));
      }
    }
  });

  return result;
};

const formatData = (data) => {
  return data.map(item => {
    const formattedItem = {
      label: item.label,
      key: item.key,
      href: item.href,
    };

    if (item.icon) {
      formattedItem.icon = icons[item.icon];
    }

    if (item.children && item.children.length > 0) {
      formattedItem.children = formatData(item.children);
    }

    return formattedItem;
  });
};

const getItem = (item) => ({
  key: item.key,
  icon: item.icon,
  children: item.children ? item.children.map(getItem) : undefined,
  label: item.href ? <Link href={item.href}>{item.label}</Link> : item.label,
});

const MenuList = () => {
  const { data, isSuccess } = useGetSidebarMenusQuery();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    console.log(data)
    if (isSuccess) {
      const formattedData = formatData(buildTree(data.data));
      console.log(formattedData)
      setMenuItems(formattedData.map(getItem));
    }
  }, [data, isSuccess]);

  return (
    <Menu
      theme="light"
      mode="inline"
      className="menu-bar h-screen"
      items={menuItems}
    />
  );
};

export default MenuList;
