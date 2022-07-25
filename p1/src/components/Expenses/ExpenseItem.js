import Card from '../UI/Card';
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  return (
    // Using classes for styling purpose
    <Card className='expense-item'>

      {/* 1 */}
      <ExpenseDate datey={props.datex}></ExpenseDate>

      {/* 2 */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>

      {/* 3 */}
      <div className='expense-item__price'>LKR {props.price}</div>

    </Card>
  );
}

export default ExpenseItem;

//props - share data between components using props, allow components reusable