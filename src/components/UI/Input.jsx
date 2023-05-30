import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    
  if (props.type === "number") {
    return <input type="number" className={classes.nums} value={props.value} onChange={props.onChange}/>;
  }
  if (props.type === "text") {
    return <input type="text" className={classes.text} value={props.value} onChange={props.onChange} required />;
  }
};

export default Input;
