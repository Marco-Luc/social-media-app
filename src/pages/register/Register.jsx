import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Leo Media</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ut minus obcaecati veniam quo, natus, explicabo vel voluptate
            dolorem debitis dolores error commodi architecto dignissimos
            voluptatem quidem. Ut, repellat et.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Password" />
            <input type="password" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
