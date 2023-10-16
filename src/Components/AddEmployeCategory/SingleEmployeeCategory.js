import { FaTrash } from "react-icons/fa";

const SingleEmployeeCategory = ({ data, handledeleteid }) => {
  let { _id } = data;
  return (
    <div>
      <div className="px-3 mt-8 mb-8 flex justify-between items-center dashboardText">
        <h1 className="w-96 font-medium">{data.employeeCategoryName}</h1>

        <h1>
          {" "}
          <div>
            <button onClick={() => handledeleteid(_id)}>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default SingleEmployeeCategory;
