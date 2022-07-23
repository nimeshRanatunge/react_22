import Table from "./components/Table";

const details = [
  {
    date: new Date("2021,01,01"),
    item_name: "Car Insuarance",
    price: 4525
  },
  {
    date: new Date("2022,02,01"),
    item_name: "Van Insuarance",
    price: 45455
  },
  {
    date: new Date("2023,03,01"),
    item_name: "Bus Insuarance",
    price: 44555
  }
];

function App() {
  return (
    <div>
        <Table item = {details}></Table>
    </div>
  );
}

export default App;
