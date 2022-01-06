import React from "react";
import { useState } from "react";
import "../styles/todo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { tarea: "Comprar harina, jamón y pan rallado", completed: true },
    { tarea: "Hacer croquetas ricas", completed: true },
    { tarea: "Ir a la puerta de un gimnasio", completed: false },
    {
      tarea:
        "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);
  const [filterTask, setFilterTask] = useState("");

  const handleToDo = (ev) => {
    //buscamos el id de la tarea clicada
    const clikedTaskId = ev.currentTarget.id;
    //buscamos la tarea clicada a través de su id
    const foundTask = tasks.find((task) => task.index === clikedTaskId);
    console.log(foundTask);
    //invertimos la propiedad de la tarea completada
    foundTask.completed === true ? !foundTask.completed : foundTask.completed;
    //guardamos las series en el estado spread
    setTasks(...tasks);
  };
  const handleFilterTask = (ev) => {
    setFilterTask(ev.target.value);
  };

  const renderTasks = () => {
    return tasks
      .filter((task) => {
        return task.tarea.toLowerCase().includes(filterTask.toLowerCase());
      })

      .map((task, index) => {
        return (
          <li
            key={index}
            id={index}
            className={task.completed ? "completed" : ""}
            onClick={handleToDo}
          >
            {task.tarea}
          </li>
        );
      });
  };

  return (
    <div>
      <h1 className="list__title">Mi lista de tareas</h1>
      <form>
        <label htmlFor="filtertask">Filtra las tareas</label>
        <input
          type="text"
          id="filtertask"
          value={filterTask}
          onChange={handleFilterTask}
        />
      </form>
      <ul className="list__task">{renderTasks()}</ul>
      <p>Tareas totales: {tasks.length}</p>
      <p>
        Tareas completadas:
        {tasks.filter((task) => {
          return tasks.length;
        })}
      </p>
      <p>Tareas pendientes: {tasks.length}</p>
    </div>
  );
};

export default ToDo;
