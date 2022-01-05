import React from "react";
import "../styles/todo.css";

const ToDo = () => {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];
  const completed = () => {
    if (completed === true) return "completed";
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index} className={task.completed ? "completed" : false}>
          {task.task}
        </li>
      );
    });
  };

  return (
    <div>
      <h1 className="list__title">Mi lista de tareas</h1>
      <ul className="list__task">{renderTasks()}</ul>
    </div>
  );
};

export default ToDo;
