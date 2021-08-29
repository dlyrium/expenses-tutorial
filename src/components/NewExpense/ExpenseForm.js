import { useState } from "react";

import "../../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleSetToday = () => {
    let today = new Date();

    const month = today.getMonth();
    const day = today.getDate().toLocaleString("en-US", { day: "2-digit" });
    const year = today.getFullYear();

    today = `${year}-${month}-${day}`;

    setEnteredDate(new Date(today));
  };

  const handleSetYesterday = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  const handleCancel = (e) => {
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.onToggleForm();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={handleDateChange} />
          <button onClick={handleSetToday}>Today</button>
          <button onClick={handleSetYesterday}>Yesterday</button>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
