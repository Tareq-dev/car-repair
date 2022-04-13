import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarB = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold flex items-center"><img className="w-25 h-25" style={{borderRadius:"50%"}} src="https://i.ibb.co/5TK9LMf/car-logo.jpg" alt="" /><span className="px-2">Car <span className="text-red-600">Repair</span></span></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#service">Servives</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarB;
