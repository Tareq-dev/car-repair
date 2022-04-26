import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import SocialLogin from "./../SocialLogin/SocialLogin";
import Loading from "../../Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="d-flex justify-center mt-18 py-14 w-100 bg-img bg-sky-300">
        <Form
          onSubmit={handleSignIn}
          className="bg-white px-8 mt-28 py-14 rounded-lg"
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className="text-black"
              type="checkbox"
              label="Agree all term and condition"
            />
          </Form.Group>
          <Button
            disabled={!agree}
            variant="primary"
            className="text-black"
            type="submit"
          >
            Login
          </Button>
          <p className="text-center text-red-500">
            {error ? error.message : ""}
          </p>
          <p className="text-blak mt-2 px-2 rounded-lg">
            Don't have an account?
            <Link className="text-primary mx-2" to="/signup">
              Please Register to click here.
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

export default Login;
