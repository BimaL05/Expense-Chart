import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((list) => (
      <ExpenseItem
        key={list.id}
        title={list.title}
        amount={list.amount}
        date={list.date}
      />
      ))}
    </ul>
  );
}

export default ExpensesList;
