import { useState, useEffect } from "react";

export default function Counter() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  let incCount1 = () => {
    setCount1((currCount) => currCount + 1);
  };

  let incCount2 = () => {
    setCount2((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("----Use Effect----");
  }, [count1]);

  return (
    <>
      <div>
        <h1>Counter 1</h1>
        <p>Count : {count1}</p>
        <button onClick={incCount1}>Count</button>
      </div>
      <div>
        <h1>Counter 2</h1>
        <p>Count : {count2}</p>
        <button onClick={incCount2}>Count</button>
      </div>
    </>
  );
}
