import React from "react";
import ReactDOM from "react-dom/client";

// [jsx] -->(transpiled into React.createElement) --> [React.createElement] --> (creates rectElement) --> [react element(object)] --> (render on to) --> [HTML element]

const p = <p>Hi, </p>;

// react Element
const heading = (
  <h1 id="heading">
    {p}
    Hello World from React Element !
  </h1>
);

// react Componenet - Js function which returns a react Element (jsx)
// functional component - first letter should start with the uppercase.
const HeadingComponent = () => {
  return <h1 className="component">Hello World from React Componenet</h1>;
};

const number = 1000;
const HeadingComponent2 = () => (
  <div id="container">
    {1234 + 431}
    <h1>{number}</h1>      
    {heading}
    
    {HeadingComponent()} 
    <HeadingComponent></HeadingComponent>
    <HeadingComponent />
    <h1 className="component1">Hello World from React Componenet2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* {heading} */}
    {/* <HeadingComponent /> */}
    <HeadingComponent2 />
  </>
);
