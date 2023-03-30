import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { createTask } = useContext(TaskContext);

  const handlSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handlSubmit}>
        <h1 className="text-2xl font-bold text-white">Crea tus tareas!</h1>
        <input
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          value={title}
        />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          name=""
          placeholder="Escribe tu descripcion"
          id=""
          value={description}
          cols="20"
          className="bg-slate-300 p-3 w-full mb-2"
          rows="2"
        />
        <button
          className="bg-indigo-500 px-3 py-1 text-white"
          onClick={handlSubmit}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
