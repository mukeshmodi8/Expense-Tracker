import React, { useState } from "react";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const newTransaction = {
      id: transactions.length + 1,
      text,
      amount: parseFloat(amount),
    };
    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const getBalance = () => transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">💰 Expense Tracker 💰</h2>
      <h3 className="text-lg font-semibold">Balance: ₹{getBalance()}</h3>
      
      <form onSubmit={addTransaction} className="mt-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Description"
          className="border p-2 w-full rounded mb-2"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount (+Income, -Expense)"
          className="border ms-3 p-2 w-full rounded mb-2"
        />
        
        <button className="bg-blue-500 text-dark px-4 py-2 ms-3 rounded w-full">
          Add Transaction
        </button>
      </form>

      <ul className="mt-4">
        {transactions.map((txn) => (
          <li
            key={txn.id}
            className={`flex justify-between p-2 border-b ${txn.amount < 0 ? "text-red-500" : "text-green-500"}`}
          >
            {txn.text} <span>₹{txn.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
