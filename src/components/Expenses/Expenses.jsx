import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>Nenalezeny žádné záznamy.</p>;

  if (expensesByYear.length > 0) {
    expensesContent = expensesByYear.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
       
        <ExpensesFilter onChangeDropFilter={changeFilterHandler} />
        <ExpensesChart expenses={expensesByYear} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
