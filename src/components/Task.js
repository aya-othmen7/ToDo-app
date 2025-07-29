import React from "react";

const Task = ({ task }) => {
  return (
    <div className={`todo-item ${task.isDone?"done" : "undone"}`}>
      <div className="text">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.isDone ? "Done" : "Not Done"}</span>
      </div>
    </div>
  );
};

export default Task;
