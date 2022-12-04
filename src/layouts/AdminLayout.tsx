import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import { Outlet } from "react-router-dom";
import AdminSiderbar from "../components/admin/AdminSiderbar";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <AdminHeader />
      <div className="bg-white h-screen shadow-lg overflow-y-auto grid grid-cols-10 gap-2 mt-16">
        <AdminSiderbar />
        <div className=" col-span-8 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
