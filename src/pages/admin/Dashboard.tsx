import { Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Dashboard = () => {
  const { state, handleRemove } = useContext(ProductContext);

  if (!state || !Array.isArray(state.products)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello Admin</h1>
      <Link className="btn btn-primary" to={`/admin/product-add`}>
        Add new product
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((item: Product) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category?.title}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
                <Link
                  className="btn btn-success"
                  to={`/admin/product-edit/${item._id}`}
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
