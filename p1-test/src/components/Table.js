import ItemRow from "./Item_row";

function Table(props) {
  return (
    <div>
      <ItemRow date={props.item[0].date} item_name={props.item[0].item_name} price={props.item[0].price}></ItemRow>
      <ItemRow date={props.item[1].date} item_name={props.item[1].item_name} price={props.item[1].price}></ItemRow>
      <ItemRow date={props.item[2].date} item_name={props.item[2].item_name} price={props.item[2].price}></ItemRow>
    </div>
  );
}

export default Table;
