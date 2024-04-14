import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    setCounter(counter + 1);
    console.log("Button Clicked", counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Button Clicked", counter);
  };
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
