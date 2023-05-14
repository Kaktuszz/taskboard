import React from "react";
import classes from "./CalendarBox.module.css";

const CalendarBox = (props) => {
  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return (
    <>
      {[...Array(7)].map((_, index) => {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + index);
        const day = date.getDay();
        return (
          <div className={classes.box} key={index}>
            <h4>{weekdays[day]}</h4>
            <h1>{date.getDate()}</h1>
          </div>
        );
      })}
    </>
  );
};

export default CalendarBox;
