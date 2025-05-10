import { useState } from "react";

function init() {
  console.log("init was executed!");
  return Math.floor(Math.random() * 100);
}

export default function Counter() {
  let [count, setCount] = useState(init);

  let incCount = () => {
    setCount(count + 2);
  };

  return (
    <>
      <p>Counter Value : {count} </p>

      <button onClick={incCount}>Click Counter</button>
    </>
  );
}
