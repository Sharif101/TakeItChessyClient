import React, { useEffect, useState } from "react";
import Singleuser from "./Singleuser";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="food-list">
      {/* ----------------------------------- */}
      <div className="menu-list">
        <div className="menu-list-titles mt-8 mb-8 flex justify-between items-center">
          <h1 className="w-96">Name</h1>
          <h1 className="w-96  text-center">Email</h1>
          <h1 className="w-96  text-center">PhoneNo</h1>
          <h1 className="w-96 text-center">Aciton</h1>
        </div>
      </div>
      {/* ------------- */}
      {data.map((d) => (
        <Singleuser d={d} key={d._id} />
      ))}
    </div>
  );
};

export default Users;
