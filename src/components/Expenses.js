import "./css/Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(propsz) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={propsz.items[0].title}
        datex={propsz.items[0].date}
        price={propsz.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        title={propsz.items[1].title}
        datex={propsz.items[1].date}
        price={propsz.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        title={propsz.items[2].title}
        datex={propsz.items[2].date}
        price={propsz.items[2].price}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
