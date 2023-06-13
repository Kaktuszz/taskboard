import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from "./AddTask.module.css";
import { auth, database } from "./firebase.js";
// import { addDoc, collection } from "firebase/firestore";

const AddTask = (props) => {
  //Додати useReducer!!
  // states for task data
  const [priority, setPriority] = useState("");
  const [taskName, setTaskName] = useState("");
  const [dateTask, setDayTask] = useState("");
  const [formatDate, setFormatDate] = useState("");
  //Додати useReducer!!

  // firestore adder
  const tasksCollection = database.collection("tasks");
  const createTask = async (event) => {
    event.preventDefault();
    await tasksCollection.add({
      id: Math.random().toString(),
      gate: formatDate,
      taskName: taskName,
      taskPriority: priority === "" ? "non" : priority,
      result: false,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    });
    console.log(auth.currentUser.displayName);
    await props.onFetch();
    setPriority("");
    setDayTask("");
    setTaskName("");
  };
  // task adder
  // const addTaskHandler = async (event) => {
  //   event.preventDefault();
  //   console.log({
  //     gate: formatDate,
  //     taskName: taskName,
  //     taskPriority: priority,
  //     result: false,
  //   });
  //   // here task goes to DB
  //   await database.ref("act_tasks").push({
  //     id: Math.random().toString(),
  //     gate: formatDate,
  //     taskName: taskName,
  //     taskPriority: priority === "" ? "non" : priority,
  //     result: false,
  //   });
    // clear inputs and renew tasks on screen
    await props.onFetch();
    setPriority("");
    setDayTask("");
    setTaskName("");
  };

  // handlers for task data
  const priorityHandler = (e) => {
    setPriority(e.target.value);
  };

  const taskHandler = (e) => {
    setTaskName(e.target.value);
  };

  const dateHandler = (e) => {
    // formate date for "gate" value
    setFormatDate(e.target.value.split("-").join(""));
    setDayTask(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={createTask}>
      <ul>
        <li
          className={`${classes.non} ${
            priority === "non" ? `${classes.selected}` : ""
          }`}
        >
          <button
            type="button"
            className={classes.buttons}
            value="non"
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
