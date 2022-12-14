import {
  DashboardOutlined,
  ProfileOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link, To } from "react-router-dom";

type Props = {};

const AdminSiderbar = (props: Props) => {
  return (
    <div className="col-span-2">
      <Menu style={{ height: "100%" }}>
        <Menu.Item icon={<DashboardOutlined />}>
          <Link to={"/admin"} />
          DASHBOAD
        </Menu.Item>
        <Menu.SubMenu title="Products">
          <Menu.Item icon={<ProfileOutlined />}>
            <Link to={"/admin/products"} />
            Danh sách sản phẩm
          </Menu.Item>
          <Menu.Item icon={<PlusOutlined />}>
            <Link to={"/admin/products/add"} />
            Thêm sản phẩm
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Categories">
          <Menu.Item icon={<ProfileOutlined />}>
            <Link to={"/admin/products"} />
            Danh sách danh mục
          </Menu.Item>
          <Menu.Item icon={<PlusOutlined />}>
            <Link to={"/admin/products/add"} />
            Thêm danh mục
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Users">
          <Menu.Item icon={<ProfileOutlined />}>
            <Link to={"/admin/products"} />
            Danh sách người dùng
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default AdminSiderbar;
