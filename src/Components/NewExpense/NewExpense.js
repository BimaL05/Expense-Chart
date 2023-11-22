import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [cancel, setCancel] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //spread operator
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setCancel(false);
  };

  const AddExpenseHandler = () => {
    setCancel(true);
  };
  const CloseCancelHandler = () => {
    setCancel(false);
  };

  return (
    <div className="new-expense">
      {!cancel && <button onClick={AddExpenseHandler}>Add New Expense</button>}
      {cancel && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={CloseCancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
