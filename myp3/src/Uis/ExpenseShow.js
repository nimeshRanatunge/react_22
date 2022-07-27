import YearPicker from "./YearPicker";
import ExpenseItem from "./ExpenseItem";
import '../css/UniversalCss.css';

const ExpenseShow = (props)=> {
    return (
        <div className="container">
            <YearPicker></YearPicker>
            <ExpenseItem title={props.details[0].title} date={props.details[0].date} cost={props.details[0].cost}></ExpenseItem>
            <ExpenseItem title={props.details[1].title} date={props.details[1].date} cost={props.details[1].cost}></ExpenseItem>
            <ExpenseItem title={props.details[2].title} date={props.details[2].date} cost={props.details[2].cost}></ExpenseItem>
            <ExpenseItem title={props.details[3].title} date={props.details[3].date} cost={props.details[3].cost}></ExpenseItem>
        </div>
    );
};

export default ExpenseShow;