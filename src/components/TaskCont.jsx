import React, { useState } from "react";
import classes from "./TaskCont.module.css";
import { database } from "./firebase";
import "firebase/firestore";
import Button from "./UI/Button";
import delButton from "./UI/trash.png";
import editButton from "./UI/edit-button.png";

const TaskCont = (props) => {
  // constants for checkbox, delete/edit task
  const [checkBox, setCheckBox] = useState(props.result);
  const [deleteBox, setDeleteBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [editTaskData, setEditTask] = useState({
    taskName: props.taskname,
    gate: `${props.gate.slice(0, 4)}-${props.gate.slice(
      4,
      6
    )}-${props.gate.slice(6, 8)}`,
    taskPriority: props.taskPriority,
  });

  const tasksCollection = database.collection("tasks").doc(props.id);
  // function that set checkbox checked or unchecked
  const checkBoxSubmit = async () => {
    setCheckBox((prevCheck) => !prevCheck);
    await tasksCollection.update({ result: !checkBox });
    props.onFetch();
  };
  // function that remove task
  const deleteTask = async () => {
    await tasksCollection.delete();
    props.onFetch();
  };
  // function for editing window

  const editTaskWindowHandler = () => {
    setEditBox((prevstate) => !prevstate);
    setEditTask({
      taskName: props.taskname,
      gate: `${props.gate.slice(0, 4)}-${props.gate.slice(
        4,
        6
      )}-${props.gate.slice(6, 8)}`,
      taskPriority: props.taskPriority,
    });
  };

  // function for date editing

  const editTaskHandler = (e) => {
    setEditTask({ ...editTaskData, [e.target.name]: e.target.value });
  };

  // function for editing task

  const editTask = async () => {
    await tasksCollection.update({
      taskName: editTaskData.taskName,
      gate: editTaskData.gate.split("-").join(""),
      taskPriority: editTaskData.taskPriority,
    });
    props.onFetch();
    setEditBox((prevstate) => !prevstate);
  };

  // function for show window with delete task
  const deteteTaskHandler = () => {
    setDeleteBox((prevstate) => !prevstate);
  };

  const clas = props.taskPriority;
  return (
    <div className={`${classes.cont} ${classes[clas]}`}>
      {deleteBox && (
        <div>
          You want to delete task:
          <div className={`${classes.cont} ${classes.del}`}>
            {props.taskname}
          </div>
          <div>
            <Button func={deleteTask}>Yes</Button>
            <Button func={deteteTaskHandler}>No</Button>
          </div>
        </div>
      )}
      {editBox && (
        <div>
          You want to edit task:
          <div className={`${classes.cont} ${classes.edi}`}>
            <input
              type="text"
              name="taskName"
              value={editTaskData.taskName}
              onChange={editTaskHandler}
            />
            <input
              type="date"
              name="gate"
              value={editTaskData.gate}
              onChange={editTaskHandler}
            />
            Priority:{" "}
            <select
              value={editTaskData.taskPriority}
              name="taskPriority"
              onChange={editTaskHandler}
            >
              <option value="non">None</option>
              <option value="low">Low</option>
              <option value="med">Medium</option>
              <option value="hig">High</option>
            </select>
          </div>
          <div>
            <Button func={editTask}>Edit</Button>
            <Button func={editTaskWindowHandler}>Cancel</Button>
          </div>
        </div>
      )}

      {!deleteBox && !editBox && (
        <>
          <input
            type="checkbox"
            className={classes.check}
            onChange={checkBoxSubmit}
            checked={props.result}
          />
          {props.taskname}
          <br />
          <div className={classes.butt}>
            <button
              type="button"
              title="Delete task"
              onClick={deteteTaskHandler}
            >
              <img src={delButton} alt="Delete "/>
            </button>
            <button
              type="button"
              title="Edit task"
              onClick={editTaskWindowHandler}
            >
              <img src={editButton} alt="Edit"/>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCont;
