import '../css/UniversalCss.css';

const DateDivider =(props)=> {

    const month = props.date.toLocaleString("en-US", {month: "long"});
    const date = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
        
        <div className='flexcol'>
            <h2>{month}</h2>
            <h2>{date}</h2>
            <h2>{year}</h2>
        </div>
    );    
}

export default DateDivider;