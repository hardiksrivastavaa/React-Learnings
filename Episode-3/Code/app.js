import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "This is a heading"
);

const Title = () => <h1>This is title</h1>;

const JsxHeading = () => (
    <div>
        <h1 id="hardik">This is heading by JSX 1</h1>
        <h1 id="hardik">This is heading by JSX 2</h1>
        <h1 id="hardik">This is heading by JSX 3</h1>
        <h1 id="hardik">This is heading by JSX 4</h1>
        <Title />
        <h2>{9 + 3}</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
