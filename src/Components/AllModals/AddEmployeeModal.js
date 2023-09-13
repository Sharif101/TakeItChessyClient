import React, { useEffect, useState } from "react";

const AddEmployeeModal = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getallemployeecategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        + Add Employee
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="modal-title  mb-4">
            Never eat more than you can life!
          </h3>

          <div>
            <form className="flex flex-col items-center inpt-form">
              {/* ---------------------------------- */}

              <select
                // onChange={handleChange}
                className="select select-bordered w-full max-w-xs seleted-value"
              >
                <option disabled selected>
                  Choose Employee Cetagories
                </option>
                {data.map((d) => (
                  <option key={d._id} value={d._id}>
                    {d.employeeCategoryName}
                  </option>
                ))}
              </select>

              {/* -------------------------- */}
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="number"
                placeholder="Phone No"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="text"
                placeholder="Work Time"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="text"
                placeholder="Sallery"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <textarea
                className="textarea textarea-bordered w-full max-w-xs"
                placeholder="Addresss"
                type="text"
              ></textarea>

              <input
                type="file"
                placeholder="Add pictures"
                className="input input-bordered input-md w-full max-w-xs"
                multiple
                accept="image/png, image/png, image/jpeg"
                // onChange={(e) => postPicture(e.target.files[0])}
                // onBlur={handleinptBlur}
              />

              {/* -------------------------------------- */}
              <button className="custom-button w-4/12" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddEmployeeModal;
