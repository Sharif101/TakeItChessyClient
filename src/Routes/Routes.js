import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import OrderNow from "../Components/OrderNow/OrderNow";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashLayout from "../Layout/DashLayout";
import AddFood from "../Components/AddFood/AddFood";
import AddCategory from "../Components/AddCategory/AddCategory";
import OrderLayout from "../Layout/OrderLayout";
import AddEmployeCategory from "../Components/AddEmployeCategory/AddEmployeCategory";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/ordernow",
      //   element: <OrderLayout></OrderLayout>,
      //   children: [
      //     {
      //       path: "/ordernow",
      //       element: <OrderNow></OrderNow>,
      //     },
      //   ],
      // },
      {
        path: "/ordernow",
        element: <OrderNow></OrderNow>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/dashboard",
        element: <DashLayout></DashLayout>,
        children: [
          {
            path: "/dashboard/addfood",
            element: <AddFood></AddFood>,
          },
          {
            path: "/dashboard/addcategory",
            element: <AddCategory></AddCategory>,
          },
          {
            path: "/dashboard/addemployeecategory",
            element: <AddEmployeCategory></AddEmployeCategory>,
          },
        ],
      },
    ],
  },
]);

export default router;
