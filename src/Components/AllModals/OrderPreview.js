import React, { useEffect, useState } from "react";

const OrderPreview = ({ setModal, _id }) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://takeitchessy.vercel.app/orders/${_id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  // console.log(data);

  return (
    <div className="viewModaledit">
      <div className="flex justify-between items-center ">
        <h1 className="modal-title">Order Details</h1>
        <label
          className="close"
          htmlFor=""
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </label>
      </div>

      <div>
        <form action="">
          <div className="mt-5 flex">
            <div className="w-6/12">
              {/* --------------- */}
              <div className="food_info-edit mt-5">
                <div className="editfrom">
                  <div className="w-full">
                    <p>
                      <span>Order By: </span>
                      {data.orderby}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Table: </span>
                      {data.table}
                    </p>
                  </div>{" "}
                  <div className="w-full">
                    <p>
                      <span>Subtotal: </span>
                      {data.subtotal}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Status: </span>
                      {data.status}
                    </p>
                  </div>
                </div>
              </div>
              {/* ---------------------------- */}
            </div>
            <div>
              {data?.ordersfoods?.map((item) => {
                return (
                  <div key={item._id}>
                    <p className="orderpreinfo">
                      {item.foodname} X {item.quantity} ={"  "}{" "}
                      {item.quantity * item.foodprice}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPreview;
