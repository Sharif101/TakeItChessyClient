import React, { useEffect, useState } from "react";
import SinglePropuralDish from "./SinglePropuralDish";
import arrow from "../../images/left_1.png";
import { Link } from "react-router-dom";

const PropuralDish = () => {
  const [data, setData] = useState([]);

  //   --------------------------------
  useEffect(() => {
    fetch("http://localhost:5000/getallfoodlimit")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  //   console.log(data);

  //   ------------------------------------

  return (
    <div>
      <section id="propural-dish" className="container mx-auto mt-28 mb-10">
        <div className="title">
          <p>Propural Dishes</p>
          <h1>Our Exclusive Items</h1>
        </div>
        <div className="foods grid lg:grid-cols-4 gap-9">
          {data.map((d) => (
            <SinglePropuralDish d={d} key={d._id}></SinglePropuralDish>
          ))}
        </div>

        <div className="banner-btn-1 pr-16 flex items-center mt-16 ml-4 w-fit">
          {/* <a href="#" className="btn1">
            Show All
          </a> */}
          <Link to="/ordernow" className="btn1">
            Show All
          </Link>
          <img src={arrow} alt="" />
        </div>
      </section>
    </div>
  );
};

export default PropuralDish;
