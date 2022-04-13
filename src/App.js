import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  {
    id: "e1",
    title: "penzijní spoření",
    amount: 300,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Granule pro psa", amount: 1200, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Pojištění vozu",
    amount: 13700,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Monitor",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
