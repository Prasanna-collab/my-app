import "./ExpensesData.css";
import ExpenseDate from "./ExpensesDate";
import {useState} from "react";

function ExpensesData(props) {
  const[title,setTitle] = useState(props.name)
  const eventHandler = ()=>{
    setTitle('Changed!!') ;
  }
  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}

      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={eventHandler}>Change Item</button>
    </div>
  );
}

export default ExpensesData;
