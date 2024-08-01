// AdminHeader.js
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <header className="admin-header">
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/admin">Product</Link>
          </li>
          <li>
            <Link to="/admin/category">Category</Link>
          </li>
          <li>
            <Link to="/admin/users">User</Link>
          </li>
          <li>
            <Link to="/admin/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminHeader;
