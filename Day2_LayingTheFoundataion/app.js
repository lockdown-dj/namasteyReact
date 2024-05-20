import React from "react";
import ReactDOM from "react-dom/client";

// const heading =  React.createElement("h1",{id:"heading"},"Hello From React");

const headingjsx = (<h1 id="heading">Hello from React using JSX</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingjsx);