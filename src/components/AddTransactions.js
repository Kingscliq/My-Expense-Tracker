/** @format */

import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { transactions, addTransaction } = useContext(GlobalContext);

  const handleNameChange = (e) => {
    setText(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      name: text,
      amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Transaction Name</label>
          <input
            type='text'
            value={text}
            onChange={handleNameChange}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={handleAmountChange}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactions;
