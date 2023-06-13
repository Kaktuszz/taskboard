import React, { useState } from "react";
import classes from "./Header.module.css";
import AddTask from "./AddTask";
import Button from "./UI/Button";
import Clock from "./Clock";
import Input from "./UI/Input";
import "firebase/auth";
import { auth } from "./firebase";

const Header = (props) => {
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.setItem("isAuth", false);
      props.setIsAuth(false);
    });
  };
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
      <Button func={() => props.callback(7)}>7 Days</Button>
      <Button func={() => props.callback(14)}>14 Days</Button>
      <Button func={() => props.callback(30)}>30 Days</Button>
      <div className={classes.logout}>
        <Button func={signOut}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
