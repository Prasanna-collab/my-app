import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
     // to store the data we are using state. By using setfalg value we collecting the data and stores.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
//to prevent the reloading while submiting the form.
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const SubmitHandler = (event)=>{
     event.preventDefault();
  
// to get the entered data in the form
  const expenseItems = {
     name: enteredTitle,
     amount: enteredAmount,
     date: new Date(enteredDate),
  };

  props.onSaveExpenseData(expenseItems);

  console.log(expenseItems); //to see the entered data in console panel. 
  setEnteredTitle("");
  setEnteredAmount("");
  setEnteredDate("");
};
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={AmountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2022-12-31" onChange={DateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
