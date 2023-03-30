import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/Task";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
