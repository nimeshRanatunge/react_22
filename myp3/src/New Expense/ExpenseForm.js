import { useState } from "react";

const ExpenseForm =(props)=> {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler =(event)=> {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler =(event)=> {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler =(event)=> {
        setEnteredDate(event.target.value);
    }

    const submitHandler =(event)=>{
        event.preventDefault();

        const dataPack = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };

        props.sendToExpenseAdder(dataPack);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;