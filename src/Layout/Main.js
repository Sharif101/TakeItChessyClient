import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
