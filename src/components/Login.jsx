import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/config";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset state status
    setErrorMessage("");
    setSuccessMessage(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        // ===== email verification error =====
        if (!result.user.emailVerified) {
          setErrorMessage("please verify your email");
        } else {
          setSuccessMessage(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <h1 className="text-2xl font-medium mb-5">Welcome to Login Page</h1>
      <form
        onSubmit={handleLoginForm}
        className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
        {errorMessage && (
          <p className="text-lg font-medium text-red-600">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-lg font-medium text-green-500">Login Successful</p>
        )}
      </form>
      <div className="flex items-center gap-2 mt-5 text-lg font-medium">
        <p>New to here please</p>
        <span className="btn btn-info">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </>
  );
};

export default Login;
