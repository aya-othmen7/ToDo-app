import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import AddTask from "./AddTask";
import { Button, ButtonGroup, Container } from "react-bootstrap";

const ListTask = () => {
  const tasks = useSelector((state) => state.task.tasklist);
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isDone;
    if (filter === "undone") return !task.isDone;
    return true;
  });

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">My To-Do List</h2>

      <AddTask />

      {/* Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <ButtonGroup>
          <Button variant={filter === "all" ? "primary" : "outline-primary"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "done" ? "success" : "outline-success"} onClick={() => setFilter("done")}>
            Done
          </Button>
          <Button variant={filter === "undone" ? "warning" : "outline-warning"} onClick={() => setFilter("undone")}>
            Undone
          </Button>
        </ButtonGroup>
      </div>

      {/* Display Tasks */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p className="text-center text-muted">No tasks to show.</p>
      )}
    </Container>
  );
};

export default ListTask;
