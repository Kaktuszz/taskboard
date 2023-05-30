import React, { useEffect, useState } from "react";
import classes from "./TaskCont.module.css";
import database from "./firebase";

const TaskCont = (props) => {
  const [checkBox, setCheckBox] = useState(props.result);

  const checkBoxSubmit = async () => {
    setCheckBox((prevCheck) => !prevCheck);
    await database.ref("act_tasks/" + props.id).update({ result: !checkBox });
    props.onFetch();
  };

  const clas = props.taskPriority;
  return (
    <div className={`${classes.cont} ${classes[clas]}`}>
      <input
        type="checkbox"
        className={classes.check}
        onChange={checkBoxSubmit}
        checked={props.result}
      />
      {props.taskname}
    </div>
  );
};

export default TaskCont;
