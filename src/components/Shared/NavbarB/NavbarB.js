import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarB = () => {
  return (
    <div>
      <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold flex items-center"><img  style={{borderRadius:"50%",width:"45px"}} src="https://i.ibb.co/5TK9LMf/car-logo.jpg" alt="" /><span className="px-2">Car <span className="text-red-600">Repair</span></span></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="home#features">Features</Nav.Link>
            <Nav.Link href="home#services">Servives</Nav.Link>
            <Nav.Link href="home#team">Team</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarB;
