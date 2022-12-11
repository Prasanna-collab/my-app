import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseItems = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseItems);
  };
 
  return (
    <div className="new-expense ">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
