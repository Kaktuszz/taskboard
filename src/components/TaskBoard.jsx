import React from "react";
import classes from "./TaskBoard.module.css";
import CalendarBox from "./UI/CalendarBox";

const TaskBoard = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.board}>
        <CalendarBox />
      </div>
    </div>
  );
};

export default TaskBoard;
