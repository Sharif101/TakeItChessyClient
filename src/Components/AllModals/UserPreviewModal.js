import React, { useEffect, useState } from "react";

const UserPreviewModal = ({ setModal, _id }) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allusers/${_id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="viewModaledit">
      <div className="flex justify-between items-center ">
        <h1 className="modal-title">User Details</h1>
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
          <div className="mt-5">
            <div>
              {/* --------------- */}
              <div className="food_info-edit mt-5">
                <div className="editfrom">
                  <div className="w-full">
                    <p>
                      <span>Name: </span>
                      {data.name}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>UserName: </span>
                      {data.userName}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>PhoneNo: </span>
                      {data.phoneNo}
                    </p>
                  </div>

                  <div className="w-full">
                    <p>
                      <span>Email: </span>
                      {data.email}
                    </p>
                  </div>
                  <div className="w-full">
                    <p>
                      <span>Category: </span>
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
              {/* -------------------------- */}
              {/* --------------- */}

              {/* ---------------------------- */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPreviewModal;
