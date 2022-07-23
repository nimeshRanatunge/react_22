import './css/Expensedate.css';

function ExpenseDate(propsy) {
  const month = propsy.datey.toLocaleString("en-US", { month: "long" });
  const day = propsy.datey.toLocaleString("en-US", { day: "2-digit" });
  const year = propsy.datey.getFullYear();

  
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{day}</div>
        <div className='expense-date__day'>k{year}</div>
      </div>
  );
}

export default ExpenseDate;
