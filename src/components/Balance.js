/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // get amounts
  const amounts = transactions.map((transaction) => transaction.amount);
  //Get total value
  const total = amounts.reduce((acc, item) => ((acc += item), 0).toFixed(2));
  console.log(total);
  return (
    <>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

// export { income, expenses };
export default Balance;
