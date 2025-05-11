import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  let Url = "https://official-joke-api.appspot.com/random_joke";

  let getJoke = async () => {
    let response = await fetch(Url);
    let data = await response.json();
    setJoke({ setup: data.setup, punchline: data.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(Url);
      let data = await response.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <>
      <h1>Jokes</h1>
      <h2>Setup : {joke.setup}</h2>
      <h2>Puchline : {joke.punchline}</h2>
      <button onClick={getJoke}>Get Joke</button>
    </>
  );
}
