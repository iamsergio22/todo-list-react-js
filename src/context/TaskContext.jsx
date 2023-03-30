import React, { createContext,useState,useEffect } from "react";
import { tasks as data } from "../data/Task";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);

  function createTask(title, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  function deleteTask(task_id) {
    setTasks(tasks.filter((task) => task.id !== task_id));
  }
  
  return (
    <TaskContext.Provider value={{
      tasks:tasks,
      deleteTask:deleteTask,
      createTask:createTask
    }}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContext;
