import Date_component from "./Date_component";

function ItemRow(props) {
    return (
        <div>
            <Date_component date = {props.date}></Date_component>
            <div>{props.item_name}</div>
            <div>LKR {props.price}</div>
        </div>
    );
}

export default ItemRow;