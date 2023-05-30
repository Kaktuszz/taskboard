import React from "react";
import classes from "./Header.module.css";
import AddTask from "./AddTask";
import Button from "./UI/Button";
import Clock from "./Clock";
import Input from "./UI/Input";

const Header = () => {

  return (
    <div className={classes.headercontainer}>
      <Clock />

      <div className={classes.menu}>
        <h3>Find task</h3>
        <Input type={"text"} />
        <Button>Search</Button>
        <br />
        <ul>
          <li>Today</li>
          <li>Upcoming</li>
        </ul>
        <h3>Add task</h3>
        Priority
      </div>
      <AddTask />
    </div>
  );
};

export default Header;
