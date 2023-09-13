import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCategoryModal = () => {
  const [categoryname, setCategoryname] = useState();
  const [categorypic, setCategorypic] = useState();
  const [loading, setLoading] = useState(false);

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
      // alert("created successfull");
      toast.success("Successfully Added!");
      // e.target.reset();
      setCategoryname("");

      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------------

  const postPicture = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      alert("please seleted image");
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Food-site");
      data.append("cloud_name", "dnvh5aa0j");
      fetch("https://api.cloudinary.com/v1_1/dnvh5aa0j/image/upload", {
        method: "Post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setCategorypic(data.url);
          console.log(data.url);
          setLoading(false);
        });
    } else {
      alert("Please seleted image");
    }
  };

  return (
    <div className="mx-3">
      <Toaster position="top-center" reverseOrder={false} />
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
            <div className="flex flex-col items-center inpt-form">
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
                onChange={(e) => postPicture(e.target.files[0])}
              />

              {/* -------------------------------------- */}

              <button
                className="custom-button w-9/12"
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn ">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddCategoryModal;
