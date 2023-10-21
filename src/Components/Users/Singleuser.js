import React, { useState } from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";
import UserPreviewModal from "../AllModals/UserPreviewModal";

const Singleuser = ({ d, handleDelete }) => {
  let { _id } = d;
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="p-2 mt-3 flex justify-between items-center items-center foodicons dashboardText">
        <h1 className="w-96 font-medium">{d.name}</h1>
        <h1 className="w-96  text-center">{d.email}</h1>
        <h1 className="w-96  text-center">{d.phoneNo}</h1>
        <h1 className="w-96 flex items-center justify-around text-center">
          <div>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              <FaEye />
            </button>
          </div>
          <div>
            <button onClick={() => handleDelete(_id)}>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>

      {/* ---------------------------- */}
      {modal && <UserPreviewModal setModal={setModal} _id={_id} />}
    </div>
  );
};

export default Singleuser;
