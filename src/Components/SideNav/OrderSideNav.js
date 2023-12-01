import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const OrderSideNav = ({ handlefetch }) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://takeitchessy.vercel.app/getallcategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  //   console.log(data);

  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <h2 className="menu-title">Take It Chessy</h2>
          <ul>
            {data.map((data) => (
              <li data={data} key={data._id} className="my-2">
                <NavLink
                  onClick={() => handlefetch(data._id)}
                  // to={"/ordernow/category/" + data._id}
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#646464", borderRadius: "6px" }
                      : {}
                  }
                >
                  {data.categoryname}
                  {/* {data._id} */}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default OrderSideNav;
