import React, { useEffect, useState } from "react";
import SingleOrderFood from "./SingleOrderFood";

const OrderNow = () => {
  let [data, setData] = useState([]);
  let [food, setFood] = useState("http://localhost:5000/getallfood");
  let [foodLoad, setFoodLoad] = useState([]);
  let [search, setSearch] = useState("");

  // ----------------------------
  useEffect(() => {
    fetch("http://localhost:5000/getallcategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  // ----------------------------
  useEffect(() => {
    fetch(food)
      .then((res) => res.json())
      .then((data) => setFoodLoad(data));
  }, [food, setFood]);

  // ---------------------------------------

  return (
    <div className="container mx-auto mt-10">
      {/* show dropdown and searchbar  */}
      <div className="lg:flex justify-between items-center">
        {/* short  by category name and food price  */}
        <div className="flex">
          <div className="mr-2">
            <select
              onClick={(e) => setFood(e.target.value)}
              className="select select-bordered max-w-xs seleted-value orderfood-dropdown"
            >
              <option disabled selected>
                Choose Food Cetagories
              </option>
              {data.map((d) => (
                <option
                  key={d._id}
                  value={"http://localhost:5000/getallfood/category/" + d._id}
                >
                  {d.categoryname}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              // onChange={handleChange}
              onClick={(e) => setFood(e.target.value)}
              className="select select-bordered max-w-xs seleted-value orderfood-dropdown"
            >
              <option disabled selected>
                Choose Budget
              </option>
              <option value="http://localhost:5000/getallfood/pricequery/100">
                5tk - 100tk
              </option>
              <option value="http://localhost:5000/getallfood/pricequery/300">
                100tk - 300tk
              </option>
              <option value="http://localhost:5000/getallfood/pricequery/500">
                300tk - 500tk
              </option>
              <option value="http://localhost:5000/getallfood/pricequery/1000">
                500tk - 1000tk
              </option>
            </select>
          </div>
        </div>
        <div className="form-control search-food">
          <input
            type="text"
            placeholder="Search Food"
            className="input input-bordered w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <section id="propural-dish" className="container mx-auto mt-10 mb-10">
        <div className="foods grid lg:grid-cols-4 gap-9">
          {/* ______________________________________________________ */}
          {/* {foodLoad.map((data) => (
            <SingleOrderFood data={data} key={data._id}></SingleOrderFood>
          ))} */}
          {/* ____________________________________________________________ */}

          {/* search bar and show data work here  */}
          {foodLoad
            .filter((data) => {
              return search.toLocaleLowerCase() === ""
                ? data
                : data.foodname.toLocaleLowerCase().includes(search);
            })
            .map((data) => (
              <SingleOrderFood data={data} key={data._id} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default OrderNow;
