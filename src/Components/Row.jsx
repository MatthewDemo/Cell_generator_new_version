import React, { useEffect, useRef } from "react";
import Cell from "./Cell";

function Row(props) {
  
  const sumRef = useRef();


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
        <Cell key={idx} sumRef={sumRef}/>
      ))}
      <td ref={sumRef} className="summa" />
    </tr>
  );
}
export default Row;
