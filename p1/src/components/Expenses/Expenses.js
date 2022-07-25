import "./css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (propsz) => {

  const [filterYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
   <div>
     <Card className="expenses">
     <ExpenseFilter onChangefilter={filterChangeHandler} selected={filterYear}/>
      <ExpenseItem
        title={propsz.items[0].title}
        datex={propsz.items[0].date}
        price={propsz.items[0].price}>

      </ExpenseItem>

      <ExpenseItem
        title={propsz.items[1].title}
        datex={propsz.items[1].date}
        price={propsz.items[1].price}/>
        
      <ExpenseItem
        title={propsz.items[2].title}
        datex={propsz.items[2].date}
        price={propsz.items[2].price}/>
    </Card>
   </div>
  );
}

export default Expenses;
