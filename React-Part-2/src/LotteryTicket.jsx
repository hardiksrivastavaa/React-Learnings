import { useState } from "react";

function getRandomNum() {
  let num = Math.floor(Math.random() * 1000); // fixed
  return num;
}

export default function LotteryTicket() {
  const [lottery, setLottery] = useState(0);

  // Recalculate sum whenever 'lottery' changes
  const lotterySum = lottery
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);

  const isWinner = lotterySum === 15;

  const generateLotteryTicket = () => {
    setLottery(getRandomNum());
  };

  return (
    <>
      {isWinner && <p style={{ color: "yellow" }}>🎉 Congratulations!! 🎉</p>}

      <h1>Lottery Ticket Game</h1>
      <p>
        Your Ticket Number: <strong>{lottery}</strong>
      </p>
      <p>
        Digit Sum: <strong>{lotterySum}</strong>
      </p>

      <button onClick={generateLotteryTicket}>Generate Lottery Ticket</button>
    </>
  );
}
