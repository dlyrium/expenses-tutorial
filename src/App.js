import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "01",
    date: new Date(2021, 8, 27),
    title: "React Course",
    amount: 20.0,
  },
  {
    id: "02",
    date: new Date(2021, 7, 26),
    title: "Subway Salad",
    amount: 5.68,
  },
  {
    id: "03",
    date: new Date(2021, 8, 26),
    title: "Disney+ Subscription",
    amount: 17.0,
  },
  {
    id: "04",
    date: new Date(2020, 3, 25),
    title: "Food",
    amount: 45.04,
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
