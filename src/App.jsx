import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";

function App() {
  // function for fetching tasks and setting new
  const [tasks, setTask] = useState([]);
  const [daysShow, setDaysShow] = useState(7);

  const daysShowHandler =(data)=>{
    setDaysShow(parseInt(data));
    // console.log(daysShow);
  }

  // very important function for setting tasks and refresh task on screen 
  const fetchTask = async () => {
    const response = await fetch(
      "https://react-project8-53a24-default-rtdb.europe-west1.firebasedatabase.app/act_tasks.json"
    );
    const responseData = await response.json();
    const loadedTasks = [];

    for (const key in responseData) {
      loadedTasks.push({
        id: key,
        taskName: responseData[key].taskName,
        gate: responseData[key].gate,
        taskPriority: responseData[key].taskPriority,
        result: responseData[key].result,
      });
    }
    console.log({ loadedTasks, responseData });
    setTask(loadedTasks);
  };

  return (
    <>
      <Header onFetch={fetchTask} callback={daysShowHandler} />
      <TaskBoard fetchTask={fetchTask} tasks={tasks} daysShow={daysShow}/>
    </>
  );
}

export default App;
