import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import Login from "./components/Login";
import { database } from "./components/firebase";
import "firebase/firestore";

function App() {
  // function for fetching tasks and setting new
  const [tasks, setTask] = useState([]);
  const [daysShow, setDaysShow] = useState(7);

  const [isAuth, setIsAuth] = useState(false);
  const tasksCollection = database.collection("tasks");

  const daysShowHandler = (data) => {
    setDaysShow(parseInt(data));
    // console.log(daysShow);
  };

  // very important function for setting tasks and refresh task on screen
  const fetchTask = async () => {
    const response = await tasksCollection.get();
    setTask(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // useEffect(()=>{
  //   localStorage.setItem("isAuth", false);
  // },[]);

  if (!isAuth && localStorage.getItem("isAuth") === "false") {
    return <Login setIsAuth={setIsAuth}></Login>;
  } else {
    return (
      <>
        <Header
          onFetch={fetchTask}
          callback={daysShowHandler}
          setIsAuth={setIsAuth}
        />
        <TaskBoard fetchTask={fetchTask} tasks={tasks} daysShow={daysShow} />
      </>
    );
  }
}

export default App;
