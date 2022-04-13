import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "01", value: 0 },
    { label: "02", value: 0 },
    { label: "03", value: 0 },
    { label: "04", value: 0 },
    { label: "05", value: 0 },
    { label: "06", value: 0 },
    { label: "07", value: 0 },
    { label: "08", value: 0 },
    { label: "09", value: 0 },
    { label: "10", value: 0 },
    { label: "11", value: 0 },
    { label: "12", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
