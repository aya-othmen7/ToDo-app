import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import AddTask from "./AddTask";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const tasks = useSelector((state) => state.task.tasklist);
  console.log(tasks);
  const [showDone, setshowDone] = useState(false);
  return (
    <div className="todo-list">
      <AddTask />
      <Button onClick={() => setshowDone(!showDone)}>
        {showDone ? "show undone" : "show done"}
      </Button>
      {tasks
        .filter((task) => task.isDone === showDone)
        .map((task) => (
          <Task task={task} />
        ))}
    </div>
  );
};

export default ListTask;
