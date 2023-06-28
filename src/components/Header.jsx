import React, { useState } from "react";
import classes from "./Header.module.css";
import AddTask from "./AddTask";
import Button from "./UI/Button";
import Clock from "./Clock";
// import Input from "./UI/Input";
import TaskCont from "./TaskCont";
import "firebase/auth";
import { auth } from "./firebase";

const Header = (props) => {
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.setItem("isAuth", false);
      props.setIsAuth(false);
    });
  };

  const taskFilter = props.tasks.filter(
    (task) => task.author.id === auth.currentUser.uid
  );
  return (
    <div className={classes.headercontainer}>
      <Clock />
      <div className={classes.menu}>
        {/* <h3>Find task</h3>
        <Input type={"text"} />
        <Button>Search</Button>
        <br />
        <ul>
          <li>Today</li>
          <li>Upcoming</li>
        </ul> */}
        <h3>Add task</h3>
        Priority
      </div>
      <AddTask onFetch={props.onFetch} />
      <h3>Show Days</h3>
      <Button func={() => props.callback(7)}>7 Days</Button>
      <Button func={() => props.callback(14)}>14 Days</Button>
      <Button func={() => props.callback(30)}>30 Days</Button>
      <h3>All Tasks</h3>
      <div className={classes.allTasks}>
        {taskFilter.map((task) => (
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
      </div>
      <div className={classes.logout}>
        <Button func={signOut}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
