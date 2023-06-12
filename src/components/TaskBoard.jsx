import React, { useEffect, useState } from "react";
import classes from "./TaskBoard.module.css";
import CalendarBox from "./CalendarBox";
import TaskCont from "./TaskCont";

const TaskBoard = (props) => {
  // weekdays and months constants
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    props.fetchTask();
  }, []);


  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  // date constants
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth() + 1;
  const daysInCurrMonth = getDaysInMonth(currYear, currMonth);

  return (
    <div className={props.daysShow > 14 ? classes.maincontainer : classes.wild_main_container}>
      <div className={classes.board}>
        {[...Array(props.daysShow)].map((_, index) => {
          const today = new Date(
            currYear,
            currMonth - 1,
            date.getDate() + index
          );
          const day = today.getDay();
          const month = today.getMonth();
            // filter for tasks (search a day, compare day and "gate")
          const filteredTasks = props.tasks.filter(
            (task) =>
              task.gate ===
              `${today.getFullYear()}${
                today.getMonth() + 1 < 10
                  ? `0${today.getMonth() + 1}`
                  : `${today.getMonth() + 1}`
              }${
                today.getDate() < 10
                  ? `0${today.getDate()}`
                  : `${today.getDate()}`
              }`
          );
          // counting calendar id with validation
          const calendarBoxId =
            today.getDate() <= daysInCurrMonth
              ? `${today.getFullYear()}${
                  today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : `${today.getMonth() + 1}`
                }${
                  today.getDate() < 10
                    ? `0${today.getDate()}`
                    : `${today.getDate()}`
                }`
              : `${today.getFullYear()}${
                  today.getMonth() + 2 < 10
                    ? `0${today.getMonth() + 2}`
                    : `${today.getMonth() + 2}`
                }${
                  today.getDate() - daysInCurrMonth < 10
                    ? `0${today.getDate() - daysInCurrMonth}`
                    : `${today.getDate() - daysInCurrMonth}`
                }`;

          return (
            <CalendarBox key={index} id={calendarBoxId} daysShow={props.daysShow}>
              <h4>
                {weekdays[day]}{" "}
                {`${
                  today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
                }`}
              </h4>
              <div className={classes.month}>{months[month]}</div>
              {filteredTasks.map((task) => (
                // Container for tasks
                <TaskCont
                  taskname={task.taskName}
                  key={task.id}
                  id={task.id}
                  taskPriority={task.taskPriority}
                  gate={task.gate}
                  result={task.result}
                  // fetch function
                  onFetch={props.fetchTask}
                />
              ))}
            </CalendarBox>
          );
        })}
      </div>
    </div>
  );
};

export default TaskBoard;
