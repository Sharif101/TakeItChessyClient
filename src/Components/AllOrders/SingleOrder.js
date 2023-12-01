import React, { useState } from "react";
import { FaEye, FaTrash, FaPen } from "react-icons/fa";
import OrderPreview from "../AllModals/OrderPreview";

const SingleOrder = ({ d, handleDelete }) => {
  let { _id } = d;
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="p-2 mt-3 flex justify-between items-center items-center foodicons dashboardText">
        <h1 className="w-96 font-medium">{d.orderby}</h1>
        <h1 className="w-96">{d.table}</h1>
        <h1 className="w-96">{d.subtotal}</h1>
        <h1 className="w-96 order">{d.status}</h1>
        <h1 className="w-96 flex items-center  justify-between text-center">
          <div>
            <button>
              <FaPen />
            </button>
          </div>
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
      {modal && <OrderPreview setModal={setModal} _id={_id} />}
    </div>
  );
};

export default SingleOrder;
