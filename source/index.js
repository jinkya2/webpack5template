import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./common/usersAPI";
import "./style.css";
import "./style.scss";

console.log("Welcome Webpack!");

const fancyFunc = () => {
    return [1, 2];
  };
  
const [a, b] = fancyFunc();

getUsers().then(json => console.log(json));

function App() {
    const [state, setState] = useState("CLICK ME");
    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));