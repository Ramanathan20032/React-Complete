import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = <h1 id="heading">Hello World from React !</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)