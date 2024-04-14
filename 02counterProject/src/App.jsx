import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    console.log("Button Clicked", counter);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button>Remove Value</button>
    </>
  );
}

export default App;
