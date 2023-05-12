import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    
  if (props.type === "number") {
    return <input type="number" className={classes.nums} />;
  }
  if (props.type === "text") {
    return <input type="text" className={classes.text} />;
  }
};

export default Input;
