import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand className="mx-auto fw-bold">
          📝 To-Do App with Redux Toolkit
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
