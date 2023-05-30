import React, { useEffect, useState } from "react";
import classes from "./TaskBoard.module.css";
import CalendarBox from "./CalendarBox";
import TaskCont from "./TaskCont";

const TaskBoard = () => {
  const today = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [tasks, setTask] = useState([]);

  const fetchTask = async () => {
    const response = await fetch(
      "https://react-project8-53a24-default-rtdb.europe-west1.firebasedatabase.app/act_tasks.json"
    );
    const responseData = await response.json();
    const loadedTasks = [];

    for (const key in responseData) {
      loadedTasks.push({
        id: key,
        taskName: responseData[key].taskName,
        gate: responseData[key].gate,
        taskPriority: responseData[key].taskPriority,
        result: responseData[key].result,
      });
    }
    console.log({ loadedTasks, responseData });
    setTask(loadedTasks);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  // create custom hook

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth() + 1;
  const daysInCurrMonth = getDaysInMonth(currYear, currMonth);
  
  return (
    <div className={classes.maincontainer}>
      <div className={classes.board}>
        {[...Array(7)].map((_, index) => {
          const today = new Date(
            currYear,
            currMonth - 1,
            date.getDate() + index
          );
          const day = today.getDay();
  
          const filteredTasks = tasks.filter(
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
  // counting calendar id
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
            <CalendarBox key={index} id={calendarBoxId}>
              <h4>
                {weekdays[day]}{" "}
                {`${
                  today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
                }`}
              </h4>
              {filteredTasks.map((task) => (
                <TaskCont
                  taskname={task.taskName}
                  key={task.id}
                  id={task.id}
                  taskPriority={task.taskPriority}
                  gate={task.gate}
                  result={task.result}
                  onFetch={() => fetchTask()}
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
