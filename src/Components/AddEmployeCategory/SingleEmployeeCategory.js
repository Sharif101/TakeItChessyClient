import { FaTrash } from "react-icons/fa";

const SingleEmployeeCategory = ({ data }) => {
  return (
    <div>
      <div className="px-3 mt-8 mb-8 flex justify-between items-center">
        <h1 className="w-96">{data.employeeCategoryName}</h1>

        <h1>
          {" "}
          <div>
            <button>
              <FaTrash />
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default SingleEmployeeCategory;
