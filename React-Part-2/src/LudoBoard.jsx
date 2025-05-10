import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

  function clickBlue() {
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  }
  function clickRed() {
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  }
  function clickGreen() {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  }
  function clickYellow() {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  }

  return (
    <>
      <div>
        <p>Blue Dice : {moves.blue} </p>
        <button onClick={clickBlue} style={{background: "blue"}}>+1</button>
      </div>
      <div>
        <p>Red Dice : {moves.red} </p>
        <button onClick={clickRed} style={{background: "red"}}>+1</button>
      </div>
      <div>
        <p>Yellow Dice : {moves.yellow} </p>
        <button onClick={clickYellow} style={{background: "yellow", color: "black"}}>+1</button>
      </div>
      <div>
        <p>Green Dice : {moves.green} </p>
        <button onClick={clickGreen} style={{background: "green"}}>+1</button>
      </div>
    </>
  );
}
