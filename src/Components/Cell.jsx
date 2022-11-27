import { v4 as uuidv4 } from "uuid";

function Cell(props) {
  let randomNumber = Math.floor(100 + Math.random() * (999 + 1 - 100));
  let objCell = { id: uuidv4(), amount: randomNumber };
  const onPlus = (event) => {
    event.target.innerHTML++;
    props.sumRef.current.innerHTML++
  };

  props.arrayOfAllCells.push(objCell.amount)

  return <td onClick={onPlus}>{objCell.amount}</td>;
}
 
export default Cell;
