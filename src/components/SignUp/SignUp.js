import React, { useState } from "react";
import "./SignUp.css";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import NavbarB from "../Shared/NavbarB/NavbarB";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/");
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password, confirmPassword);
  };
  return (
    <div>
      <NavbarB />
      <div className="d-flex justify-center mt-20 py-20 w-100 bg-img">
        <Form onSubmit={handleSignIn} className="bg-glass px-24 py-10">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className="text-white" type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" className="text-white" type="submit">
            Register
          </Button>
          <p className="text-white bg-blue-600 mt-2 px-2 rounded-lg">
            Already have a new account?
            <Link className="text-white mx-2" to="/login">
               Please Sign In to click here.
            </Link>
          </p>

          <div className="text-white mt-2">
            _____________________________ or _____________________________
          </div>
          <SocialLogin />
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
