import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../redux/TaskSlice/TaskSlice";
import EditTask from "./EditTask";
import { Button, Badge, Card } from "react-bootstrap";
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Card className={`mb-3 shadow-sm ${task.isDone ? "border-success" : "border-warning"}`}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{task.title}</span>
          <Badge bg={task.isDone ? "success" : "secondary"}>
            {task.isDone ? "Done" : "Not Done"}
          </Badge>
        </Card.Title>

        <Card.Text>{task.description}</Card.Text>

        <div className="d-flex gap-2">
          <Button
            variant={task.isDone ? "outline-success" : "outline-secondary"}
            size="sm"
            onClick={() => dispatch(doneTask({ id: task.id }))}
          >
            {task.isDone ? <FaTimes /> : <FaCheck />} Toggle
          </Button>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => dispatch(deleteTask({ id: task.id }))}
          >
            <FaTrash /> Delete
          </Button>

          <EditTask id={task.id} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Task;
