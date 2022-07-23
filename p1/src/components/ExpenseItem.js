import Card from './Card';
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(propsx) {

  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  // const year = props.date.getFullYear();

  return (
    <Card className='expense-item'>
      {/* <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> */}

    <ExpenseDate datey={propsx.datex}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{propsx.title}</h2>
        
      </div>
      <div className='expense-item__price'>LKR {propsx.price}</div>
    </Card>
  );
}

export default ExpenseItem;

//props - share data between components using props, allow components reusable