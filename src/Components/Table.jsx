import Row from "./Row";
import React, { useEffect, useRef } from "react";

function Table(props) {
  const averRef = useRef();
  
  useEffect(() => {
    let allRows = Array.from(averRef.current.parentNode.children);
    console.log('ALLROWS', allRows)
    let firstColumnSum = 0;
    for (let i = 0; i < allRows.length - 1; i++) {
      // console.log("tits", Array.from(allRows[i].parentNode.children));
      console.log('new', allRows[i])
      firstColumnSum += Number(allRows[i].firstChild.innerHTML);
    }
    console.log("Average of first column is", firstColumnSum);
  });

  return (
    <table>
      {props.rows.map((item, idx) => (
        <Row key={idx} columns={props.columns} rows={props.rows} />
      ))}
      <tfoot ref={averRef} className="average">
        <tr>
          {props.columns.map((item, idx) => (
            <td key={idx}>Average</td>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
