import React, { useEffect, useRef } from "react";
import Cell from "./Cell";

function Row(props) {
  const sumRef = useRef();
  const onMouseOverSum = (e) => {
    let cellsInRow = e.target.parentNode.children;
    for (let i = 0; i < cellsInRow.length -1; i++) {
      cellsInRow[i].setAttribute('style', `background-color:#008B8B; heigth: ${2000 / Number(cellsInRow[i].innerHTML)}% `)
    }
  }

  useEffect(() => {
    let cells = Array.from(sumRef.current.parentNode.children);

    let sum = 0;
    for (let i = 0; i < cells.length - 1; i++) {
      sum += Number(cells[i].innerHTML);
    }
    sumRef.current.innerHTML = sum;
  });

  return (
    <tr>
      {props.columns.map((item, idx) => (
        <Cell
          key={idx}
          sumRef={sumRef}
          arrayOfAllCells={props.arrayOfAllCells}
        />
      ))}
      <td ref={sumRef} className="summa" onMouseOver={onMouseOverSum}/>
    </tr>
  );
}
export default Row;
