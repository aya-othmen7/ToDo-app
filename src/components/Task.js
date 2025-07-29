import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/TaskSlice/TaskSlice";

const Task = ({ task }) => {
  const dispatch=useDispatch();
  return (
    <div className={`todo-item ${task.isDone?"done" : "undone"}`}>
      <div className="text">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.isDone ? "Done" : "Not Done"}</span>
        <buttton onClick={()=>dispatch(deleteTask({id: task.id}))}>Delete</buttton>
      </div>
    </div>
  );
};

export default Task;
