import { createContext, useReducer } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter(
          (item) => action.payload._id === item._id
        );
        if (tempstate.length > 0) {
          alert("All Ready Add to Cart");
          return state;
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case "INCREASE":
        const tempstate1 = state.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;
      case "DECREASE":
        const tempstate2 = state.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "REMOVE":
        const tempstate3 = state.filter(
          (item) => item._id !== action.payload._id
        );
        return tempstate3;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return <Cart.Provider value={info}>{children}</Cart.Provider>;
};

export default Context;
