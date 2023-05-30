import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from "./AddTask.module.css";
import database from "./firebase.js";

const AddTask = () => {
  //Додати useReducer!!

  const [priority, setPriority] = useState("");
  const [taskName, setTaskName] = useState("");
  const [dateTask, setDayTask] = useState("");
  const [formatDate, setFormatDate] = useState("");
  //Додати useReducer!!
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = async (event) => {
    event.preventDefault();
    const taskData = {
      id: Math.random().toString(),
      gate: formatDate,
      taskName: taskName,
      taskPriority: priority,
    };
    setTaskList([...taskList, taskData]);
    console.log(taskData);
    await database.ref("act_tasks").push({
      id: taskData.id,
      gate: taskData.gate,
      taskName: taskData.taskName,
      taskPriority: taskData.taskPriority,
      result: false,
    });

    setPriority("");
    setDayTask("");
    setTaskName("");
  };

  const priorityHandler = (e) => {
    setPriority(e.target.value);
  };

  const taskHandler = (e) => {
    setTaskName(e.target.value);
  };

  const dateHandler = (e) => {
    setFormatDate(e.target.value.split("-").join(""));
    setDayTask(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={addTaskHandler}>
      <ul>
        <li
          className={`${classes.non} ${
            priority === "none" ? `${classes.selected}` : ""
          }`}
        >
          <button
            type="button"
            className={classes.buttons}
            value="none"
            onClick={priorityHandler}
          >
            None
          </button>
        </li>
        <li
          className={`${classes.low} ${
            priority === "low" ? `${classes.selected}` : ""
          }`}
        >
          <button
            type="button"
            className={classes.buttons}
            value="low"
            onClick={priorityHandler}
          >
            Low
          </button>
        </li>
        <li
          className={`${classes.med} ${
            priority === "med" ? `${classes.selected}` : ""
          }`}
        >
          <button
            type="button"
            className={classes.buttons}
            value="med"
            onClick={priorityHandler}
          >
            Medium
          </button>
        </li>
        <li
          className={`${classes.hig} ${
            priority === "hig" ? `${classes.selected}` : ""
          }`}
        >
          <button
            type="button"
            className={classes.buttons}
            value="hig"
            onClick={priorityHandler}
          >
            High
          </button>
        </li>
      </ul>
      <Input type="text" value={taskName} onChange={taskHandler} />
      <Button>Add</Button>
      <input type="date" value={dateTask} onChange={dateHandler} required />
    </form>
  );
};

export default AddTask;