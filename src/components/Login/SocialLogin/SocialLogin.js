import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || loading1) {
    return <p>Loading...</p>;
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }
  if (error || error1) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-blue-300 flex justify-center items-center px-2 py-1 rounded-lg text-black mt-2"
        >
          <img
            className="mx-2"
            style={{ width: "30px" }}
            src="https://i.ibb.co/8gL10p2/g.png"
            alt=""
          />
          <p>Sign In With Google</p>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="bg-blue-300 flex justify-center items-center px-2 py-1 rounded-lg mx-2 text-black mt-2"
        >
          <img
            className="mx-2"
            style={{ width: "30px" }}
            src="https://i.ibb.co/rGJKTk7/f.png"
            alt=""
          />
          <p>Sign In With Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
