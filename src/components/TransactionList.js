/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => {
          return (
            <Transactions transaction={transaction} key={transaction.id} />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
