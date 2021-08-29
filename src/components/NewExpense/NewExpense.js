import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "../../css/NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    handleToggleForm();
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onToggleForm={handleToggleForm}
        />
      </div>
    );
  }

  return (
    <div className="new-expense button">
      <button onClick={handleToggleForm}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
