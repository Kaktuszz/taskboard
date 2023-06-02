import React, { useState } from "react";
import classes from "./Header.module.css";
import AddTask from "./AddTask";
import Button from "./UI/Button";
import Clock from "./Clock";
import Input from "./UI/Input";

const Header = (props) => {

  // const [daysShow, setDaysShow] = useState(7);

  // const daysShowHandler=(e)=>{
  //   setDaysShow(e.target.value);
  //   console.log(daysShow);
  // }

  // const handleClick =()=>{
  //   props.callback(e.target.value);
  //   console.log(e.target.value);
  // }

  

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
      <AddTask onFetch={props.onFetch} />
      <h3>Show Days</h3>
      {/* <Input type={"number"} value={daysShow} onChange={daysShowHandler} /> */}
      {/* callback functions that will send to App.js with info for calendar */}
      <Button func={() => props.callback(7)}>7 Days</Button>
      <Button func={() => props.callback(14)}>14 Days</Button>
      <Button func={() => props.callback(30)}>30 Days</Button>
      {/* <Button func={handleClick}>Set</Button> */}
    </div>
  );
};

export default Header;
