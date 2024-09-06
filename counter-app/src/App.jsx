import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Function to add value
  const addValue = () => {
    // count value should not be more than 20
    if (count < 20) {
      setCount(count + 1);
    }
  };

  // Function to remove value
  const removeValue = () => {
    // count value should not be negative number
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter App</h2>
      <p>Counter Value : {count}</p>
      <br />
      <button onClick={addValue}>Add Value</button> &nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;
