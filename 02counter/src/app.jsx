import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addvalue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1;
    if (counter <= 19) setCounter(counter + 1);
    // console.log("Clicked", counter);
  }; //function

  const removevalue = () => {
    if (counter >= 1) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}
