import Row from "./Row";
import React, { useEffect, useRef } from "react";

function Table(props) {
  const averRef = useRef();
  const trRef = useRef();


  useEffect(() => {
    let allRows = Array.from(averRef.current.children); //Массив всех рядков, включая последний Average    
    let rowLength = Array.from(allRows[0].children).length -1
    let sumOfEachColumn = Array(rowLength).fill(0);

    for (let i = 0; i < allRows.length - 1; i++) {
      let currentRow = Array.from(allRows[i].children);
      for (let k = 0; k < currentRow.length - 1; k++) {
        sumOfEachColumn[k] += +currentRow[k].innerHTML;
      }
    }
    let eachAverage = Array.from(trRef.current.children)
    eachAverage.forEach((element, index) => {
      element.innerHTML = Math.floor(sumOfEachColumn[index] / (allRows.length - 1))
    })
  });

  return (
    <table ref={averRef}>
      {props.rows.map((item, idx) => (
        <Row
          key={idx}
          columns={props.columns}
          rows={props.rows}
          arrayOfAllCells={props.arrayOfAllCells}
        />
      ))}
      <tfoot className="average">
        <tr ref={trRef}>
          {props.columns.map((item, idx) => (
            <td key={idx} />
          ))}
        </tr>
      </tfoot>
    </table>
  );
} 

export default Table;
