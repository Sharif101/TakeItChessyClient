import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../../context/Context";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { isLogin } from "../../Utilities/auth";
import axios from "axios";

const CartModal = () => {
  const Globalstate = useContext(Cart);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const [user, setUser] = useState([]);
  let [table, setTable] = useState();
  let [orderby, setOrderby] = useState();
  let [ordersfoods, setOrderfoods] = useState();
  let [subtotal, setSubtotal] = useState();
  let [status, setStatus] = useState();

  const total = state.reduce((total, item) => {
    return total + item.foodprice * item.quantity;
  }, 0);

  useEffect(() => {
    setOrderfoods(state);
    setSubtotal(total);
    setStatus("Order");
  }, [state]);
  console.log(orderby);

  const authenticate = async () => {
    const loggedIn = await isLogin();
    if (loggedIn.auth) {
      setUser(loggedIn.data);
      setOrderby(user.name);
    }
  };
  useEffect(() => {
    authenticate();
  }, []);

  const alert = () => {
    toast.error("Remove from Cart");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!table) {
      toast.error("pleaase fill Table No");
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/orders",
        {
          table,
          orderby,
          ordersfoods,
          subtotal,
          status,
        },
        config
      );
      toast.success("created successfull");
      setTable(" ");
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Worng");
    }
  };

  return (
    <div className="text-left">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        View Cart
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="modal-title mb-4">Here is your Add to Cart Foods!</h3>
          <form action="" className="flex justify-between gap-10">
            <div className="w-9/12">
              {state.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex justify-between items-center  single-cart-pro"
                  >
                    <div className="cartImg">
                      <img src={item.foodpic} alt="" />
                    </div>
                    <div className="w-1/2 pl-4 foodname">
                      <p>{item.foodname}</p>
                      <small>{item.foodprice}</small>
                    </div>

                    <p className="flex items-center gap-5 w-50">
                      <SlArrowLeft
                        className="w-50"
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                            alert();
                          }
                        }}
                      />
                      {item.quantity}
                      <SlArrowRight
                        className="w-50"
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      />
                    </p>

                    <MdDelete
                      className="w-50 mr-5"
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item }, alert())
                      }
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-1/4 ">
              <h3 className="modal-title mb-4">Total Amount</h3>
              <div className="subtotal">
                {state.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="flex justify-between items-center pb-2"
                    >
                      <p className="w-40">{item.foodname}</p>
                      <p className="w-5">{item.quantity}</p>
                      <p>{item.foodprice * item.quantity} ৳</p>
                    </div>
                  );
                })}
                <hr />
                <div className="text-right flex mt-3">
                  <p>
                    <span className="mr-3">Subtotal :</span>
                    {total} ৳
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <input
                  type="text"
                  placeholder="Table No"
                  className="input input-bordered input-md w-full max-w-xs"
                  value={table}
                  onChange={(e) => setTable(e.target.value)}
                  required
                />
                <p className="emplyeInfo mt-5 mb-8">
                  Order by : <span>{user.name}</span>
                </p>
              </div>

              {/* -------------------------------------- */}
              <button
                className="custom-button w-full"
                type="submit"
                onClick={submitHandler}
                // isLoading={loading}
              >
                Order Now
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartModal;
