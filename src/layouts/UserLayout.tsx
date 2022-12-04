import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/website/Banner";
import Contact from "../components/website/Contact";
import Footer from "../components/website/Footer";
import Header from "../components/website/Header";
import Home from "../components/website/Home";
import UserHeader from "../components/website/UserHeader";

type Props = {};

const UserLayout = (props: Props) => {
  const data = localStorage.getItem("user");
  const dataUser = JSON.parse(data as any);
  if (!dataUser) {
    return (
      <div className="w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <UserHeader />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default UserLayout;
