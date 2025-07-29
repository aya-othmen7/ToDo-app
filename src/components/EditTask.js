import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editTasks } from "../redux/TaskSlice/TaskSlice";

const EditTask = ({ id }) => {
  const dispatch = useDispatch();
  const [taskToEdit, editTask] = useState({
    title: "",
    description: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Control
                type="text"
                placeholder="Enter task title"
                onChange={(e) => {
                  editTask({ ...taskToEdit, title: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Control
                type="text"
                placeholder="Enter task description"
                onChange={(e) => {
                  editTask({ ...taskToEdit, description: e.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(editTasks({ id: id, taskToEdit }))
            }}
          >
            Edit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
