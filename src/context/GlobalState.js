/** @format */

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Set Initial State
const initialState = {
  transactions: [
    { id: 1, name: "Flower", amount: -20 },
    { id: 2, name: "Salary", amount: 300 },
    { id: 3, name: "Book", amount: -10 },
    { id: 4, name: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// create global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS FOR GLOBAL STATE
  // delete transaction Action
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // Add Transaction Action
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
