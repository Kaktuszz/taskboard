// import React, { createContext, useState } from "react";

// export const TaskContext = createContext({
//     taskList: [],
//     tasksByDate: {},
//     addTask: () => {},
//   });

// export const TaskProvider = (props) => {
//   const [taskList, setTaskList] = useState([]);

//   const addTask = (taskData) => {
//     setTaskList([...taskList, taskData]);
//   };

//   const contextValue = {
//     taskList,
//     addTask,
//   };

//   return (
//     <TaskContext.Provider value={contextValue}>
//       {props.children}
//     </TaskContext.Provider>
//   );
// };