import React from "react";

const useFetchFunc=()=> {
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
      };

  return fetchTask();
};

export default useFetchFunc;
