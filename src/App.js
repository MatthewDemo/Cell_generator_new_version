import React from "react";
import "./App.css";
import Table from "./Components/Table";
import Row from "./Components/Row";
import Cell from "./Components/Cell";
import Inputs from "./Components/Inputs";

function App() {
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  const makeRows = (number) => {
    const arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(<Row />);
    }
    setRows(arr);
  };

  const makeColumns = (number) => {
    const arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(<Cell />);
    }
    setColumns(arr);
  };

  return (
    <div className="App">
      <Inputs makeRows={makeRows} makeColumns={makeColumns}/>
      <Table rows={rows} columns={columns} />
    </div>
  );
}

export default App;
