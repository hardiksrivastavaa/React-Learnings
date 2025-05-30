const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("p", { id: "para1" }, "hi I am Para 1"),
        React.createElement("p", { id: "para2" }, "hi I am Para 2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("p", { id: "para1" }, "hi I am Para 3"),
        React.createElement("p", { id: "para2" }, "hi I am Para 4"),
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
