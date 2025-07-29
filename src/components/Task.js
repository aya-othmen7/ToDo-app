import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../redux/TaskSlice/TaskSlice";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const dispatch=useDispatch();
  return (
    <div className={`todo-item ${task.isDone?"done" : "undone"}`}>
      <div className="text">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span onClick={()=>dispatch(doneTask({id: task.id}))}>{task.isDone ? "Done" : "Not Done"}</span>
        <button onClick={()=>dispatch(deleteTask({id: task.id}))}>Delete</button>
        <EditTask id ={task.id}/>
      </div>
    </div>
  );
};

export default Task;
