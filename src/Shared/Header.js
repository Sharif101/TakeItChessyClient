import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style.css";

const Header = () => {
  let menuitems = (
    <React.Fragment>
      <li className="mx-1">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#1D1F21", borderRadius: "6px" } : {}
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-1">
        <NavLink
          to="/ordernow"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#1D1F21", borderRadius: "6px" } : {}
          }
        >
          Order Now
        </NavLink>
      </li>
      <li className="mx-1">
        <NavLink
          to="/dashboard/addfood"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#1D1F21", borderRadius: "6px" } : {}
          }
        >
          Dashboard
        </NavLink>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar header-navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Take It Chessy
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menuitems}</ul>
      </div>
    </div>
  );
};

export default Header;
