import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesArr = [
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

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    //jsx by react team
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expensesArr}/> 
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