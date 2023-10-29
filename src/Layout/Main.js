import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
