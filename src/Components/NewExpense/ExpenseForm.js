import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredDate, setEnteredDate] = useState();

  //Binding into ONE STATE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return{...prevState, enteredTitle:event.target.value}
    // })
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return{...prevState, enteredAmount:event.target.value}
    // })
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return{...prevState, enteredDate:event.target.value}
    // })
  };

  //Shared Handler i.e. only ONE HANDLER
  // const inputChangeHandler = (identifier, value) => {
  //   if(identifier === 'title')
  //     setEnteredTitle(value);
  //   else if(identifier === 'amount')
  //     setEnteredAmount(value);
  //   else
  //     setEnteredDate(value);
  // };

  const submitHandler = (event) => {
    event.preventDefault(); //request is not sent to the server to prevent reloading the page
    
    //storing the entires of the form
    const expenseData={
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    //Empty the input field after submitting
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    
    // console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/*Shared Handler*/ 
          /* <input type="text" 
              onChange={ (event)=>inputChangeHandler('title', event.target.value) }/> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" value={enteredAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2023-12-31" value={enteredDate} onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;