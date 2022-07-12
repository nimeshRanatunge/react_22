import Expenses from "./components/Expenses";

function App() {
  const expensesArr = [
    {
      title: "Car Insuarance",
      date: new Date("2022,3,22"),
      price: 233,
    },
    {
      title: "Food Cost",
      date: new Date("2022,8,22"),
      price: 243,
    },
    {
      title: "Rent fees",
      date: new Date("2022,10,22"),
      price: 465,
    }
  ];

  return (
    //jsx by react team
    <div>
      <Expenses items={expensesArr}/> 
    </div>
    //expenses main bar

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