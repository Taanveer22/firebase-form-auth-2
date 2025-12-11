import { Link } from "react-router-dom";

const Login = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="">
      <h1 className="text-2xl font-medium mb-5">Welcome to Register Page</h1>
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
      </form>
      <div className="flex items-center gap-2 mt-5 text-lg font-medium">
        <p>New to here please</p>
        <span className="btn btn-info">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
