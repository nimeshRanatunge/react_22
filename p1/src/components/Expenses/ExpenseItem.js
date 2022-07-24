import Card from '../UI/Card';
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import {useState} from 'react';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

    const clickHandler = ()=>{
      setTitle('New!!');
        };

  return (
    // Using classes for styling purpose
    <Card className='expense-item'>

      {/* 1 */}
      <ExpenseDate datey={props.datex}></ExpenseDate>

      {/* 2 */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>

      {/* 3 */}
      <div className='expense-item__price'>LKR {props.price}</div>

      <button onClick = {clickHandler}>new</button>
    </Card>
  );
}

export default ExpenseItem;

//props - share data between components using props, allow components reusable