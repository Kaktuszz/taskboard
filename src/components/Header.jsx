import React from "react";
import classes from "./Header.module.css";
import AddTask from "./AddTask";
import Button from "./UI/Button";

const Header = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <div className={classes.headercontainer}>
      <h1>
        {newDate.getDate()}.
        {newDate.getMonth() < 10
          ? `0${newDate.getMonth()}`
          : `${newDate.getMonth()}`}
        .{year}
      </h1>
      <h1>{newDate.getHours()}:{newDate.getUTCMinutes()}</h1>
      <div className={classes.menu}>
        <input type="text" />
        <Button>Search</Button>
        <br />
        Date:
        <ul>
          <li>Today</li>
          <li>Upcoming</li>
        </ul>
        Priority:
        <ul>
          <li>None</li>
          <li>Low</li>
          <li>Medium</li>
          <li>High</li>
        </ul>
      </div>
      <AddTask />
    </div>
  );
};

export default Header;
