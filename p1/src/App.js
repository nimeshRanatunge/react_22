import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Insuarance",
    date: new Date("2022,3,22"),
    price: 233,
  },
  {
    id: 2,
    title: "Food Cost",
    date: new Date("2022,8,22"),
    price: 243,
  },
  {
    id: 3,
    title: "Rent payment",
    date: new Date("2022,10,22"),
    price: 465,
  }
];

const App = () => {
 
  const[expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prev_expenses)=>{
      return([expense, ...expenses]);
    });
  };

  return (
    //jsx by react team
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> 
    </div>
    
  );
}

export default App;
/**
 * We use props in React to pass data from one component
 *  to another (from a parent component to a child 
 * component(s)). Props is just a shorter way of saying 
 * properties. They are useful when you want the flow of 
 * data in your app to be dynamic.
 */