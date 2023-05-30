import React from "react";
import classes from "./CalendarBox.module.css";
import TaskCont from "./TaskCont";

const CalendarBox = (props) => {
  return (
    <div className={classes.box} id={props.id}>
      {props.children}
    </div>
  );
};

export default CalendarBox;