import { Link } from "react-router-dom";

const Register = () => {
  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
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
        </div>
      </form>
      <div className="flex items-center gap-2 mt-5 text-lg font-medium">
        <p>Already have an account please</p>
        <span className="btn btn-info">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
