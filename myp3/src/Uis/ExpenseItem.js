import DateDivider from './DateDivider';
import '../css/ExpenseItem.css';
import '../css/UniversalCss.css';

const ExpenseItem = (props)=> {

    const title = props.title;
    const cost = props.cost;
    return (
        <div className='flex items'>
            <DateDivider date={props.date}></DateDivider>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <h2>USD {cost}</h2>
        </div>
    );
}

export default ExpenseItem;