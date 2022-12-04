import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/website/Banner";
import Contact from "../components/website/Contact";
import Footer from "../components/website/Footer";
import Header from "../components/website/Header";
import Home from "../components/website/Home";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
