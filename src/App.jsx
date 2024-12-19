import { useEffect, useState } from "react";
import Test1 from "./Components/Test1";
import Test2 from "./Components/Test2";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log(count);
    console.log(`Clicked ${count} times already SmartAss!!`);

    return () => {
      console.log(`Clicked ${count} times already SmartAss!!`);
    };
  }, [count]);
  return (
    <>
      <h1>A Basic Counter : {count}</h1>
      <button
        className="button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <button
        className="button"
        type="button"
        onClick={() => setCount(count - 1)}
      >
        Decrease Count
      </button>
      <button className="button" type="button" onClick={() => setCount(0)}>
        Reset Count
      </button>
      {isVisible ? <Test1 /> : <Test2 />}
      <button id="b2" type="button" onClick={() => setIsVisible(!isVisible)}>
        Try Me!!!
      </button>
    </>
  );
}

export default App;
