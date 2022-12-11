import ExpensesData from "./ExpensesData";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {/* <ExpensesData
        id={props.items[0].id}
        name={props.items[0].name}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpensesData
        id={props.items[1].id}
        name={props.items[1].name}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpensesData
        id={props.items[2].id}
        name={props.items[2].name}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpensesData
        id={props.items[3].id}
        name={props.items[3].name}
        date={props.items [3].date}
        amount={props.items[3].amount}
      /> */}
      {props.items.map(item=> (<ExpensesData
        id={item.id}
        name={item.name}
        amount={item.amount}
        date={item.date}/>)
        )}
    </Card>
  );
}
export default Expenses;
