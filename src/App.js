
import "./App.css";
import { useState } from "react";
// import ExpensesData from "./components/ExpensesData";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";



function App() {

  const expenses = [
    {
      id: 1,
      name: "House Rent",
      date: new Date(2021, 9, 12),
      amount: 3000,
    },
    {
      id: 2,
      name: "Electric Bill",
      date: new Date(2021, 9, 15),
      amount: 5000,
    },
    {
      id: 3,
      name: "Phone Bill",
      date: new Date(2021, 9, 19),
      amount: 536,
    },
    {
      id: 4,
      name: "Gas Bill",
      date: new Date(2021, 9, 13),
      amount: 1150,
    },
  ];
  

  const [exps,setExps]=useState(expenses);
  // communicating from parent to grandparent (newexpense.js to app.js)
  const addExpenseHandler = (expense)=>{
    console.log('in-app');
    console.log(expense);
    let newExps = [...exps];
  newExps.push(expense);
  console.log(newExps);
  setExps(newExps);
  }

  return (
    <div className="app">
      <h2 className="title">Let's get started</h2>
      <NewExpense onAddExpenseData={addExpenseHandler}/>
      <Expenses items={exps} />
    </div>
  );
}

export default App;
