import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/config";
import { useState } from "react";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // reset state status
    setErrorMessage("");
    setSuccessMessage(false);

    // password validation
    if (password.length < 6) {
      setErrorMessage("password must be 6 characters or longer");
      return;
    }

    //password regex validation
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!regex.test(password)) {
      setErrorMessage(
        "give at least one uppercase and lowercase and number and special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        setSuccessMessage(false);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium mb-5">Welcome to Register Page</h1>
      <form
        onSubmit={handleRegisterForm}
        className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          {errorMessage && (
            <p className="text-red-600 font-medium text-lg">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-600 font-medium text-lg">
              Successfully registration done...
            </p>
          )}
        </div>
      </form>
      <div className="flex items-center gap-2 my-5 text-lg font-medium">
        <p>Already have an account please</p>
        <span className="btn btn-info">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
