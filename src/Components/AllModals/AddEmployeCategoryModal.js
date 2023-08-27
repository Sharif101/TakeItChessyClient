import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
// import { useForm, SubmitHandler } from "react-hook-form";

const AddEmployeCategoryModal = () => {
  // here use useFrom hook
  // const { register, handleSubmit, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset();
  // };

  const [employeeCategoryName, setEmployeeCategoryName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!employeeCategoryName) {
      toast.error("pleaase fill all field");
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/allemployeecategory",
        { employeeCategoryName },
        config
      );
      toast.success("created successfull");
      setEmployeeCategoryName("");
      // console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Worng");
    }
  };

  // console.log(employeeCategoryName);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        + Add Employe Category
      </button>
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="modal-title  mb-4">
            Never eat more than you can life!
          </h3>
          <div className="flex flex-col items-center inpt-form">
            <input
              type="text"
              // name="employeeCategoryName"
              placeholder="Add Employee Category"
              className="input input-bordered input-md w-full max-w-xs"
              value={employeeCategoryName}
              onChange={(e) => setEmployeeCategoryName(e.target.value)}
              // {...register("employeeCategoryName")}
            />

            {/* -------------------------------------- */}

            <button
              className="custom-button w-8/12"
              type="submit"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddEmployeCategoryModal;
