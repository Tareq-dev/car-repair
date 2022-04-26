import React, { useState } from "react";
import "./SignUp.css";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setShowError("You have to match password");
      return;
    }
  };
  return (
    <div>
      <div className="d-flex justify-center mt-14 py-20 w-100 bg-sky-300">
        <Form
          onSubmit={handleCreateUser}
          className="bg-white px-8 py-10 rounded-lg"
        >
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
            <Form.Check
              onClick={() => setAgree(!agree)}
              //     className={agree ? "text-success" : "text-red-500"}
              className="text-black"
              type="checkbox"
              label="Agree all term and condition"
            />
          </Form.Group>
          <p className="text-danger bg-white mb-2 px-2">
            {showError}
            {error}
          </p>
          <Button
            disabled={!agree}
            variant="primary"
            className="text-black"
            type="submit"
          >
            Register
          </Button>
          <p className="text-black mt-2 px-2 rounded-lg">
            Already have a new account?
            <Link className="text-primary mx-2" to="/login">
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
