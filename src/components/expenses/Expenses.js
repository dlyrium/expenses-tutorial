import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../common/Card";
import "../../css/Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const handleFilterExpenses = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let chart = "";
  if (filteredExpenses.length > 0)
    chart = <ExpensesChart expenses={filteredExpenses} />;

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterExpenses={handleFilterExpenses}
      />
      {chart}
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
