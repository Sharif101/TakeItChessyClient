import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const AddEmployeCategoryModal = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
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
              name="employeeCategoryName"
              placeholder="Add Employee Category"
              className="input input-bordered input-md w-full max-w-xs"
              // {...register("employeeCategoryName")}
            />

            {/* -------------------------------------- */}

            <button className="custom-button w-8/12" type="submit">
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
