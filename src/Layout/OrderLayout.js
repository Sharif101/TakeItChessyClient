import React, { useEffect, useState } from "react";
import OrderSideNav from "../Components/SideNav/OrderSideNav";
import { Outlet } from "react-router-dom";
import OrderNow from "../Components/OrderNow/OrderNow";

const OrderLayout = () => {
  // let [id, setId] = useState();
  // let handlefetch = (_id) => {
  //   setId(_id);
  // };
  // console.log(id);

  // let [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/getallfood/category/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [data]);
  // console.log(data);
  return (
    <div className="container grid lg:grid-cols-4 sm:grid-cols-1 gap-x-7 my-7 mx-auto">
      <div>
        <OrderSideNav></OrderSideNav>
      </div>
      <div className="lg:col-span-3 my-7 sm:col-span-1 dashboadLayoutOutlet">
        <Outlet>
          <OrderNow></OrderNow>
        </Outlet>
      </div>
    </div>
  );
};

export default OrderLayout;
