import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIsLike] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toogleLike = () => {
    setClicks((clicks) => {
      return clicks + 1;
    });

    setIsLike((isLike) => {
      return !isLike;
    });
  };

  return (
    <>
      <h2>Clicks : {clicks}</h2>
      <h1 onClick={toogleLike}>
        {isLike == true ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
    </>
  );
}
