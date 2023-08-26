import React, { useEffect, useState } from "react";

const SingleOrderFood = ({ data }) => {
  let { foodname, fooddescriptions, foodprice, foodstatus, foodpic } = data;
  const [descriptionLength, setDescriptionLength] = useState(true);

  //   ----------------------------
  useEffect(() => {
    if (fooddescriptions.length > 100) {
      setDescriptionLength(false);
    } else {
      setDescriptionLength(true);
    }
  }, [fooddescriptions]);
  // ---------------------------------------
  const descriptionsCharCount = () => {
    if (fooddescriptions.length > 100) {
      setDescriptionLength(!descriptionLength);
    }
  };

  return (
    <div>
      <div className="single-food">
        <div className="image">
          <img className="rounded-t-2xl" src={foodpic} alt="" />
        </div>
        <div className="text">
          <h1>{foodname}</h1>
          <p onClick={descriptionsCharCount}>
            {descriptionLength
              ? fooddescriptions
              : `${fooddescriptions.slice(0, 100)} ...see more`}
          </p>
          <h3>Price: {foodprice}tk</h3>
          <span>{foodstatus}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderFood;
