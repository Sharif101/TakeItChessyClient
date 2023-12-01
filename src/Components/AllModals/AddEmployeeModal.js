import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddEmployeeModal = () => {
  let [data, setData] = useState([]);

  const [employeeCategory, setEmployeeCategory] = useState();
  const [employeeName, setEmployeeName] = useState();
  const [employeeEmail, setEmployeeEmail] = useState();
  const [employeePhoneNo, setEmployeePhoneNo] = useState();
  const [employeeWorkTime, setEmployeeWorkTime] = useState();
  const [employeeSallery, setEmployeeSallery] = useState();
  const [employeeAddress, setEmployeeAddress] = useState();

  useEffect(() => {
    fetch("https://takeitchessy.vercel.app/getallemployeecategory")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  const handleChange = (e) => {
    setEmployeeCategory(e.target.value);
  };
  // ------------------------------
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!employeeName || !employeeEmail) {
      toast.error("pleaase fill all field");
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://takeitchessy.vercel.app/allemployee",
        {
          employeeCategory,
          employeeName,
          employeeEmail,
          employeePhoneNo,
          employeeWorkTime,
          employeeSallery,
          employeeAddress,
        },
        config
      );
      toast.success("created successfull");

      setEmployeeCategory("");
      setEmployeeName("");
      setEmployeeEmail("");
      setEmployeePhoneNo("");
      setEmployeeWorkTime("");
      setEmployeeSallery("");
      setEmployeeAddress("");
      // console.log(data);
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Worng");
    }
  };

  // ---------------------------------------------

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        + Add Employee
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="modal-title  mb-4">
            Never eat more than you can life!
          </h3>

          <div>
            <form className="flex flex-col items-center inpt-form">
              {/* ---------------------------------- */}

              <select
                onChange={handleChange}
                className="select select-bordered w-full max-w-xs seleted-value"
              >
                <option disabled selected>
                  Choose Employee Cetagories
                </option>
                {data.map((d) => (
                  <option key={d._id} value={d.employeeCategoryName}>
                    {d.employeeCategoryName}
                  </option>
                ))}
              </select>

              {/* -------------------------- */}
              <input
                type="text"
                placeholder="Name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="number"
                placeholder="Phone No"
                value={employeePhoneNo}
                onChange={(e) => setEmployeePhoneNo(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="text"
                placeholder="Work Time"
                value={employeeWorkTime}
                onChange={(e) => setEmployeeWorkTime(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="text"
                placeholder="Sallery"
                value={employeeSallery}
                onChange={(e) => setEmployeeSallery(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <textarea
                className="textarea textarea-bordered w-full max-w-xs"
                placeholder="Addresss"
                type="text"
                value={employeeAddress}
                onChange={(e) => setEmployeeAddress(e.target.value)}
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
              <button
                className="custom-button w-4/12"
                type="submit"
                onClick={submitHandler}
              >
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
