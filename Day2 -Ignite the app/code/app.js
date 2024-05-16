var heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Value"),
        React.createElement("h2", {}, "Value")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Value"),
        React.createElement("h2", {}, "Value")
    ])
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);