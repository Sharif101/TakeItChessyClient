import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
          <h2 className="menu-title">Take It Chessy</h2>
          <ul>
            <li className="my-2">
              <NavLink
                to="/dashboard/addfood"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#646464", borderRadius: "6px" }
                    : {}
                }
              >
                All Foods
                {/* Add food */}
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/dashboard/addcategory"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#646464", borderRadius: "6px" }
                    : {}
                }
              >
                Food Categories
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/dashboard/addemployee"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#646464", borderRadius: "6px" }
                    : {}
                }
              >
                All Employee
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/dashboard/addemployeecategory"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#646464", borderRadius: "6px" }
                    : {}
                }
              >
                Employee Category
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
