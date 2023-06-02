import React from "react";
import classes from "./CalendarBox.module.css";
import TaskCont from "./TaskCont";

const CalendarBox = (props) => {
  // if/else statements... everything is clear
  if(props.daysShow > 14){
    return (
      <div className={classes.box} id={props.id}>
        {props.children}
      </div>
    );
  }else if(props.daysShow > 7){
    return (
      <div className={classes.mid_box} id={props.id}>
        {props.children}
      </div>
    );
  }
  return (
    <div className={classes.wildbox} id={props.id}>
      {props.children}
    </div>
  );
};

export default CalendarBox;