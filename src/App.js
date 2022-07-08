import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      title: 'Car Insuarance',
      date : new Date('2022,3,22'),
      price: 233
    },
    {
      title: 'Food Cost',
      date : new Date('2022,8,22'),
      price: 244
    },
    {
      title: 'Rent fees',
      date : new Date('2022,10,22'),
      price: 465
    }
  ];

  return (
    //jsx by react team
    <div>
      <h2>Let's <span id='x'>get</span> started!</h2>

      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].price}></ExpenseItem>
        <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].price}></ExpenseItem>
   
    </div>
  );
}

export default App;
