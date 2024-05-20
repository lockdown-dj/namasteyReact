// let heading = React.createElement("h1",{"id":"heading"},"Hello World React!");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

let format = React.createElement(
    "div", 
    { id: "parent" },
    [
        React.createElement(
        "div", 
        { id: "child" }, 
        [
            React.createElement(
                "h1", 
                { id: "head1" }, 
                "Hello this is a H1 tag!!"
            ), 
            React.createElement(
                "h2", 
                { id: "head2" }, 
                "Hello this is a H2 tag!!")]
            ), 
        React.createElement(
            "div", 
            { id: "child2" }, 
            [
                React.createElement(
                    "h1", 
                    { id: "head1" }, 
                    "Hello this is a H1 tag!!"
                ), 
                React.createElement(
                    "h2", 
                    { id: "head2" }, 
                    "Hello this is a H2 tag!!")]
                ),
        ]
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(format);