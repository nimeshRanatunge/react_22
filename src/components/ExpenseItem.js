import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>23 March 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insuarance</h2>
        <h2>Car Insuarance</h2>
      </div>
      <div className='expense-item__price'>$266.76</div>
    </div>
  );
}

export default ExpenseItem;
