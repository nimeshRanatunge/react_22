import "./css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {

  const [filterYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
   <div>
     <Card className="expenses">
     <ExpenseFilter onChangefilter={filterChangeHandler} selected={filterYear}/>
     {
      props.items.map((expense)=>(
        <ExpenseItem
        title={expense.title}
        datex={expense.date}
        price={expense.price}>
      </ExpenseItem>
      ))
     }
      
    </Card>
   </div>
  );
}

export default Expenses;
