import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="row header">
        <div className="col-3">
          <Link to="/">Home</Link>
        </div>
        <div className="col-3">
          {" "}
          <Link to="/admin">Admin</Link>
        </div>
        <div className="col-3">
          <Link to="/login">Login</Link>
        </div>
        <div className="col-3">
          {" "}
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
