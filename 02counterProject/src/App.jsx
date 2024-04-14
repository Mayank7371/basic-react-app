import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Button Clicked", counter);
  };
  if (counter >= 20) {
    counter = 0;
  } else if (counter <= 0) {
    counter = 0;
  }
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
