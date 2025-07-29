import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
  return (
    <div className="add-task">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control type="text" placeholder="Enter task title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control type="text" placeholder="Enter task description" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add new Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
