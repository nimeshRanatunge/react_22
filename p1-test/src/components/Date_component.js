function Date_component(props) {

const year = props.date.getFullYear();
const month = props.date.toLocaleString("en-US", {month: "long"});
const day = props.date.toLocaleString("en-US", {day: "2-digit"});

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default Date_component;