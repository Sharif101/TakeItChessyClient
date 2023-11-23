import React, { useEffect, useState } from "react";
import { isLogin } from "../../Utilities/auth";
import { HiShoppingCart } from "react-icons/hi";

const SingleOrderFood = ({ data }) => {
  const [user, setUser] = useState([]);
  const authenticate = async () => {
    const loggedIn = await isLogin();

    if (loggedIn.auth) {
      setUser(loggedIn.data);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

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
          <div className="flex justify-between items-center">
            <div>
              <h3>Price: {foodprice}tk</h3>
              <p>
                {foodstatus === "In Stoke" ? (
                  <span className="blue">{foodstatus}</span>
                ) : (
                  <span className="red">{foodstatus}</span>
                )}
              </p>
            </div>
            <div>
              {user?.role === "admin" || user?.role === "employee" ? (
                <button className="cart-button flex items-center">
                  Add to Cart <HiShoppingCart className="ml-1" />
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderFood;
