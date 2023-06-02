import React, { useState } from "react";
import classes from "./TaskCont.module.css";
import database from "./firebase";
import Button from "./UI/Button";

const TaskCont = (props) => {
  // constants for checkbox and delete task
  const [checkBox, setCheckBox] = useState(props.result);
  const [deleteBox, setDeleteBox] = useState(false);
// function that set checkbox checked or unchecked
  const checkBoxSubmit = async () => {
    setCheckBox((prevCheck) => !prevCheck);
    await database.ref("act_tasks/" + props.id).update({ result: !checkBox });
    props.onFetch();
  };
// function that remove task
  const deleteTask = async () => {
    await database
      .ref("act_tasks/" + props.id)
      .remove()
      .catch(alert);

    props.onFetch();
  };

// function for show window with delete task
  const deteteTaskHandler = () => {
    setDeleteBox((prevstate) => !prevstate);
    console.log("clicked");
  };

  const clas = props.taskPriority;
  return (
    <div className={`${classes.cont} ${classes[clas]}`}>
      {deleteBox && (
        <div className={classes.deleteTask}>
          You want to delete task:
          <div className={`${classes.cont} ${classes.del}`}>
            {props.taskname}
          </div>
          <Button func={deleteTask}>Yes</Button>
          <Button func={deteteTaskHandler}>No</Button>
        </div>
      )}

      {!deleteBox && (
        <>
          <input
            type="checkbox"
            className={classes.check}
            onChange={checkBoxSubmit}
            checked={props.result}
          />
          {props.taskname}
          <div className={classes.butt}><button
            type="button"
            title="Delete task"
            onClick={deteteTaskHandler}
          >
            X
          </button></div>
        </>
      )}
    </div>
  );
};

export default TaskCont;
