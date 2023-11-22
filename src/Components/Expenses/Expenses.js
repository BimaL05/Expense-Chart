import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  //props.items === Array
  //print Filter wise Items
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={year}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        /> */}
        
      </Card>
    </div>
  );
}

export default Expenses;
