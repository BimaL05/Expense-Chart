import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const list_items = [
  { id:"id1", title: "Furniture", amount: "2000", date: new Date(2023, 7, 15) },
  { id:"id2", title: "iPad", amount: "25000", date: new Date(2023, 7, 20) },
  { id:"id3", title: "Insurance", amount: "4000", date: new Date(2023, 2, 10) },
  { id:"id4", title: "Desk", amount: "2000", date: new Date(2021, 6, 20) },
  { id:"id5", title: "Airpods", amount: "20000", date: new Date(2021, 1, 15) },
  { id:"id6", title: "Sofa", amount: "4000", date: new Date(2019, 3, 3) },
];

function App() {

  const[expenses, setExpenses] = useState(list_items);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
