function Inputs(props) {
    
  return (
    <>
      <input
        type="number"
        placeholder="Rows"
        onChange={(e) => props.makeRows(e.target.value)}
      />
      <input
        type="number"
        placeholder="Columns"
        onChange={(e) => props.makeColumns(e.target.value)}
      />
    </>
  );
}

export default Inputs
