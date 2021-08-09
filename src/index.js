import React from "react";
import ReactDOM from "react-dom";
// this will not work it wants the value of color as red as a javascript object
// ReactDOM.render(<h1 style="color:red">Hello World!</h1>, document.getElementById("root"));

// {color:"red"}

// ReactDOM.render(<h1 style={{color:"red"}}>Hi</h1>,
// document.getElementById("root"));

// in order to use the css properties inside js object they have to be camelcased

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "10px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hi</h1>,
  document.getElementById("root")
);
