import ExpenseForm from "./ExpenseForm";

const ExpenseAdder = (props)=> {

    const xyz =(incomingData)=> {
        props.sendToApp(incomingData);
    };

    

  return (
    <div>
        <ExpenseForm sendToExpenseAdder={xyz}></ExpenseForm>
    </div>
  );
};

export default ExpenseAdder;