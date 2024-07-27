import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../interfaces/Category";
import instance from "../api";

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/categories`);
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    })();
  }, []);

  const removeCategory = async (_id: string | undefined) => {
    if (!_id) return;

    try {
      await instance.delete(`/categories/${_id}`);
      setCategories(categories.filter((category) => category._id !== _id));
    } catch (error) {
      console.error("Error removing category:", error);
    }
  };

  return (
    <div>
      <h1>Hello Admin</h1>
      <Link to="/admin/category-add" className="btn btn-primary">
        Thêm danh mục mới
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <Link
                  to={`/admin/category-edit/${item._id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCategory(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
