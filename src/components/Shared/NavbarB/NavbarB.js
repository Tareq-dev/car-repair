import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavbarB = () => {
     const [user] = useAuthState(auth);
     return (
          <div>
          <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold flex items-center">
          <img
            style={{ borderRadius: "50%", width: "45px" }}
            src="https://i.ibb.co/5TK9LMf/car-logo.jpg"
            alt=""
          />
          <span className="px-2">
            Car <span className="text-red-600">Repair</span>
          </span>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mx-24">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="home#features">Features</Nav.Link>
              <Nav.Link href="home#services">Servives</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user?.uid ? (
                <Nav.Link as={Link} to="/getting-services">
                  Get Servives
                </Nav.Link>
              ) : (
                ""
              )}
              <Nav.Link href="home#team">Team</Nav.Link>
              {user?.uid ? (
                <button
                  style={{ borderRadius: "30%" }}
                  className="text-white bg-black px-2 py-1"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </div>
     );
};

export default NavbarB;