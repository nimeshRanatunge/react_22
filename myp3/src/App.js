import ExpenseAdder from "./Uis/ExpenseAdder";
import ExpenseShow from "./Uis/ExpenseShow";

const App = () => {
  const detailArray = [
    {
      id: 1,
      title: "Car Insuarance",
      date: new Date("2022,2,3"),
      cost: 100,
    },
    {
      id: 2,
      title: "Electricity",
      date: new Date("2022,1,31"),
      cost: 150,
    },
    {
      id: 3,
      title: "Foods",
      date: new Date("2022,3,5"),
      cost: 170,
    },
    {
      id: 4,
      title: "Water Bills",
      date: new Date("2022,3,6"),
      cost: 180,
    },
  ];

  return (
    
      <div>
        <ExpenseAdder></ExpenseAdder>
        <ExpenseShow details={detailArray}></ExpenseShow>
      </div>
    
  );
};

export default App;
