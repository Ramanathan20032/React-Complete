import React from "react";
import ReactDOM from "react-dom";

// [jsx] -->(transpiled into React.createElement) --> [React.createElement] --> (creates rectElement) --> [react element(object)] --> (render on to) --> [HTML element] 

// react Element
const heading = <h1 id="heading">Hello World from React Js !</h1>

// react Componenet - Js function which returns a react Element (jsx)
const headingComponent = () => {
    return <h1>Hello World from React Componenet</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingComponent);