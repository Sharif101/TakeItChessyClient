import axios from "axios";
import React, { useState } from "react";

const AddCategoryModal = () => {
  const [categoryname, setCategoryname] = useState();
  const [categorypic, setCategorypic] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!categoryname) {
      alert("please fill all field");
    }

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/allcategory",
        { categoryname, categorypic },
        config
      );
      alert("created successfull");
      // e.target.reset();

      // localStorage.setItem("foodInfo", JSON.stringify(data));

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-3">
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_5.showModal()}>
        + Add Food Category
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="modal-title  mb-4">
            Never eat more than you can life!
          </h3>
          <div>
            <form className="flex flex-col items-center inpt-form">
              <input
                type="text"
                placeholder="Add Food Category"
                value={categoryname}
                onChange={(e) => setCategoryname(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="file"
                placeholder="Add pictures"
                className="input input-bordered input-md w-full max-w-xs"
                multiple
                accept="image/png, image/png, image/jpeg"
              />

              {/* -------------------------------------- */}

              <button
                className="custom-button"
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </button>
            </form>
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

export default AddCategoryModal;
