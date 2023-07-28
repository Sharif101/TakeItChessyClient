import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav/SideNav";
import "../style.css";

const DashLayout = () => {
  return (
    <div className="container grid lg:grid-cols-4 sm:grid-cols-1 gap-x-7 my-7 mx-auto">
      <div>
        <SideNav></SideNav>
      </div>
      <div className="lg:col-span-3 my-7 sm:col-span-1 dashboadLayoutOutlet">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashLayout;
