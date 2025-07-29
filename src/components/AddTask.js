import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TaskSlice/TaskSlice";

const AddTask = () => {
  const dispatch=useDispatch();
  const [task, setTask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  });
  return (
    <div className="add-task">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control
            type="text"
            placeholder="Enter task title"
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            type="text"
            placeholder="Enter task description"
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary"
        onClick={()=>dispatch(addTask(task))}>
          Add new Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
